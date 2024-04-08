import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import Slider from "../../components/HomeSlider/Slider";
import axios from "axios";
import { message } from "antd";

export default function Home() {
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
            <div>
                <div className="iphone15pro text-white pt-16 mb-3 bg-cover bg-center h-[500px] min-[734px]:h-[580px] min-[1244px]:h-[620px] min-[1560px]:h-[690px]">
                    <div className="text-center cursor-pointer select-none">
                        <h2 className="text-[56px] font-semibold tracking-tight">iPhone 15 Pro</h2>
                        <h3 className="text-[28px] mb-2 tracking-tight">Titanium. So Strong. So light. So Pro</h3>
                        <span className="text-xl tracking-tight text-[#2997ff]">
                            <Link className=" hover:underline">Learn More</Link> &#62;
                        </span>
                        <span className="ms-10 text-xl tracking-tight text-[#2997ff]">
                            <Link className=" hover:underline" onClick={() => handleBuy("660ebc9a50353b77a15345c4")}>
                                Buy
                            </Link>{" "}
                            &#62;
                        </span>
                    </div>
                </div>
                <div className="iphone15 mb-3 pt-16 bg-cover bg-center h-[500px] min-[734px]:h-[580px] min-[1244px]:h-[620px] min-[1560px]:h-[690px]">
                    <div className="text-center cursor-pointer select-none">
                        <div>
                            <h2 className="text-[56px] font-semibold tracking-tight">iPhone 15</h2>
                            <h3 className="text-[28px] mb-2 tracking-tight">New Camera. New Design. Newphoria</h3>
                            <span className="text-xl tracking-tight text-[#2997ff]">
                                <Link className=" hover:underline">Learn More</Link> &#62;
                            </span>
                            <span className="ms-10 text-xl tracking-tight text-[#2997ff]">
                                <Link className=" hover:underline" onClick={() => handleBuy("660ebcc050353b77a15345c6")}>
                                    Buy
                                </Link>{" "}
                                &#62;
                            </span>
                        </div>
                    </div>
                </div>
                <div className="applevision relative mb-3 bg-cover bg-center h-[500px] min-[734px]:h-[580px] min-[1244px]:h-[620px] min-[1560px]:h-[690px]">
                    <div className="">
                        <div className="flex items-end h-[434px] min-[734px]:h-[516px] min-[1244px]:h-[556px] min-[1560px]:h-[626px]">
                            <div className=" text-center w-full">
                                <h2 className="text-[56px] font-semibold tracking-tight">Apple Vision Pro</h2>
                                <h3 className="text-[28px] mb-2 tracking-tight">Welcome to the era of Spactial Computing.</h3>
                                <span className="text-xl text-[#2997ff] tracking-tight">
                                    <Link className=" hover:underline">Learn More</Link> &#62;
                                </span>
                                <span className="ms-10 text-xl text-[#2997ff] tracking-tight">
                                    <Link className=" hover:underline" onClick={() => handleBuy("Apple Vision Pro", 999)}>
                                        Buy
                                    </Link>{" "}
                                    &#62;
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 my-4 px-4">
                    <div className="applewatch bg-center bg-cover col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]">
                        <div className="pt-12 text-center">
                            <h2 className="text-white text-[40px] font-semibold tracking-tight mb-0">
                                <span> Apple Watch</span>
                            </h2>
                            <p className="text-red-800 uppercase font-bold text-[14px] tracking-wider">Series 9</p>
                            <h3 className="text-[20px] text-[#d0d0d0] mb-2 tracking-tight">Smatter. brighter. Mightier.</h3>
                            <span className="text-xl text-[#2997ff] tracking-tight">
                                <Link className=" hover:underline">Learn More</Link> &#62;
                            </span>
                            <span className="ms-10 text-xl text-[#2997ff] tracking-tight">
                                <Link className=" hover:underline" onClick={() => handleBuy("660ebdde50353b77a15345d0")}>
                                    Buy
                                </Link>{" "}
                                &#62;
                            </span>
                        </div>
                    </div>
                    <div className="mbkpro bg-center bg-cover col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]">
                        <div className="pt-12 text-center">
                            <h2 className="text-[40px] font-semibold tracking-tight mb-0">
                                <span>MacBook Pro</span>
                            </h2>
                            <h3 className="text-[20px] tracking-tight">Mind Blowing. Head Turning.</h3>
                            <span className="text-xl text-[#2997ff] teacking-tight">
                                <Link className=" hover:underline">Learn More</Link> &#62;
                            </span>
                            <span className="ms-10 text-2xl text-[#2997ff] teacking-tight">
                                <Link className=" hover:underline" onClick={() => handleBuy("660eb8ea50353b77a15345ac")}>
                                    Buy
                                </Link>{" "}
                                &#62;
                            </span>
                        </div>
                    </div>
                    <div className="ipad bg-center bg-cover col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]">
                        <div className="pt-8 min-[734px]:pt-12 text-center">
                            <h2 className="text-[40px] font-semibold tracking-tight mb-0">
                                <span>iPad</span>
                            </h2>
                            <h3 className="text-[20px] mb-2 tracking-tight">Lovable. drawable. Magical.</h3>
                            <span className="text-xl teacking-tight text-[#2997ff]">
                                <Link className=" hover:underline">Learn More</Link> &#62;
                            </span>
                            <span className="ms-10 text-xl teacking-tight text-[#2997ff]">
                                <Link className=" hover:underline" onClick={() => handleBuy("660ebb7750353b77a15345be")}>
                                    Buy
                                </Link>{" "}
                                &#62;
                            </span>
                        </div>
                    </div>
                    <div className="airpod bg-center bg-cover col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]">
                        <div className="pt-12 text-center">
                            <h2 className="text-white text-[40px] font-semibold tracking-tight mb-0">
                                <span>Airpods Pro</span>
                            </h2>
                            <h3 className="text-[20px] text-[#d0d0d0] mb-2 tracking-tight">Addaptive Audio. Now Playing.</h3>
                            <span className="text-xl teacking-tight text-[#2997ff]">
                                <Link className=" hover:underline">Learn More</Link> &#62;
                            </span>
                            <span className="ms-10 text-xl teacking-tight text-[#2997ff]">
                                <Link className=" hover:underline" onClick={() => handleBuy("Airpods Pro", 999)}>
                                    Buy
                                </Link>{" "}
                                &#62;
                            </span>
                        </div>
                    </div>
                    <div className="applecard bg-center bg-cover col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]">
                        <div className="pt-12 text-center">
                            <h2 className=" text-[40px] font-semibold tracking-tight mb-0">
                                <span>Apple Card</span>
                            </h2>
                            <h3 className="text-[20px] mb-2 tracking-tight">
                                Get Upto 3% Daily Cash back <br /> with every purchase.
                            </h3>
                            <span className="text-xl teacking-tight text-[#2997ff]">
                                <Link className=" hover:underline">Learn More</Link> &#62;
                            </span>
                            <span className="ms-10 text-xl teacking-tight text-[#2997ff]">
                                <Link className=" hover:underline" onClick={() => handleBuy("Apple Card", "-3%")}>
                                    Buy
                                </Link>{" "}
                                &#62;
                            </span>
                        </div>
                    </div>
                    <div className="tradein bg-center bg-cover col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]">
                        <div className="pt-12 text-center">
                            <h2 className=" text-[40px] font-semibold tracking-tight mb-0">
                                <span>Trade In</span>
                            </h2>
                            <h3 className="text-[20px] mb-2 tracking-tight">
                                Get Upto 3% Daily Cash back <br /> with every purchase.
                            </h3>
                            <span className="text-xl teacking-tight text-[#2997ff]">
                                <Link className=" hover:underline">Learn More</Link> &#62;
                            </span>
                            <span className="ms-10 text-xl teacking-tight text-[#2997ff]">
                                <Link className=" hover:underline" onClick={() => handleBuy("Trade In", "-15%")}>
                                    Buy
                                </Link>{" "}
                                &#62;
                            </span>
                        </div>
                    </div>
                </div>

                <Slider />
            </div>
        </>
    );
}
