import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

import { FaRegCirclePause } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";

import img1 from "../../assets/images/1378x774.jpg";
import img2 from "../../assets/images/1378x774 (2).jpg";
import img3 from "../../assets/images/1378x774 (3).jpg";
import img4 from "../../assets/images/1378x774 (4).jpg";
import img5 from "../../assets/images/1378x774 (5).jpg";
import img6 from "../../assets/images/1378x774 (6).jpg";
import img7 from "../../assets/images/1378x774 (7).jpg";
import img8 from "../../assets/images/1378x774 (8).jpg";
import img9 from "../../assets/images/1378x774 (9).jpg";

export default function Slider() {
    const [slider, SetSlider] = useState(true);
    const swiperRef = useRef(null);

    const toggleAutoplay = () => {
        console.log("clicked");
        if (swiperRef.current && swiperRef.current.swiper) {
            if (swiperRef.current.swiper.autoplay.running) {
                swiperRef.current.swiper.autoplay.stop();
                SetSlider(false);
            } else {
                swiperRef.current.swiper.autoplay.start();
                SetSlider(true);
            }
        }
    };

    return (
        <>
            <div className="px-12">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    lazy={true}
                    keyboard={{
                        enabled: true,
                    }}
                    observer={true}
                    observeParents={true}
                    modules={[Keyboard, Pagination, Navigation, Autoplay]}
                    className=""
                >
                    <SwiperSlide>
                        <div className="mx-auto w-[290px] px-2 h-[495px] min-[734px]:w-[705px] min-[734px]:h-[368px] min-[1069px]:w-[996px] min-[1069px]:h-[524px] min-[1441px]:w-[1266px] min-[1441px]:h-[668px]">
                            <div className="">
                                <img src={img1} alt="Title 1" className="object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto w-[290px] px-2 h-[495px] min-[734px]:w-[705px] min-[734px]:h-[368px] min-[1069px]:w-[996px] min-[1069px]:h-[524px] min-[1441px]:w-[1266px] min-[1441px]:h-[668px]">
                            <div className="">
                                <img src={img2} alt="Title 2" className="object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto w-[290px] px-2 h-[495px] min-[734px]:w-[705px] min-[734px]:h-[368px] min-[1069px]:w-[996px] min-[1069px]:h-[524px] min-[1441px]:w-[1266px] min-[1441px]:h-[668px]">
                            <div className="">
                                <img src={img3} alt="Title 3" className="object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto w-[290px] px-2 h-[495px] min-[734px]:w-[705px] min-[734px]:h-[368px] min-[1069px]:w-[996px] min-[1069px]:h-[524px] min-[1441px]:w-[1266px] min-[1441px]:h-[668px]">
                            <div className="">
                                <img src={img4} alt="Title 3" className="object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto w-[290px] px-2 h-[495px] min-[734px]:w-[705px] min-[734px]:h-[368px] min-[1069px]:w-[996px] min-[1069px]:h-[524px] min-[1441px]:w-[1266px] min-[1441px]:h-[668px]">
                            <div className="">
                                <img src={img5} alt="Title 3" className="object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto w-[290px] px-2 h-[495px] min-[734px]:w-[705px] min-[734px]:h-[368px] min-[1069px]:w-[996px] min-[1069px]:h-[524px] min-[1441px]:w-[1266px] min-[1441px]:h-[668px]">
                            <div className="">
                                <img src={img6} alt="Title 3" className="object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto w-[290px] px-2 h-[495px] min-[734px]:w-[705px] min-[734px]:h-[368px] min-[1069px]:w-[996px] min-[1069px]:h-[524px] min-[1441px]:w-[1266px] min-[1441px]:h-[668px]">
                            <div className="">
                                <img src={img7} alt="Title 3" className="object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto w-[290px] px-2 h-[495px] min-[734px]:w-[705px] min-[734px]:h-[368px] min-[1069px]:w-[996px] min-[1069px]:h-[524px] min-[1441px]:w-[1266px] min-[1441px]:h-[668px]">
                            <div className="">
                                <img src={img8} alt="Title 3" className="object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto w-[290px] px-2 h-[495px] min-[734px]:w-[705px] min-[734px]:h-[368px] min-[1069px]:w-[996px] min-[1069px]:h-[524px] min-[1441px]:w-[1266px] min-[1441px]:h-[668px]">
                            <div className="">
                                <img src={img9} alt="Title 3" className="object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="mt-2 text-2xl text-right pe-12">
                <button className="outline-none" onClick={toggleAutoplay}>
                    {!slider ? <FaRegPlayCircle /> : <FaRegCirclePause />}
                </button>
            </div>
        </>
    );
}
