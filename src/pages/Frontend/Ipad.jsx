import React from "react";
import { Link } from "react-router-dom";
import "./Ipad.css";

import ipadpro from "../../assets/images/ipad/ipadpro.svg";
import ipadair from "../../assets/images/ipad/ipadair.svg";
import ipad from "../../assets/images/ipad/ipad.svg";
import ipadCompare from "../../assets/images/ipad/ipad_compare.svg";
import ipadPencil from "../../assets/images/ipad/apple_pencil.svg";
import keyboard from "../../assets/images/ipad/keyboard.svg";
import acc from "../../assets/images/ipad/ipad_acc.svg";
import ipados from "../../assets/images/ipad/ipados.svg";
import ipadshop from "../../assets/images/ipad/shop_ipad.svg";
import m2chip from "../../assets/images/ipad/m2_chip.png";
import comp_ipad_pro from "../../assets/images/ipad/compare_ipad_pro.png";
import comp_ipad_pro_Switch from "../../assets/images/ipad/compare_ipad_pro_swatches.png";
import comp_ipad_air from "../../assets/images/ipad/compare_ipad_air.png";
import comp_ipad_air_Switch from "../../assets/images/ipad/compare_ipad_air_swatches.png";
import comp_ipad from "../../assets/images/ipad/compare_ipad.png";
import comp_ipad_Switch from "../../assets/images/ipad/compare_ipad_swatches.png";
import comp_ipad_9 from "../../assets/images/ipad/compare_ipad_9.png";
import comp_ipad9__Switch from "../../assets/images/ipad/compare_ipad_9_swatches.png";
import comp_ipad_mini from "../../assets/images/ipad/compare_ipad_mini.png";
import comp_ipad_mini_Switch from "../../assets/images/ipad/compare_ipad_mini_swatches.png";
import appleCard from "../../assets/images/ipad/apple_card.jpg";
import tradein from "../../assets/images/ipad/trade_in.jpg";
import pencil from "../../assets/images/ipad/apple_pencil.jpg";
import smartkeyboard from "../../assets/images/ipad/smart_keyboard.jpg";
import accessories from "../../assets/images/ipad/accessories.jpg";
import axios from "axios";
import { message } from "antd";
// import ipadprohero from "../../assets/images/ipad/ipad_pro_hero.jpg";
export default function Ipad() {
    const handleBuy = async (productId) => {
        const quantity = 1;
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
            message.error("You are not Logged In. Please Login to purchase");
        }

        axios
            .post("http://localhost:8000/cart/addtocart", JSON.stringify({ quantity: quantity }), {
                params: {
                    productId: productId,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            .then((res) => message.success("Product is added to cart successfully."))
            .catch((res) => console.log(res.response));
    };
    return (
        <>
            <div className="">
                <div className="chapternav pt-16 pb-6 bg-black text-[#f5f5f7] text-[12px] overflow-hidden">
                    <ul className="flex justify-center items-stretch ">
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={ipadpro} className="w-10 object-contain mx-auto" alt="" />
                                <label>iPad Pro</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={ipadair} className="w-7 object-contain mb-1 mx-auto" alt="" />
                                <label>iPad Air</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between ">
                                <img src={ipad} className="w-10 object-contain mb-2.5 mx-auto" alt="" />
                                <label>iPad</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={ipadCompare} className="w-10 mx-auto object-contain" alt="" />
                                <label>Compare</label>
                            </div>
                        </li>
                        <li className="px-3">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={ipadPencil} className="h-[52px] object-contain mx-auto" alt="" />
                                <label>iPad Pencil</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={keyboard} className="h-[52px] object-contain" alt="" />
                                <label>Key Board</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={acc} className="w-8 object-contain mx-auto" alt="" />
                                <label>Accessories</label>
                            </div>
                        </li>
                        <li className="px-3">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={ipados} className="w-8 object-contain mx-auto" alt="" />
                                <label>iPadOS 17</label>
                            </div>
                        </li>
                        <li className="px-3">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={ipadshop} className="w-16 object-contain" alt="" />
                                <label>Shop iPad</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#1d1d1f] py-3 text-[#f5f5f7]">
                <div class="w-[92%] min-[734px]:w-[80%] mx-auto text-center text-sm">
                    <p>Get 3% Daily Cash back with Apple&nbsp;Card. And pay for your new iPad over 12 months, interest-free when you choose to check out with Apple&nbsp;Card Monthly Installments.</p>
                    <Link className="text-[#2997ff]">Learn more &gt;</Link>
                </div>
            </div>
            <div className="ipadPro h-[800px] bg-black bg-contain bg-no-repeat text-white">
                <div className="grid grid-cols-2">
                    <div className=" h-[800px] flex flex-row justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-[56px] font-semibold">iPad Pro</h1>
                            <h2 className="text-2xl flex items-center font-semibold">
                                <span>Supercharged by </span>
                                <span className="w-16">
                                    <img src={m2chip} alt="" />
                                </span>
                            </h2>
                            <h3 className="mb-3">From $799 </h3>
                            <button
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => handleBuy("660ebb1550353b77a15345ba")}
                            >
                                <Link> Buy</Link>
                            </button>
                            <p>
                                <Link className="text-[#2997ff]">Learn more &gt;</Link>
                            </p>
                        </div>
                    </div>
                    <div>{/* <img src={ipadprohero} alt="" /> */}</div>
                </div>
            </div>
            <div className="ipad h-[760px] my-5  bg-white bg-contain bg-no-repeat">
                <div className="grid grid-cols-2">
                    <div>{/* <img src={ipadprohero} alt="" /> */}</div>
                    <div className=" h-[800px] flex flex-row items-center">
                        <div className="ms-36">
                            <h1 className="text-[56px] font-semibold">iPad</h1>
                            <h2 className="text-2xl mb-4 font-semibold">
                                Lovavle. Drawable. <br />
                                Magical
                            </h2>
                            <h3 className="mb-3">From $499 </h3>
                            <button
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => handleBuy("660ebb7750353b77a15345b")}
                            >
                                <Link> Buy</Link>
                            </button>
                            <p>
                                <Link className="text-[#2997ff]">Learn more &gt;</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f5f5f7] p-8">
                <div className="bg-white mx-8 py-24">
                    <h1 className="font-semibold text-[56px] mb-9 text-center">Which iPad is Rigth for You?</h1>
                    <p className="text-center text-[21px]">
                        <span className="me-8">
                            <Link className="text-[#2997ff]">Compare All iPad Modals &gt;</Link>
                        </span>
                        <span>
                            <Link className="text-[#2997ff]">Shop iPad &gt;</Link>
                        </span>
                    </p>
                    <div className="w-[940px] mx-auto mt-16">
                        <div className="grid grid-cols-5 gap-x-8">
                            <div className="">
                                <div className="w-44 text-center">
                                    <img src={comp_ipad_pro} className="w-44 mb-3" alt="" />
                                    <img src={comp_ipad_pro_Switch} className="mx-auto w-8 mb-6" alt="" />
                                    <h1 className="text-2xl font-semibold mb-7">iPad Pro</h1>
                                    <h2 className="mb-6">The ultimate iPad experience with the most advanced technology.</h2>
                                    <h3 className="mb-3">From $799 </h3>
                                    <button
                                        type="button"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => handleBuy("660ebb1550353b77a15345ba")}
                                    >
                                        <Link> Buy</Link>
                                    </button>
                                    <p className="pb-6  border-b-2 border-b-gray-500">
                                        <Link className="text-[#2997ff]">Learn more &gt;</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="w-44 text-center">
                                    <img src={comp_ipad_air} className="w-32 mx-auto mt-6 mb-5" alt="" />
                                    <img src={comp_ipad_air_Switch} className="mx-auto w-20 mb-6" alt="" />
                                    <h1 className="text-2xl font-semibold mb-9">iPad Air</h1>
                                    <h2 className="mb-9 px-3">Serious performance in a thin and light design.</h2>
                                    <h3 className="mb-3">From $599 </h3>
                                    <button
                                        type="button"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => handleBuy("660ebb4450353b77a15345bc")}
                                    >
                                        <Link> Buy</Link>
                                    </button>
                                    <p className="pb-6  border-b-2 border-b-gray-500">
                                        <Link className="text-[#2997ff]">Learn more &gt;</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="w-44 text-center">
                                    <img src={comp_ipad} className="w-[120px] mx-auto mt-8 mb-5" alt="" />
                                    <img src={comp_ipad_Switch} className="mx-auto w-16 mb-6" alt="" />
                                    <h1 className="text-2xl font-semibold mb-2">iPad</h1>
                                    <h2 className="text-[12px] mb-6">10th Generation</h2>
                                    <h2 className="mb-6 px-2">The colorful, all‑screen iPad for the things you do every day..</h2>
                                    <h3 className="mb-3">From $499 </h3>
                                    <button
                                        type="button"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => handleBuy("660ebb7750353b77a15345be")}
                                    >
                                        <Link> Buy</Link>
                                    </button>
                                    <p className="pb-6  border-b-2 border-b-gray-500">
                                        <Link className="text-[#2997ff]">Learn more &gt;</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="w-44 text-center">
                                    <img src={comp_ipad_9} className="w-[120px] mx-auto mt-8 mb-3" alt="" />
                                    <img src={comp_ipad9__Switch} className="mx-auto w-8 mb-6" alt="" />
                                    <h1 className="text-2xl font-semibold mb-2">iPad</h1>
                                    <h2 className="text-[12px] mb-6">9th Generation</h2>
                                    <h2 className="mb-6 px-2">All the essentials in the most affordable iPad.</h2>
                                    <h3 className="mb-3">From $999 </h3>
                                    <button
                                        type="button"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => handleBuy("660ebba050353b77a15345c0")}
                                    >
                                        <Link> Buy</Link>
                                    </button>
                                    <p className="pb-6  border-b-2 border-b-gray-500">
                                        <Link className="text-[#2997ff]">Learn more &gt;</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="w-44 text-center">
                                    <img src={comp_ipad_mini} className="w-24 mx-auto mt-[64px] mb-3" alt="" />
                                    <img src={comp_ipad_mini_Switch} className="mx-auto w-16 mb-6" alt="" />
                                    <h1 className="text-2xl font-semibold mb-10">iPad Mini</h1>
                                    <h2 className="mb-9 px-3">The full iPad experience designed to fit in one hand..</h2>
                                    <h3 className="mb-3">From $499 </h3>
                                    <button
                                        type="button"
                                        onClick={() => handleBuy("660ebbc250353b77a15345c2")}
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <Link> Buy</Link>
                                    </button>
                                    <p className="pb-6  border-b-2 border-b-gray-500">
                                        <Link className="text-[#2997ff]">Learn more &gt;</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 mx-8 grid grid-cols-2 gap-x-6">
                    <div className="bg-white h-[750px]">
                        <div className="h-[50%] text-center px-8 flex flex-col justify-center">
                            <h2 className="text-[48px] font-semibold tracking-tight leading-[3rem]">
                                Get 3% Daily Cash <br />
                                back with Apple Card.
                            </h2>
                            <p className="text-[21px] my-4">
                                And pay over time, interest‑free <br />
                                when you choose to check out with <br />
                                Apple Card Monthly Installments.
                            </p>
                            <p className="text-[21px]">
                                <Link className="text-[#2997ff]">Learn more &gt;</Link>
                            </p>
                        </div>
                        <div className="h-[50%]">
                            <img src={appleCard} className="object-contain mx-auto" alt="" />
                        </div>
                    </div>
                    <div className="bg-white h-[750px]">
                        <div className="h-[50%] text-center px-8 flex flex-col justify-center">
                            <h2 className="text-[48px] font-semibold px-6 tracking-tight leading-[3rem]">Trade in your current iPad and get credit toward a new one.</h2>
                            <p className="text-[21px] my-4 px-16 tracking-tight">
                                With Apple Trade In, just give us your <br /> eligible iPad and get credit for a new one. <br /> It’s good for you and the planet.
                            </p>
                            <p className="text-[21px]">
                                <Link className="text-[#2997ff]">Learn more &gt;</Link>
                            </p>
                        </div>
                        <div className="h-[50%]">
                            <img src={tradein} className="w-[320px] mx-auto mt-4" alt="" />
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-[56px] tracking-thick leading-[3rem] mt-24 mb-16 font-semibold">iPad Essenstials</h1>
                <div className="mt-6 mx-8 grid grid-cols-2 gap-x-6">
                    <div className="bg-white h-[620px]">
                        <div className="h-[40%] text-center px-8 flex flex-col justify-center">
                            <h2 className="text-[48px] font-semibold tracking-tight leading-[3rem]">Apple Pencil </h2>
                            <p className="text-[21px] my-4">Dream it up. jot it down</p>
                            <p className="text-[21px]">
                                <span className="me-8">
                                    <Link className="text-[#2997ff]">Shop &gt;</Link>
                                </span>
                                <span>
                                    <Link className="text-[#2997ff]">Learn more &gt;</Link>
                                </span>
                            </p>
                        </div>
                        <div className="h-[60%]">
                            <img src={pencil} className="w-full" alt="" />
                        </div>
                    </div>
                    <div className="bg-white h-[620px]">
                        <div className="h-[50%]">
                            <img src={smartkeyboard} className="" alt="" />
                        </div>
                        <div className="h-[50%] text-center px-8 flex flex-col justify-center">
                            <h2 className="text-[48px] font-semibold px-6 tracking-tight leading-[3rem]">Keyboards for iPad</h2>
                            <p className="text-[21px] my-4 px-16 tracking-tight">Keyboards that have you covered </p>
                            <p className="text-[21px]">
                                <span className="me-8">
                                    <Link className="text-[#2997ff]">Shop &gt;</Link>
                                </span>
                                <span>
                                    <Link className="text-[#2997ff]">Learn more &gt;</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white mt-6 mx-8 h-[652px]">
                    <div className="w-[380px] mx-auto text-center pt-12">
                        <h2 className="text-[48px] font-semibold tracking-tight leading-[3rem]">Accessories </h2>
                        <p className="text-[21px] my-4">Explore cases, covers, keyboard, Apple Pencil, Airpods and more</p>
                        <p className="text-[21px]">
                            <Link className="text-[#2997ff]">Shop iPad accessoris &gt;</Link>
                        </p>
                    </div>
                    <div>
                        <img src={accessories} className="h-[430px] mx-auto" alt="" />
                    </div>
                </div>
                <h1 className="text-center text-[56px] tracking-thick leading-[3rem] mt-24 mb-16 font-semibold">What makes an iPad aniPad?</h1>
                <div className="why-ipad bg-white mt-6 mx-8 h-[490px] grid grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-[48px] font-semibold tracking-tight leading-[3rem]">Why iPad</h2>
                        <p className="text-[21px] my-4">
                            Yes, It does that. <br /> And then some.{" "}
                        </p>
                        <p className="text-[21px]">
                            <Link className="text-[#2997ff]">Learn more &gt;</Link>
                        </p>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    );
}
