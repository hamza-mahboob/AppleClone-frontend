import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoSearchSharp } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { useBag } from "../BagProvider";

// import { v4 as uuidv4 } from "uuid";

export default function Topnav() {
    const [nav, setNav] = useState(true);
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("token"));
    const [showBagDropdown, setShowBagDropdown] = useState(false);
    const { bagItems } = useBag();
    const { clearBag } = useBag();

    const toggleMenu = () => {
        if (window.innerWidth < 840) {
            const navLinks = document.querySelector("#navLinks");
            nav ? (navLinks.style = "display:block") : (navLinks.style = "display:hidden");
            setNav(!nav);
        }
    };

    // const handleBagClick = () => {
    //     setShowBagDropdown(!showBagDropdown);
    // };

    return (
        <>
            <header className="text-[#d0d0d0] h-11 w-full top-0 fixed z-50">
                <div className="relative w-screen">
                    <nav className="mx-auto w-full max-w-[1024px] h-11 flex items-center justify-between">
                        <div className="px-2 text-2xl">
                            <span className="cursor-pointer">
                                <Link to="/">
                                    <FaApple />
                                </Link>
                            </span>
                        </div>
                        <div id="navLinks" className="absolute top-0 hidden min-[840px]:block min-[840px]:static w-full min-[840px]:w-auto">
                            <ul className="flex flex-col min-[840px]:flex-row max-[840px]:bg-[#161617] text-white pb-12 min-[840px]:pb-0  min-[840px]:text-[#d0d0d0]">
                                <li onClick={toggleMenu} className="text-2xl min-[840px]:hidden ms-auto px-3 py-2">
                                    <IoIosClose />
                                </li>
                                <li onClick={toggleMenu} className="text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1">
                                    <Link to="store">Store</Link>
                                </li>
                                <li onClick={toggleMenu} className="text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1">
                                    <Link to="mac">Mac</Link>
                                </li>
                                <li onClick={toggleMenu} className="text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1">
                                    <Link to="ipad">Ipad</Link>
                                </li>
                                <li onClick={toggleMenu} className="text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1">
                                    <Link to="iphone">Iphone</Link>
                                </li>
                                <li onClick={toggleMenu} className="text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1">
                                    <Link to="watch">Watch</Link>
                                </li>
                                {/* <li onClick={toggleMenu} className="text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1">
                                    <Link to="accessories">Accessories</Link>
                                </li>
                                <li onClick={toggleMenu} className="text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1">
                                    <Link to="support">Support</Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="flex gap-2 me-3 items-center">
                            {token ? (
                                <>
                                    <button type="button" class="text-xl px-3 py-2 delay-100">
                                        <Link to="/bag">
                                            <BsBag />
                                        </Link>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            // localStorage.setItem("token", JSON.stringify(""));
                                            navigate("/");
                                        }}
                                        className="text-sm px-3 py-0.5 bg-red-500 duration-200 hover:text-black  hover:bg-red-700  border-[#d0d0d0] border rounded-full"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <button type="button" className="text-sm px-3 py-0.5 hover:bg-neutral-150 duration-500 hover:text-black  hover:bg-[#d0d0d0]  border-[#d0d0d0] border rounded-full">
                                    <Link to="/auth/login">Login</Link>
                                </button>
                            )}
                            {/* <button type="button" class="text-xl px-3 py-2 hover:font-bold delay-100">
                                <IoSearchSharp />
                            </button> */}
                            {/* Dropdown for bag items */}
                            {/* {showBagDropdown && (
                                <div className="absolute top-11 left-0 w-screen min-h-[450px] px-4 py-16 bg-[#fafafc]">
                                    <div className="mx-auto w-full max-w-[1024px]">
                                        <div className="flex justify-between  mb-10">
                                            <h2 className="text-2xl font-semibold text-black">Bag</h2>
                                            <button
                                                type="button"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                onClick={handleBagClick}
                                            >
                                                <Link to="bag">Review Bag</Link>
                                            </button>
                                        </div>
                                        <div className="text-black w-full py-12">
                                            {bagItems.length > 0 ? (
                                                bagItems.map((item, index) => {
                                                    return (
                                                        <>
                                                            <div className="flex hover:font-bold justify-between">
                                                                <div className="m-5" key={Math.random()}>
                                                                    {item.name}
                                                                </div>
                                                                <div className="m-5" key={Math.random()}>
                                                                    {item.price}
                                                                </div>
                                                            </div>
                                                        </>
                                                    );
                                                })
                                            ) : (
                                                <div>No items in the bag</div>
                                            )}
                                        </div>
                                        <div className="text-[12px]">
                                            <h2 className="text-[12px] tracking-wide text-[#6e6e73] mb-3">My Profile</h2>
                                            <ul className="font-medium">
                                                <li className="leading-6  text-[#333336] hover:text-black">
                                                    <Link to="bag">Orders</Link>
                                                </li>
                                                <li className="leading-6  text-[#333336] hover:text-black">
                                                    <Link to="bag">Your Saves</Link>
                                                </li>
                                                <li className="leading-6  text-[#333336] hover:text-black">
                                                    <Link to="/auth/register">Account</Link>
                                                </li>
                                                <li className="leading-6  text-[#333336] hover:text-black">
                                                    <Link to="/auth/login">Sign In</Link>
                                                </li>
                                            </ul>
                                        </div> */}

                            {/* <button className="text-3xl text-red-500 text-center m-5" onClick={clearBag}>
                                            Clear
                                        </button> */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* )} */}
                            <button className="text-xl block min-[840px]:hidden" onClick={toggleMenu}>
                                <AiOutlineMenu />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
