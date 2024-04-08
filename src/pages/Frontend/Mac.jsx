import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import acc1 from "../../images/accordion1.png";
import acc2 from "../../images/accordion2.png";
import acc3 from "../../images/accordion3.png";
import axios from "axios";
import { message } from "antd";

export default function Mac() {
    const [expanded, setExpanded] = useState(false);

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

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const getImage = (panel) => {
        switch (panel) {
            case "panel1":
                return acc1;
            case "panel2":
                return acc2;
            case "panel3":
                return acc3;
            default:
                return "";
        }
    };
    return (
        <div className="pt-40 bg-neutral-100">
            {/* top */}
            <div className="flex items-center">
                <div className="flex flex-col flex-grow break-words mx-12 pl-24 pr-96 text-left">
                    <h1 className="flex text-7xl font-medium">Mac</h1>
                </div>

                <div className="flex flex-col justify-center mx-44">
                    <div className="flex items-center">
                        <div className="flex flex-col justify-center">
                            <h1 className="font-medium text-3xl">
                                If you can dream it,
                                <br /> Mac can do it.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video section */}
            <div id="video-container" className="max-w-full mx-auto mt-8 p-10">
                <video id="scrolling-video" className="w-full h-screen rounded-2xl object-cover" autoPlay muted loop>
                    <source src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <h1 className="flex text-5xl font-medium mt-44 mx-12 pl-24">Get to know Mac.</h1>

            {/* get to know mac */}
            <div className="mt-10 mx-8 pl-24">
                <Swiper spaceBetween={-20} slidesPerView={4} direction="horizontal">
                    {/* Slides */}
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div
                            className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative"
                            style={{
                                backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_xlarge_2x.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div>
                                <h2 className="text-sm font-medium m-3 text-white">GETTING STARTED</h2>
                                <h3 className="text-2xl font-semibold m-3 text-white">Easy to use. Easy to love.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div
                            className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative"
                            style={{
                                backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge_2x.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div>
                                <h2 className="text-sm font-medium m-3 text-white">PERFORMANCE AND BATTERY LIFE</h2>
                                <h3 className="text-2xl font-semibold m-3 text-white">Go fast. Go far.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div
                            className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative"
                            style={{
                                backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge_2x.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div>
                                <h2 className="text-sm font-medium m-3">Mac and iPhone</h2>
                                <h3 className="text-2xl font-semibold m-3">Dream team.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div
                            className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative"
                            style={{
                                backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge_2x.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div>
                                <h2 className="text-sm font-medium m-3">COMPATIBILITY</h2>
                                <h3 className="text-2xl font-semibold m-3">
                                    Mac runs your <br /> favourite apps.
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div
                            className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative"
                            style={{
                                backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div>
                                <h2 className="text-sm font-medium m-3 text-white">Privacy and Security</h2>
                                <h3 className="text-2xl font-semibold m-3 text-white pr-20">Your business is nobody else's.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div
                            className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative"
                            style={{
                                backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_durability__epiwcuk7zkeq_xlarge.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div>
                                <h2 className="text-sm font-medium m-3 text-gray-500">DURABILITY</h2>
                                <h3 className="text-2xl font-semibold m-3">Built to stand the test of time.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div
                            className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative"
                            style={{
                                backgroundImage:
                                    'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div>
                                <h2 className="text-sm font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* explore the lineup------------------------------------------------------------------------------------ */}
            <div className="flex items-center mt-80">
                <div className="flex flex-col flex-grow break-words mx-12 pl-24 pr-96 text-left">
                    <h1 className="flex text-7xl font-medium">Explore the lineup.</h1>
                </div>

                <div className="flex flex-col justify-center mx-44 ">
                    <div className="flex items-center">
                        <div className="flex flex-col justify-center">
                            <h1 className="font-medium text-lg justify-center text-blue-600 hover:cursor-pointer hover:underline">Compare all models. &gt;</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* grid of products */}

            <div className="grid grid-cols-5 gap-8 p-32">
                {/* Product 1 */}
                <div className="col-span-1 flex flex-col items-center">
                    {/* Product Image */}
                    <img
                        className="w-full mb-5 hover:cursor-pointer transition-transform duration-700 transform hover:scale-105"
                        src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
                        alt="Product 1"
                    />
                    {/* Product Details */}
                    <div className="mt-4 text-center flex flex-col">
                        <p className="text-orange-800 text-sm mt-3 font-semibold">New M3 models</p>

                        <h2 className="text-2xl font-semibold">MacBook Air 13” and 15”</h2>
                        <h3 className="font-semibold">M2 or M3 chip</h3>

                        <h3 className="font-light px-8 mt-3">Strikingly thin and fast so you can work, play, or create anywhere.</h3>

                        <h3 className="font-semibold mt-4">From $999 or $83.25/mo.</h3>

                        <div className="flex mt-10 items-center">
                            <h2 className="bg-blue-600 text-white rounded-3xl px-6 py-2 hover:bg-blue-500 hover:cursor-pointer">Learn more</h2>
                            <h2 className="text-blue-500 ml-9 hover:underline hover:cursor-pointer" onClick={() => handleBuy("660eb8b250353b77a15345aa")}>
                                Order now &gt;
                            </h2>
                        </div>

                        <div className="mt-8 border-b-black border-b"></div>

                        <h2 className="text-3xl font-semibold mt-8">13.6” or 15.3”</h2>
                        <h3 className="font-normal text-xs mt-2">Liquid Retina display with 500 nits of brightness and support for 1 billion colors</h3>

                        <div className="flex justify-center mt-14">
                            <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large.png" alt="" className="justify-center" />
                        </div>

                        <h3 className="font-normal text-xs mt-2">Apple M2 or M3 chip</h3>

                        <h3 className="font-normal text-xs mt-12">Up to</h3>
                        <h2 className="text-3xl font-semibold mt-2">18 hours</h2>
                        <h3 className="font-normal text-xs mt-2">Battery life</h3>

                        <h2 className="text-3xl font-semibold mt-12">4 ports</h2>
                        <h3 className="font-normal text-xs mt-2 mx-20">2x Thunderbolt / USB 4, headphone jack, MagSafe</h3>

                        <h2 className="text-3xl font-semibold mt-12">2.7 lb. or 3.3 lb.</h2>
                        <h3 className="font-normal text-xs mt-2 mx-20">Weight</h3>
                    </div>
                </div>

                <div className="col-span-1 flex flex-col items-center">
                    {/* Product Image */}
                    <img
                        className="w-full mb-10 hover:cursor-pointer transition-transform duration-700 transform hover:scale-105"
                        src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
                        alt="Product 1"
                    />
                    {/* Product Details */}
                    <div className="mt-4 text-center flex flex-col">
                        <h2 className="text-2xl font-semibold">MacBook Pro 16”</h2>
                        <h3 className="font-semibold">M3, M3 Pro, or M3 Max chip</h3>

                        <h3 className="font-light px-8 mt-3">The most advanced Mac laptops for demanding workflows.</h3>

                        <h3 className="font-semibold mt-4">From $1599 or $133.25/mo.</h3>

                        <div className="flex mt-10 items-center">
                            <h2 className="bg-blue-600 text-white rounded-3xl px-6 py-2 hover:bg-blue-500 hover:cursor-pointer">Learn more</h2>
                            <button className="text-blue-500 ml-9 hover:underline hover:cursor-pointer" onClick={() => handleBuy("660eb8ea50353b77a15345ac")}>
                                Buy &gt;
                            </button>
                        </div>

                        <div className="mt-[33px] border-b-black border-b -mx-8"></div>

                        <h2 className="text-3xl font-semibold mt-8">13.6” or 15.3”</h2>
                        <h3 className="font-normal text-xs mt-2">Liquid Retina display with 500 nits of brightness and support for 1 billion colors</h3>

                        <div className="flex justify-center mt-14">
                            <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large.png" alt="" className="justify-center" />
                        </div>

                        <h3 className="font-normal text-xs mt-2">Apple M2 or M3 chip</h3>

                        <h3 className="font-normal text-xs mt-12">Up to</h3>
                        <h2 className="text-3xl font-semibold mt-2">18 hours</h2>
                        <h3 className="font-normal text-xs mt-2">Battery life</h3>

                        <h2 className="text-3xl font-semibold mt-12">4 ports</h2>
                        <h3 className="font-normal text-xs mt-2 mx-20">2x Thunderbolt / USB 4, headphone jack, MagSafe</h3>

                        <h2 className="text-3xl font-semibold mt-12">2.7 lb. or 3.3 lb.</h2>
                        <h3 className="font-normal text-xs mt-2 mx-20">Weight</h3>
                    </div>
                </div>
            </div>

            {/* Why Apple is the best place to buy Mac--------------------------- */}
            <div className="flex items-center">
                <div className="flex flex-col flex-grow break-words mx-12 pl-16 pr-96 text-left">
                    <h1 className="flex text-6xl font-medium text-gray-950">
                        Why Apple is the best
                        <br />
                        place to buy Mac.
                    </h1>
                </div>

                <div className="flex flex-col justify-center mx-44 ">
                    <div className="flex items-center">
                        <div className="flex flex-col justify-center">
                            <h1 className="font-medium text-lg justify-center text-blue-600 hover:cursor-pointer hover:underline">Shop Mac &gt;</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card section */}
            <div className="mt-5 mx-8 pl-24">
                <Swiper spaceBetween={10} slidesPerView={4} direction="horizontal">
                    {/* Slides */}
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div className="w-[370px] h-[310px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col hover:cursor-pointer relative">
                            <div className="m-3 mt-5">
                                <img
                                    src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_apple_card__fa68csvawtei_large.png"
                                    alt="Title 1"
                                    className="w-auto h-auto max-w-full max-h-full"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-semibold m-3">
                                    Pay over time, <br /> interest-free.
                                </h3>
                                <h5 className="mx-3 text-md font-normal">When you choose to check out with Apple Card Monthly Installments.</h5>
                                {/* Plus icon positioned to bottom right */}
                                <div className="absolute bottom-0 right-0 mb-3 mr-3 bg-gray-600 rounded-full px-2 py-1">
                                    <FontAwesomeIcon icon={faPlus} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div className="w-[370px] h-[310px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col hover:cursor-pointer relative">
                            <div className="m-3 mt-5">
                                <img
                                    src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_specialist_alt__fht15dmiclei_large.png"
                                    alt="Title 1"
                                    className="w-auto h-auto max-w-full max-h-full"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-semibold m-3 pr-36">Save with Apple Trade In.</h3>
                                <h5 className="mx-3 text-md font-normal">Get credit toward your next Mac when you trade in an eligible device.</h5>
                                {/* Plus icon positioned to bottom right */}
                                <div className="absolute bottom-0 right-0 mb-3 mr-3 bg-gray-600 rounded-full px-2 py-1">
                                    <FontAwesomeIcon icon={faPlus} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div className="w-[370px] h-[310px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col hover:cursor-pointer relative">
                            <div className="m-3 mt-5">
                                <img
                                    src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_trade_in__ca5f20mux4b6_large.png"
                                    alt="Title 1"
                                    className="w-auto h-auto max-w-full max-h-full"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-semibold m-3 pr-36">Shop live with a Specialist.</h3>
                                <h5 className="mx-3 text-md font-normal">Choose your chip, memory, storge, even color.</h5>
                                {/* Plus icon positioned to bottom right */}
                                <div className="absolute bottom-0 right-0 mb-3 mr-3 bg-gray-600 rounded-full px-2 py-1">
                                    <FontAwesomeIcon icon={faPlus} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div className="w-[370px] h-[310px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col hover:cursor-pointer relative">
                            <div className="m-3 mt-5">
                                <img
                                    src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_customize__b6w4i5ax89py_large.png"
                                    alt="Title 1"
                                    className="w-auto h-auto max-w-full max-h-full"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-semibold m-3 pr-36">Get to know your new Mac.</h3>
                                <h5 className="mx-3 text-md font-normal">When you choose to check out with Apple Card Monthly Installments.</h5>
                                {/* Plus icon positioned to bottom right */}
                                <div className="absolute bottom-0 right-0 mb-3 mr-3 bg-gray-600 rounded-full px-2 py-1">
                                    <FontAwesomeIcon icon={faPlus} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div className="w-[370px] h-[310px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col hover:cursor-pointer relative">
                            <div className="m-3 mt-5">
                                <img
                                    src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_delivery__fyzranm9416y_large.png"
                                    alt="Title 1"
                                    className="w-auto h-auto max-w-full max-h-full"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-semibold m-3 pr-20">Explore a shopping experience designed around you.</h3>
                                <h5 className="mx-3 text-md font-normal">When you choose to check out with Apple Card Monthly Installments.</h5>
                                {/* Plus icon positioned to bottom right */}
                                <div className="absolute bottom-0 right-0 mb-3 mr-3 bg-gray-600 rounded-full px-2 py-1">
                                    <FontAwesomeIcon icon={faPlus} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div className="w-[370px] h-[310px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col hover:cursor-pointer relative">
                            <div className="m-3 mt-5">
                                <img
                                    src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_person__bayst2x5jyya_large.png"
                                    alt="Title 1"
                                    className="w-auto h-auto max-w-full max-h-full"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-semibold m-3">
                                    Pay over time, <br /> interest-free.
                                </h3>
                                <h5 className="mx-3 text-md font-normal">When you choose to check out with Apple Card Monthly Installments.</h5>
                                {/* Plus icon positioned to bottom right */}
                                <div className="absolute bottom-0 right-0 mb-3 mr-3 bg-gray-600 rounded-full px-2 py-1">
                                    <FontAwesomeIcon icon={faPlus} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pt-5 pb-5">
                        {/* Card content */}
                        <div className="w-[370px] h-[310px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col hover:cursor-pointer relative">
                            <div className="m-3 mt-5">
                                <img
                                    src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_asa__urbsp7b9ktuq_large.png"
                                    alt="Title 1"
                                    className="w-auto h-auto max-w-full max-h-full"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-semibold m-3">
                                    Pay over time, <br /> interest-free.
                                </h3>
                                <h5 className="mx-3 text-md font-normal">When you choose to check out with Apple Card Monthly Installments.</h5>
                                {/* Plus icon positioned to bottom right */}
                                <div className="absolute bottom-0 right-0 mb-3 mr-3 bg-gray-600 rounded-full px-2 py-1">
                                    <FontAwesomeIcon icon={faPlus} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <h1 className="text-6xl font-medium mt-80 mx-12 pl-16">Significant others.</h1>

            {/* accordian */}
            <div className="w-full h-screen bg-neutral-200 flex justify-center items-center mt-28">
                <div className="flex-1 mr-8">
                    <div className="flex flex-col justify-center">
                        <div className="mx-44 mb-4">
                            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} style={{ boxShadow: "none" }}>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    expandIcon={<ExpandMoreIcon />}
                                    style={{ backgroundColor: "#E5E5E5", borderBottom: "1px solid black" }}
                                >
                                    <Typography style={{ fontSize: "1.5rem", fontWeight: "500" }}>Mac and iPhone</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{ backgroundColor: "#E5E5E5" }}>
                                    <Typography align="center">
                                        You can answer calls or messages from your iPhone directly on your Mac. Copy images, video, or text on your iPhone, then paste into another app on your nearby
                                        Mac. With iCloud, you can access your favorite files from either your iPhone or your Mac. And so much more.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="mx-44 mb-4">
                            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} style={{ boxShadow: "none" }}>
                                <AccordionSummary
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    expandIcon={<ExpandMoreIcon />}
                                    style={{ backgroundColor: "	#E5E5E5", borderBottom: "1px solid black" }}
                                >
                                    <Typography style={{ fontSize: "1.5rem", fontWeight: "500" }}>Mac and iPad</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{ backgroundColor: "#E5E5E5" }}>
                                    <Typography align="center">
                                        Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other.
                                        You can even start a Final Cut Pro project on your iPad and continue it on your Mac.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="mx-44">
                            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} style={{ boxShadow: "none" }}>
                                <AccordionSummary aria-controls="panel3a-content" id="panel3a-header" expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: "	#E5E5E5" }}>
                                    <Typography style={{ fontSize: "1.5rem", fontWeight: "500" }}>Mac and Apple Watch</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{ backgroundColor: "	#E5E5E5" }}>
                                    <Typography align="center">Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password typing required.</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="flex-1 ml-8">
                    {/* Image displayed based on expanded section */}
                    {expanded && <img src={getImage(expanded)} alt="Expanded Section" className="mx-auto" />}
                </div>
            </div>

            <h1 className="text-6xl font-medium mt-40 mx-12 pl-16">Mac essentials.</h1>

            <div className="flex mt-20 mb-40">
                <div className="bg-neutral-50 rounded-lg mx-auto">
                    <h1 className="text-3xl font-medium text-center pt-10">Mac accessories</h1>
                    <h3 className="text-lg font-normal text-center mt-3">Explore keyboards, mice, and other essentials.</h3>
                    <h4 className="text-blue-500 mt-3 font-medium text-center hover:underline hover:cursor-pointer">Shop Mac accessories {">"}</h4>
                    <img src="https://www.apple.com/v/mac/home/by/images/overview/essentials/essentials_accessories__dglhsic54owi_xlarge.jpg" alt="" className="mt-5" />
                </div>
                <div className="bg-neutral-50 rounded-lg mx-auto">
                    <h1 className="text-3xl font-medium text-center pt-10">Studio Display</h1>
                    <h3 className="text-lg font-normal text-center mt-3">The 27-inch 5K Retina display pairs beautifully with any Mac.</h3>
                    <h4 className="text-blue-500 mt-3 font-medium text-center hover:underline hover:cursor-pointer">Learn more {">"}</h4>
                    <img src="https://www.apple.com/v/mac/home/by/images/overview/essentials/essentials_display__bk3i351qm0c2_xlarge.jpg" alt="" className="mt-5" />
                </div>
            </div>

            <div>
                <h1 className="text-5xl font-semibold mt-40 mx-24">Mac</h1>
            </div>

            {/* gird of links/text */}
            <div className="grid grid-cols-8 gap-1 ml-24 mt-16">
                <div className="col-span-1">
                    <h2 className="text-xs font-normal text-gray-500">Explore Mac</h2>
                    <ul>
                        <li className="text-2xl font-semibold hover:cursor-pointer my-1">Explore All Mac</li>
                        <li className="text-2xl font-semibold hover:cursor-pointer my-1">MacBook Air</li>
                        <li className="text-2xl font-semibold hover:cursor-pointer my-1">MacBook Pro</li>
                        <li className="text-2xl font-semibold hover:cursor-pointer my-1">iMac</li>
                        <li className="text-2xl font-semibold hover:cursor-pointer my-1">Mac mini</li>
                        <li className="text-2xl font-semibold hover:cursor-pointer my-1">Mac Studio</li>
                        <li className="text-2xl font-semibold hover:cursor-pointer my-1">Mac Pro</li>
                        <li className="text-2xl font-semibold hover:cursor-pointer my-1">Displays</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-5">Compare Mac</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Mac Does That</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h2 className="text-xs font-normal text-gray-500">Shop Mac</h2>
                    <ul>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Shop Mac</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Mac Accessories</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Apple Trade In</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Financing</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h2 className="text-xs font-normal text-gray-500">More from Mac</h2>
                    <ul>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Mac Support</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">AppleCare+ for Mac</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">macOS Sonoma</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Apps by Apple</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Continuity</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">iCloud+</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Mac for Business</li>
                        <li className="text-md font-normal hover:cursor-pointer mt-2">Education</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
