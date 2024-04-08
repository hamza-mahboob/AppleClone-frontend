import React from "react";
import { Link } from "react-router-dom";
import "./Watch.css";

import watchNavAcc from "../../assets/images/apppleWatch/watch_nav_accessories.svg";
import watchNavAirpods from "../../assets/images/apppleWatch/watch_nav_airpods.svg";
import watchNavbands from "../../assets/images/apppleWatch/watch_nav_bands.svg";
import watchNavComp from "../../assets/images/apppleWatch/watch_nav_compare.svg";
import watchNavFitness from "../../assets/images/apppleWatch/watch_nav_fitness.svg";
import watchNavHermes from "../../assets/images/apppleWatch/watch_nav_hermes.svg";
import watchNavNike from "../../assets/images/apppleWatch/watch_nav_nike.svg";
import watchNavSe from "../../assets/images/apppleWatch/watch_nav_se.svg";
import watchNavS8 from "../../assets/images/apppleWatch/watch_nav_series_8.svg";
import watchNavshop from "../../assets/images/apppleWatch/watch_nav_shop_watch.svg";
import watchNavStudo from "../../assets/images/apppleWatch/watch_nav_studio.svg";
import watchNavUltra from "../../assets/images/apppleWatch/watch_nav_ultra.svg";
import watchNavOS from "../../assets/images/apppleWatch/watch_nav_watch_os.svg";
import logoWatchS9 from "../../assets/images/apppleWatch/logo_watch_s9.png";
import logoWatchultra2 from "../../assets/images/apppleWatch/logo_watch_ultra_2.png";
import logoWatSE from "../../assets/images/apppleWatch/logo_watch_se.png";
import logoCarbonNeutral from "../../assets/images/apppleWatch/logo_carbon_neutral.png";

import comp_se from "../../assets/images/apppleWatch/compare_se.jpg";
import comp_s9 from "../../assets/images/apppleWatch/compare_s9.jpg";
import comp_ultra from "../../assets/images/apppleWatch/compare_ultra2.jpg";
import logo_fitness from "../../assets/images/apppleWatch/logo_fitness.png";
import cto_case from "../../assets/images/apppleWatch/cto-case.png";

import icon1 from "../../assets/images/apppleWatch/icon_1.svg";
import icon2 from "../../assets/images/apppleWatch/icon_2.svg";
import icon3 from "../../assets/images/apppleWatch/icon_3.svg";
import axios from "axios";
import { message } from "antd";

