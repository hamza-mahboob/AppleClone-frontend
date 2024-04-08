import React from "react";
import iphone15promedium from "../../assets/images/hero_iphone15pro_medium_2x.jpg";
import iphoneimg2 from "../../images/iPhone2ndImg.png";
import iphoneimg3 from "../../images/iPhone3rdImg.png";
import iphoneimg4 from "../../images/iPhone4thImg.png";
import iphoneimg5 from "../../images/iphone 15 pro.png";
import iphoneimg6 from "../../images/iphoneFigureIcon.png";
import iphoneimg7 from "../../images/iphoneFigureIcon2.png";
import iphoneimg8 from "../../images/iphoneFigureIcon3.png";
import iphoneimg9 from "../../images/iphoneFigureIcon4.png";
import iphoneimg10 from "../../images/iphoneFigureIcon5.png";
import iphoneimg11 from "../../images/iphoneFigureIcon6.png";
import iphoneimg12 from "../../images/iphoneFigureIcon7.png";
import iphoneimg13 from "../../images/iphoneFigureIcon8.png";
import iphoneimg14 from "../../images/iphoneFigureIcon9.png";
import iphoneTradeIn from "../../images/iphoneTradeIn.png";
import iphoneEmojiBlast from "../../images/iphoneEmojiBlast.png";
import iphoneScreen from "../../images/iphoneScreen.png";
import whyAppleIsTheBest from "../../images/whyAppleIsTheBest.png";
import { useBag } from "../../components/BagProvider";
import axios from "axios";
import { message } from "antd";