export default function Watch() {
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
                                <img src={watchNavS8} className="w-6 object-contain mx-auto" alt="" />
                                <label>
                                    Apple Watch <br /> Series 9
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavUltra} className="w-7 object-contain mb-1 mx-auto" alt="" />
                                <label>
                                    Apple Watch <br />
                                    Ultra 2
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between ">
                                <img src={watchNavSe} className="w-6 object-contain mb-2.5 mx-auto" alt="" />
                                <label>
                                    Apple Watch <br />
                                    SE
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavNike} className="w-7 mx-auto object-contain" alt="" />
                                <label>
                                    Apple Watch <br /> Nike
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavHermes} className="w-11 object-contain mx-auto" alt="" />
                                <label>
                                    Apple Watch <br />
                                    Hermes
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavStudo} className="w-16 object-contain" alt="" />
                                <label>
                                    Apple Watch <br />
                                    Studio
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavComp} className="w-12 object-contain mx-auto" alt="" />
                                <label>Compare</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavbands} className="w-4 object-contain mx-auto" alt="" />
                                <label>Bands</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavAirpods} className="w-11 object-contain" alt="" />
                                <label>Airpods</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col items-center justify-between">
                                <img src={watchNavAcc} className="w-6 object-contain" alt="" />
                                <label>Accessories</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col items-center justify-between">
                                <img src={watchNavFitness} className="w-8 object-contain" alt="" />
                                <label>Apple Fitness+</label>
                            </div>
                        </li>
                        <li className="px-3">
                            <div className="h-20 flex flex-col items-center justify-between">
                                <img src={watchNavOS} className="w-8 object-contain" alt="" />
                                <label>WatchOS 10</label>
                            </div>
                        </li>
                        <li className="px-3">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavshop} className="w-16 object-contain" alt="" />
                                <label>Shop Watch</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#1d1d1f] py-3 text-[#f5f5f7]">
                <div class="w-[92%] min-[734px]:w-[80%] mx-auto text-center text-sm">
                    <p>
                        Get 3 months of Apple Fitness+ When you buy an Apple Wathc.
                        <Link className="text-[#0066cc]">Learn more &gt;</Link>
                    </p>
                </div>
            </div>
            <div className="pt-8 mb-6 bg-black">
                <div className="pt-6 text-center text-white">
                    <img src={logoWatchS9} className="h-16 mx-auto" alt="" />
                    <h2 className="text-[48px] my-3 font-semibold tracking-tight">Smarter. Brighter. Mightier.</h2>
                    <h3 className="mb-3 text-[21px]">From $399 </h3>
                    <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handleBuy("660ebdde50353b77a15345d0")}
                    >
                        <Link> Buy</Link>
                    </button>
                    <p className="text-[21px]">
                        <span className="me-6">
                            <Link className="text-[#0066cc]">Learn more &gt;</Link>
                        </span>
                        <span>
                            <Link className="text-[#0066cc]">Watch a Film </Link>
                        </span>
                    </p>
                </div>
                <div className="watchS9 h-[740px]"></div>
            </div>
            <div className="pt-8 mb-6 bg-[#f5f5f7]">
                <div className="pt-6 pb-9  text-center text-black">
                    <img src={logoWatchultra2} className="h-[52px] mx-auto" alt="" />
                    <h2 className="text-[48px] my-3 font-semibold tracking-tight">Next Level Adventure.</h2>
                    <h3 className="mb-3 text-[21px]">From $799 </h3>
                    <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handleBuy("660ebdfe50353b77a15345d2")}
                    >
                        <Link> Buy</Link>
                    </button>
                    <p className="text-[21px]">
                        <Link className="text-[#0066cc]">Learn more &gt;</Link>
                    </p>
                </div>
                <div className="watchUltra h-[628px]"></div>
            </div>
            <div className="pt-8 mb-6 h-[732px] bg-[#f5f5f7] grid grid-cols-2">
                <div className="pt-6 pb-9 flex flex-col items-center justify-center ">
                    <img src={logoWatSE} className="h-[52px] mx-auto" alt="" />
                    <h2 className="text-[48px] my-3 font-semibold tracking-tight">A great deal to love.</h2>
                    <h3 className="mb-3 text-[21px]">From $249 </h3>
                    <p className="text-[21px]">
                        <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => handleBuy("660ebdbf50353b77a15345ce")}
                        >
                            <Link> Buy</Link>
                        </button>
                        <Link className="text-[#0066cc]">Learn more &gt;</Link>
                    </p>
                </div>
                <div className="watchSE mt-4 h-[650px]"></div>
            </div>
            <div className=" pt-8 bg-[#f5f5f7]">
                <div className="pt-6 pb-9  text-center text-black">
                    <img src={logoCarbonNeutral} className="h-[52px] mb-6 mx-auto" alt="" />
                    <h2 className="text-[48px] font-semibold tracking-tight leading-[2rem]">A first for Apple Watch</h2>
                    <h2 className="text-[48px] my-3 font-semibold tracking-tight">And Apple.</h2>

                    <p className="text-[21px]">
                        <Link className="text-[#0066cc]">Learn more &gt;</Link>
                    </p>
                </div>
                <div className="carbon-neutral h-[390px]"></div>
            </div>
            <h1 className="text-center text-[48px] tracking-thicker pt-16 pb-16 font-semibold">Which Apple Watch is right for you?</h1>
            <div className="w-[980px] mx-auto grid grid-cols-3">
                <div className="text-center">
                    <img src={comp_se} className="w-56 mx-auto mb-4" alt="" />
                    <div className="flex h-4 mb-4 justify-center items-center gap-2">
                        <div className="rounded-full w-3 h-3 bg-[#1a2530]"></div>
                        <div className="rounded-full w-3 h-3 mx-1 bg-[#ded6d1]"></div>
                        <div className="rounded-full w-3 h-3 bg-[#e0e0e0]"></div>
                    </div>
                    <h2 className="text-[21px] font-semibold tracking-tight mb-4">Apple Watch SE</h2>
                    <h3 className=" text-[14px]">All the Essenstials.</h3>
                    <h3 className=" text-[14px] mb-6">Light on Price.</h3>
                    <h3 className="mb-4">From $249 </h3>
                    <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handleBuy("660ebdbf50353b77a15345ce")}
                    >
                        <Link> Buy</Link>
                    </button>
                    <p className="pb-6 mx-12 border-b-2 border-b-gray-500">
                        <Link className="text-[#0066cc]">Learn more &gt;</Link>
                    </p>
                </div>
                <div className="text-center">
                    <img src={comp_s9} className="w-56 mx-auto mb-4" alt="" />
                    <div className="flex h-4 mb-4 justify-center items-center gap-2">
                        <div className="rounded-full w-3 h-3 bg-[#1a2530]"></div>
                        <div className="rounded-full w-3 h-3 mx-1 bg-[#ded6d1]"></div>
                        <div className="rounded-full w-3 h-3 bg-[#e0e0e0]"></div>
                        <div className="rounded-full w-3 h-3 bg-[#fadcde]"></div>
                        <div className="rounded-full w-3 h-3 bg-[#d61139]"></div>
                        <div className="rounded-full w-3 h-3 bg-[#3e3a36]"></div>
                        <div className="rounded-full w-3 h-3 bg-[#e6e6e7]"></div>
                        <div className="rounded-full w-3 h-3 bg-[#d4bda1]"></div>
                    </div>
                    <h2 className="text-[21px] font-semibold tracking-tight mb-4">Apple Watch Series 9</h2>
                    <h3 className=" text-[14px]">Powerfull Sensors.</h3>
                    <h3 className=" text-[14px] mb-6">advanced health features.</h3>
                    <h3 className="mb-4">From $399 </h3>
                    <button
                        type="button"
                        onClick={() => handleBuy("660ebdde50353b77a15345d0")}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Link> Buy</Link>
                    </button>
                    <p className="pb-6 mx-12 border-b-2 border-b-gray-500">
                        <Link className="text-[#0066cc]">Learn more &gt;</Link>
                    </p>
                </div>
                <div className="text-center">
                    <img src={comp_ultra} className="w-56 mx-auto mb-4" alt="" />
                    <div className="flex h-4 mb-4 justify-center items-center gap-2">
                        <div className="rounded-full w-3 h-3 bg-[#ccc4bc]"></div>
                    </div>
                    <h2 className="text-[21px] font-semibold tracking-tight mb-4">Apple Watch ULTRA 2</h2>
                    <h3 className=" text-[14px]">The most rugged</h3>
                    <h3 className=" text-[14px] mb-6">and capable</h3>
                    <h3 className="mb-4">From $799 </h3>
                    <button
                        type="button"
                        onClick={() => handleBuy("660ebdfe50353b77a15345d2")}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Link> Buy</Link>
                    </button>
                    <p className="pb-6 mx-12 border-b-2 border-b-gray-500">
                        <Link className="text-[#0066cc]">Learn more &gt;</Link>
                    </p>
                </div>
            </div>
            <div className="my-8">
                <p className="pb-6 text-center">
                    <span className="me-6">
                        <Link className="text-[#0066cc] text-2xl">Compare all modals &gt;</Link>
                    </span>
                    <span>
                        <Link className="text-[#0066cc] text-2xl">Shop Apple Watch &gt;</Link>
                    </span>
                </p>
            </div>
            <div className="bg-[#f5f5f7] mb-6 mx-24 py-32 pe-16">
                <div className="grid grid-cols-2 gap-16  h-[470px]">
                    <div className="flex flex-col w-[480px] mx-auto text-center justify-center items-center px-12">
                        <div>
                            <h2 className="text-[24px] tracking-tight mb-4">Family Setup</h2>
                            <p className="text-[48px] font-semibold tracking-tight leading-10 mb-4">
                                Your family joined <br />
                                at the wrist.
                            </p>
                            <p className="text-[21px] font-medium tracking-tight mb-4">Now family members who don’t have an iPhone can stay in touch with Apple Watch.</p>
                            <p className="pb-6 mx-12">
                                <button type="button" class="text-[#0066cc] bg-transparent hover:underline border border-[#0066cc] rounded-full text-sm px-3 py-1 text-center me-4">
                                    <Link>Learn More</Link>
                                </button>
                                <Link className="text-[#0066cc]">Shop Apple Watch &gt;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="family-setup"></div>
                </div>
            </div>
            <div className="bg-[#f5f5f7] mb-6 mx-24 py-12 pe-16">
                <div className="h-[500px] fitness-plus grid grid-cols-2 gap-16">
                    <div className=""></div>
                    <div className="flex flex-col text-center justify-center items-center px-12">
                        <div>
                            <h2 className="mb-4">
                                <img src={logo_fitness} className="h-8 mx-auto" alt="" />
                            </h2>
                            <p className="text-[21px] mb-4">
                                From HIIT to Maditation <br />
                                There is something for everyone.
                            </p>
                            <p className="">
                                <span className="me-6">
                                    <Link className="text-[#0066cc]">Try it free &#8599;</Link>
                                </span>
                                <Link className="text-[#0066cc]">Learn More &gt;</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mx-24 mb-6">
                <div className="flex justify-around">
                    <div className="w-[458px] text-center mx-auto pt-20 px-11 pb-12">
                        <h2 className="text-[48px] mb-6 font-semibold tracking-tight leading-[45px]">
                            Get upto $185 <br /> towards a new <br /> Apple Watch.
                        </h2>
                        <p className="text-[21px] tracking-tight mb-6">With Apple Trade In, just give us your eligible Apple Watch and get credit for a new one. It’s good for you and the planet.</p>
                        <p className="">
                            <Link className="text-[#0066cc]">Find Your Trade-In value &gt;</Link>
                        </p>
                    </div>
                    <div className="w-[458px] text-center mx-auto pt-20 px-11 pb-12">
                        <h2 className="text-[48px] mb-6 font-semibold tracking-tight leading-[3.5rem]">
                            Apply Card <br /> Monthly <br /> Installments.
                        </h2>
                        <p className="text-[21px] tracking-tight mb-6">
                            Pay for Your new Aple Watch over <br /> 12 months interent-free with Apple Card
                        </p>
                        <p className="">
                            <Link className="text-[#0066cc]">Learn More &gt;</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#f5f5f7] mb-6 mx-24 py-24">
                <div className="text-center">
                    <div>
                        <h2 className="mb-7 text-[28px]"> Apple Watch Studio</h2>
                        <p className="text-[48px] mb-4 tracking-tight font-medium leading-[3rem]">
                            Any Case. Any Band. <br />
                            Any Style you want.
                        </p>
                        <button class="bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 font-semibold rounded-full p-0.5">
                            <span class="flex w-full bg-white hover:text-[#0066cc] rounded-full p-2 cursor-pointer">Create Your Style</span>
                        </button>
                    </div>
                </div>
                <div className=" h-[500px] mt-12 cto-bands relative">
                    <div className="h-[500px] flex justify-center items-center">
                        <img src={cto_case} className="h-[500px] " alt="" />
                    </div>
                </div>
            </div>
            <div className="h-[760px] mx-24 mb-6">
                <div className="grid grid-cols-2 gap-x-6">
                    <div className="h-[760px] pt-20 text-center bg-[#f5f5f7] why-apple-watch">
                        <h1 className="text-2xl tracking-tight mb-6">Why Apple Watch</h1>
                        <h2 className="text-[48px] font-semibold mb-6 tracking-tight mx-20 leading-[3rem]">
                            It's the Ultimate device <br /> for a healthy life
                        </h2>
                        <p className="">
                            <Link className="text-[#0066cc] text-xl">Learn More &gt;</Link>
                        </p>
                    </div>
                    <div className="h-[760px] pt-20 text-center bg-[#f5f5f7] watchOS">
                        <h1 className="text-2xl tracking-tight mb-6">WatchOS 10</h1>
                        <h2 className="text-[48px] font-semibold mb-6 tracking-tight mx-20 leading-[3rem]">
                            Everything You love. <br /> Like never before.
                        </h2>
                        <p className="">
                            <Link className="text-[#0066cc] text-xl">Learn More &gt;</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[1100px] mx-auto">
                <div className="grid grid-cols-3 gap-2 py-20 text-center">
                    <div className="px-12">
                        <img src={icon2} className="h-[90px] mx-auto mb-3" />
                        <h3 className="text-[21px] font-semibold mb-3 tracking-tight">Fast Delivery or Pick up </h3>
                        <p className="text-[19px] tracking-tight mb-4">Enjoy two-hour delivery from an Apple&nbsp;Store, free delivery, or&nbsp;easy&nbsp;pickup.</p>
                        <p className="">
                            <Link className="text-[#0066cc] text-xl">Learn More &gt;</Link>
                        </p>
                    </div>
                    <div>
                        <img src={icon1} className="h-[90px] mx-auto mb-3" />
                        <h3 className="text-[21px] font-semibold mb-3 tracking-tight">
                            Apple Card <br />
                            Monthly Installments
                        </h3>
                        <p className="text-[19px] tracking-tight mb-4">
                            Pay for your new Apple&nbsp;Watch over time, interest‑free when you choose to check out with Apple&nbsp;Card Monthly&nbsp;Installments.
                        </p>
                        <p className="">
                            <Link className="text-[#0066cc] text-xl">Learn More &gt;</Link>
                        </p>
                    </div>
                    <div>
                        <img src={icon3} className="h-[90px] mx-auto mb-3" />
                        <h3 className="text-[21px] font-semibold mb-3 tracking-tight">Get Help Buying</h3>
                        <p className="text-[19px] tracking-tight mb-4">Have a question? Call a Specialist or chat online. Call 1‑800‑MY‑APPLE.</p>
                        <p className="">
                            <Link className="text-[#0066cc] text-xl">Contact Us &gt;</Link>
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="text-[56px] text-center font-semibold tracking-tight mt-28 mb-12">Apple Watch Assentails</h1>
            <div className="h-[720px] mx-24 mb-6">
                <div className="grid grid-cols-2 gap-x-6">
                    <div className="h-[720px] pt-16 text-center bg-[#f5f5f7] watch-bands">
                        <h2 className="text-[48px] font-semibold mb-6 tracking-tight mx-20 leading-[3rem]">
                            Arm Candy. <br /> In All new Flavours.
                        </h2>
                        <p className="">
                            <Link className="text-[#0066cc] text-xl">Shop the Letest Bands &gt;</Link>
                        </p>
                    </div>
                    <div className="h-[720px] pt-20 text-center bg-[#f5f5f7] watch-headphone">
                        <h2 className="text-[48px] font-semibold mb-6 tracking-tight mx-20 leading-[3rem]">
                            Magic runs in <br />
                            the family.
                        </h2>
                        <p className="text-[21px] tracking-tight my-4 mx-8">
                            Explore all Airpods modals <br /> and find the best one for you.
                        </p>
                        <p className="">
                            <Link className="text-[#0066cc] text-xl">Learn More &gt;</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