export default function Iphone() {
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
        <div className="bg-neutral-100">
            <h1 className="font-normal text-xl text-center pt-24 mx-[35rem]">
                {" "}
                Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.{" "}
                <span className="text-blue-500 hover:underline hover:cursor-pointer"> Shop iPhone &gt;</span>
            </h1>

            {/* pic1 */}
            <div className="w-full h-screen mt-8 relative" style={{ backgroundImage: `url("${iphone15promedium}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute top-10 left-0 right-0 text-center pt-8">
                    <h2 className="text-sm font-normal m-4 text-orange-500">New</h2>
                    <h3 className="text-2xl font-medium m-4 text-stone-200">iPhone 15 Pro</h3>
                    <h3 className="text-6xl font-semibold m-4 text-stone-500">Titanium</h3>
                    <h3 className="text-2xl font-light mt-4 text-white">From $999 or $41.62/mo. for 24 mo.</h3>
                    <div className="inline-block mt-4">
                        <button className="text-white bg-blue-600 hover:bg-blue-500 hover:cursor-pointer py-2 px-4 rounded-3xl inline-block" onClick={() => handleBuy("660ebc9a50353b77a15345c4")}>
                            Buy
                        </button>
                    </div>
                    <h4 className="text-blue-500 hover:underline hover:cursor-pointer mt-4 font-light text-xl">Learn more &gt;</h4>
                </div>
            </div>

            {/* pic2 */}
            <div className="w-full h-screen relative" style={{ backgroundImage: `url("${iphoneimg2}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute top-10 left-0 right-0 text-center pt-8">
                    <h2 className="text-sm font-normal m-4 text-orange-500">New</h2>
                    <h3 className="text-2xl font-medium m-4">iPhone 15</h3>
                    <h3 className="text-6xl font-semibold m-4">Newphoria</h3>
                    <h3 className="text-2xl font-light mt-4">From $799 or $33.29/mo. for 24 mo.</h3>
                    <div className="inline-block mt-4">
                        <button className="text-white bg-blue-600 hover:bg-blue-500 hover:cursor-pointer py-2 px-4 rounded-3xl inline-block" onClick={() => handleBuy("660ebcc050353b77a15345c6")}>
                            Buy
                        </button>
                    </div>
                    <h4 className="text-blue-500 hover:underline hover:cursor-pointer mt-4 font-light text-xl">Learn more &gt;</h4>
                </div>
            </div>

            {/* pic3 */}
            <div className="w-full h-screen relative" style={{ backgroundImage: `url("${iphoneimg3}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 w-1/2 pt-8">
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-medium m-4 align-bottom">
                            iPhone <span className="border-2 text-xs p-1 align-middle border-black rounded-lg">SE</span>
                        </h3>
                        <h3 className="text-5xl font-semibold m-4 bg-gradient-to-r from-blue-900 to-indigo-600 inline-block text-transparent bg-clip-text text-center">
                            Love the power. <br />
                            Love the price.
                        </h3>
                        <h3 className="text-xl font-light mt-4 text-center">From $429 or $17.87/mo. for 24 mo.</h3>
                        <div className="inline-block mt-4">
                            <button className="text-white bg-blue-600 hover:bg-blue-500 hover:cursor-pointer py-2 px-4 rounded-3xl inline-block" onClick={() => handleBuy("660ebd0950353b77a15345cc")}>
                                Buy
                            </button>
                        </div>
                        <h4 className="text-blue-500 hover:underline hover:cursor-pointer mt-4 font-light text-xl">Learn more &gt;</h4>
                    </div>
                </div>
            </div>

            {/* pic4 */}
            <div className="w-full h-screen relative" style={{ backgroundImage: `url("${iphoneimg4}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute top-1/3 left-1/4 transform -translate-x-1/3 w-1/2 pt-8">
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-medium mt-4 mr-32 text-white">A Guided Tour of</h3>
                        <h3 className="text-5xl font-semibold m-4 text-white">
                            iPhone 15 & <br />
                            iPhone 15 Pro.
                        </h3>
                        <div className="inline-block mt-4 mr-40">
                            <h4 className=" bg-gray-200 hover:bg-blue-500 hover:cursor-pointer py-2 px-4 rounded-3xl inline-block">Watch the film</h4>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="flex text-5xl font-medium mt-24 mx-12 justify-center mb-5">Which iPhone is right for you?</h1>

            {/* mx-80 and 4 cols to make it centered...not sure if its the best solution tho */}
            <div className="grid grid-cols-4 gap-8 p-32 mx-80">
                {/* Product 1 */}
                <div className="col-span-1 flex flex-col items-center">
                    {/* Product Image */}
                    <img className="w-[194px] h-[257px] hover:cursor-pointer transition-transform duration-700 transform hover:scale-105" src={iphoneimg5} alt="Product 1" />
                    {/* Product Details */}
                    <div className="text-center flex flex-col">
                        <p className="text-orange-600 text-sm mt-3 font-semibold">New</p>

                        <h2 className="text-2xl font-semibold">iPhone 15 Pro</h2>
                        <h3 className="font-semibold">The ultimate iPhone.</h3>

                        <h3 className="font-light px-8 mt-5">From $999</h3>

                        <div className="flex flex-col mt-4 items-center">
                            <button className="bg-blue-600 text-white rounded-3xl px-4 py-1 hover:bg-blue-500 hover:cursor-pointer" onClick={() => handleBuy("660ebc9a50353b77a15345c4")}>
                                Buy
                            </button>
                            <h2 className="text-blue-500 hover:underline hover:cursor-pointer">Learn more &gt;</h2>
                        </div>

                        <div className="mt-[33px] border-b-black border-b mx-2"></div>

                        <h2 className="text-xl font-medium mt-8">6.7″ or 6.1″</h2>
                        <h3 className="font-normal text-sm leading-6">
                            Super Retina XDR display <br /> ProMotion technology <br /> Always-On display
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg6} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Titanium with textured
                            <br />
                            matte glass back
                        </h3>

                        <h3 className="font-normal text-md leading-6 mt-2">Action button</h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg7} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Dynamic Island
                            <br />A magical way to interact with iPhone
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg8} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            A17 Pro chip
                            <br /> with 6-core GPU
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg9} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Pro camera system
                            <br />
                            48MP | Main Ultra Wide | Telephoto
                            <br />
                            Super-high-resolution photos (24MP and 48MP)
                            <br />
                            Next-generation portraits with Focus and Depth Control
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg10} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">optical zoom range</h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg11} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Emergency SOS
                            <br />
                            Emergency SOS via satellite
                            <br />
                            Crash Detection
                            <br />
                            Roadside Assistance via satellite
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg12} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Up to 29 hours
                            <br />
                            video playback6
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg13} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            USB-C
                            <br />
                            Supports USB 3 for
                            <br />
                            up to 20x faster transfers7
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg14} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">Face ID</h3>

                        <div className="mt-[33px] border-b-black border-b mx-2"></div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col items-center">
                    {/* Product Image */}
                    <img className="w-[194px] h-[257px] hover:cursor-pointer transition-transform duration-700 transform hover:scale-105" src={iphoneimg5} alt="Product 1" />
                    {/* Product Details */}
                    <div className="text-center flex flex-col">
                        <p className="text-orange-600 text-sm mt-3 font-semibold">New</p>

                        <h2 className="text-2xl font-semibold">iPhone 15</h2>
                        <h3 className="font-semibold">The total Power House.</h3>

                        <h3 className="font-light px-8 mt-5">From $799</h3>

                        <div className="flex flex-col mt-4 items-center">
                            <button className="bg-blue-600 text-white rounded-3xl px-4 py-1 hover:bg-blue-500 hover:cursor-pointer" onClick={() => handleBuy("660ebcc050353b77a15345c6")}>
                                Buy
                            </button>
                            <h2 className="text-blue-500 hover:underline hover:cursor-pointer">Learn more &gt;</h2>
                        </div>

                        <div className="mt-[33px] border-b-black border-b mx-2"></div>

                        <h2 className="text-xl font-medium mt-8">6.7″ or 6.1″</h2>
                        <h3 className="font-normal text-sm leading-6">
                            Super Retina XDR display <br />-<br />-
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg6} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Titanium with textured
                            <br />
                            matte glass back
                        </h3>

                        <h3 className="font-normal text-md leading-6 mt-2">Action button</h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg7} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Dynamic Island
                            <br />A magical way to interact with iPhone
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg8} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            A17 Pro chip
                            <br /> with 6-core GPU
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg9} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Pro camera system
                            <br />
                            48MP | Main Ultra Wide | Telephoto
                            <br />
                            Super-high-resolution photos (24MP and 48MP)
                            <br />
                            Next-generation portraits with Focus and Depth Control
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg10} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">optical zoom range</h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg11} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Emergency SOS
                            <br />
                            Emergency SOS via satellite
                            <br />
                            Crash Detection
                            <br />
                            Roadside Assistance via satellite
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg12} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Up to 29 hours
                            <br />
                            video playback6
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg13} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            USB-C
                            <br />
                            Supports USB 3 for
                            <br />
                            up to 20x faster transfers7
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg14} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">Face ID</h3>

                        <div className="mt-[33px] border-b-black border-b mx-2"></div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col items-center">
                    {/* Product Image */}
                    <img className="w-[194px] h-[257px] hover:cursor-pointer transition-transform duration-700 transform hover:scale-105" src={iphoneimg5} alt="Product 1" />
                    {/* Product Details */}
                    <div className="text-center flex flex-col">
                        <p className="text-orange-600 text-sm mt-3 font-semibold">New</p>

                        <h2 className="text-2xl font-semibold">iPhone 14</h2>
                        <h3 className="font-semibold">As Amazing as ever.</h3>

                        <h3 className="font-light px-8 mt-5">From $699</h3>

                        <div className="flex flex-col mt-4 items-center">
                            <button className="bg-blue-600 text-white rounded-3xl px-4 py-1 hover:bg-blue-500 hover:cursor-pointer" onClick={() => handleBuy("660ebcd550353b77a15345c8")}>
                                Buy
                            </button>
                            <h2 className="text-blue-500 hover:underline hover:cursor-pointer">Learn more &gt;</h2>
                        </div>

                        <div className="mt-[33px] border-b-black border-b mx-2"></div>

                        <h2 className="text-xl font-medium mt-8">6.7″ or 6.1″</h2>
                        <h3 className="font-normal text-sm leading-6">
                            Super Retina XDR display <br />-<br />-
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg6} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Titanium with textured
                            <br />
                            matte glass back
                        </h3>

                        <h3 className="font-normal text-md leading-6 mt-2">Action button</h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg7} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Dynamic Island
                            <br />A magical way to interact with iPhone
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg8} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            A17 Pro chip
                            <br /> with 6-core GPU
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg9} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Pro camera system
                            <br />
                            48MP | Main Ultra Wide | Telephoto
                            <br />
                            Super-high-resolution photos (24MP and 48MP)
                            <br />
                            Next-generation portraits with Focus and Depth Control
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg10} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">optical zoom range</h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg11} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Emergency SOS
                            <br />
                            Emergency SOS via satellite
                            <br />
                            Crash Detection
                            <br />
                            Roadside Assistance via satellite
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg12} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Up to 29 hours
                            <br />
                            video playback6
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg13} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            USB-C
                            <br />
                            Supports USB 3 for
                            <br />
                            up to 20x faster transfers7
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg14} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">Face ID</h3>

                        <div className="mt-[33px] border-b-black border-b mx-2"></div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col items-center">
                    {/* Product Image */}
                    <img className="w-[194px] h-[257px] hover:cursor-pointer transition-transform duration-700 transform hover:scale-105" src={iphoneimg5} alt="Product 1" />
                    {/* Product Details */}
                    <div className="text-center flex flex-col">
                        <p className="text-orange-600 text-sm mt-3 font-semibold">New</p>

                        <h2 className="text-2xl font-semibold">iPhone 13</h2>
                        <h3 className="font-semibold">All kind of Awsomeness.</h3>

                        <h3 className="font-light px-8 mt-5">From $599</h3>

                        <div className="flex flex-col mt-4 items-center">
                            <button className="bg-blue-600 text-white rounded-3xl px-4 py-1 hover:bg-blue-500 hover:cursor-pointer" onClick={() => handleBuy("660ebcec50353b77a15345ca")}>
                                Buy
                            </button>
                            <h2 className="text-blue-500 hover:underline hover:cursor-pointer">Learn more &gt;</h2>
                        </div>

                        <div className="mt-[33px] border-b-black border-b mx-2"></div>

                        <h2 className="text-xl font-medium mt-8">6.7″ or 6.1″</h2>
                        <h3 className="font-normal text-sm leading-6">
                            Super Retina XDR display <br />-<br />-
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg6} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Titanium with textured
                            <br />
                            matte glass back
                        </h3>

                        <h3 className="font-normal text-md leading-6 mt-2">Action button</h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg7} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Dynamic Island
                            <br />A magical way to interact with iPhone
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg8} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            A17 Pro chip
                            <br /> with 6-core GPU
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg9} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Pro camera system
                            <br />
                            48MP | Main Ultra Wide | Telephoto
                            <br />
                            Super-high-resolution photos (24MP and 48MP)
                            <br />
                            Next-generation portraits with Focus and Depth Control
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg10} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">optical zoom range</h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg11} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Emergency SOS
                            <br />
                            Emergency SOS via satellite
                            <br />
                            Crash Detection
                            <br />
                            Roadside Assistance via satellite
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg12} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            Up to 29 hours
                            <br />
                            video playback6
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg13} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">
                            USB-C
                            <br />
                            Supports USB 3 for
                            <br />
                            up to 20x faster transfers7
                        </h3>

                        <img className="w-auto h-auto mx-auto mt-8" src={iphoneimg14} alt="iphone figure" />

                        <h3 className="font-normal text-md leading-6">Face ID</h3>

                        <div className="mt-[33px] border-b-black border-b mx-2"></div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center -mt-20">
                <h2 className="text-blue-500 hover:underline hover:cursor-pointer text-xl font-medium  mx-5">Compare all iPhone models &gt;</h2>
                <h2 className="text-blue-500 hover:underline hover:cursor-pointer text-xl font-medium  mx-5">Shop iPhone &gt;</h2>
            </div>

            <h1 className="flex text-5xl font-medium mt-24 mx-12 justify-center mb-5">Ways to save on iPhone</h1>

            <div className="grid grid-cols-3 gap-4 p-20 mx-40">
                <div className="flex flex-col items-center bg-white overflow-hidden">
                    <div>
                        <h1 className="mx-5 mt-10 text-2xl font-medium text-center">
                            Get $180–$630 in <br /> credit when you trade <br /> in iPhone 11 or higher.
                        </h1>
                        <h2 className="mx-5 mt-2 text-lg font-normal text-blue-500 hover:underline hover:cursor-pointer text-center">See what your device is worth &gt;</h2>
                    </div>
                    <img className="w-full h-full object-cover" src={iphoneTradeIn} alt="iphoneTradeIn" />
                </div>

                <div className="flex flex-col items-center bg-white overflow-hidden">
                    <div>
                        <h3 className="text-xs text-gray-600 font-medium mt-8 text-center">CARRIER TRADE‑IN DEALS</h3>
                        <h1 className="mx-5 mb-5 mt-2 text-2xl font-medium text-center">
                            {" "}
                            iPhone carrier deals. <br />
                            Right here at Apple. <br />
                            For as low as $0.
                        </h1>
                    </div>
                    <img className="w-full h-full object-cover" src={iphoneEmojiBlast} alt="iphoneTradeIn" />
                    <div>
                        <h2 className="mx-5 mt-2 text-lg font-normal text-blue-500 hover:underline hover:cursor-pointer text-center">See all carrier deals at Apple &gt;</h2>
                        <h3 className="text-xs text-gray-600 font-normal my-12 mx-24 text-center">
                            Includes trade‑in and carrier credits. <br /> AT&T: up to $1000. T‑Mobile: up to $800. <br /> Verizon: up to $830.
                        </h3>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-white overflow-hidden">
                    <div>
                        <h1 className="mx-5 mt-8 text-2xl font-medium text-center">
                            {" "}
                            Pay 0% APR over <br /> 24 months with <br /> Apple Card.
                        </h1>
                        <h3 className="text-md text-gray-600 font-normal mt-4 text-center">
                            Choose Apple Card Monthly <br /> Installments when you check out.**
                        </h3>
                        <h2 className="mx-5 mt-1 text-lg font-normal text-blue-500 hover:underline hover:cursor-pointer text-center">Learn more &gt;</h2>
                    </div>
                    <img className="w-full h-full object-cover" src={iphoneScreen} alt="iphoneTradeIn" />
                </div>

                <div
                    className="col-span-3 bg-white relative"
                    style={{
                        backgroundImage: `url(${whyAppleIsTheBest})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "500px",
                    }}
                >
                    <h1 className="mx-5 mb-5 mt-20 text-4xl font-semibold text-center">
                        Why Apple is the best <br /> place to buy iPhone.
                    </h1>
                    <h2 className="mx-[29rem] text-xl text-center my-6">
                        You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly. You can also chat with a
                        Specialist anytime.
                    </h2>
                    <h3 className="mx-5 text-xl font-normal text-blue-500 hover:underline hover:cursor-pointer text-center my-6">Learn more &gt;</h3>
                </div>
            </div>
        </div>
    );
}
