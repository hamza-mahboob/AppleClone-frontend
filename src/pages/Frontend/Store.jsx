import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Store() {

    return (
        <div className='pt-40 bg-neutral-100'>
            {/* top */}
            <div className='flex items-center'>
                <div className="flex flex-col flex-grow break-words mx-12 pl-24 pr-96 text-left">
                    <h1 className="flex text-5xl font-medium">Store. <p className="text-5xl font-medium text-gray-500">&nbsp;The best way to buy</p></h1>
                    <p className="text-5xl font-medium text-gray-500"><span className="block">products you love.</span></p>
                </div>

                <div className='flex flex-col justify-center mx-44'>
                    <div className='flex items-center'>
                        <img className='h-[40px] w-[40px] rounded-full m-2' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050335" alt="" />
                        <div className='flex flex-col justify-center font-normal'>
                            <h1 className='font-bold'>Need shopping help?</h1>
                            <h1 className='text-blue-500 hover:underline hover:cursor-pointer'>Ask a Specialist</h1>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className='h-[40px] w-[40px] rounded-full m-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLY0uDGQLAP1d8GXk2TmmOGTPWf_l75TUakw&usqp=CAU" alt="" />
                        <div className='flex flex-col justify-center font-normal'>
                            <h1 className='font-bold'>Visit an Apple Store</h1>
                            <h1 className='text-blue-500 hover:underline hover:cursor-pointer'>Find one near you</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* row of pics */}
            <div className='flex mt-32 mx-32'>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Mac</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1692971740190" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Iphone</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Ipad</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1693703822208" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Apple Watch</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Apple Vision Pro</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Airpods</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Airtag</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Apple TV 4K</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Home Pod</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202403?wid=400&hei=260&fmt=png-alpha&.v=1707850611597" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Accesseories</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Apple Gift Card</h1>
                </div>
            </div>

            {/* 
            <div className="flex relative mt-10 mx-12 pl-24 overflow-x-auto" ref={carouselRef}>
                <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                    <div className="">
                        <h2 className="text-xs font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                        <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                        <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                    </div>
                    <div className="flex-1"></div>
                    <div className="mt-auto mb-5">
                        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-full h-auto object-cover" />
                    </div>
                </div>
                <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                    <div className="">
                        <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                        <h3 className="text-2xl font-bold m-3">Titanium</h3>
                        <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                    </div>
                    <div className="flex-1"></div>
                    <div className="mt-auto mb-5">
                        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                    </div>
                </div>

                <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full" onClick={scrollLeft}>
                    <IoIosArrowBack />
                </button>
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full" onClick={scrollRight}>
                    <IoIosArrowForward />
                </button>
            </div> */}

            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">The latest.<p className="text-3xl font-medium text-gray-500">&nbsp;Take a look at what’s new, right now.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={4}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="">
                                <h2 className="text-xs font-medium m-3 text-white">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3 text-white">Titanium</h3>
                                <p className="m-3 text-white">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-vision-pro-202401?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1705097770616")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="relative z-10">
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s9-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720183508")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="relative z-10">
                                <h2 className="text-xs font-medium m-3 text-white">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3 text-white">Welcome to spatial computing</h3>
                                <p className=" m-3 text-white">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="relative z-10">
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="relative z-10">
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="relative z-10">
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* help is here */}
            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">Help is here.<p className="text-3xl font-medium text-gray-500">&nbsp;Whenever and however you need it.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={400}
                    slidesPerView={4}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE SPECIALIST</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Shop one on one with a Specialist. Online or in a store.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-video-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1694270835539")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-orange-500">NEW</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3 text-white">Shop with a Specialist <br />over video.</h3>
                                <h5 className='text-white font-light leading-tight m-3'>Choose your next device <br /> in a guided, one-way <br /> video session</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">TODAY AT APPLE</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Join free sessions at your <br /> Apple store.</h3>
                                <h5 className='font-light leading-tight m-3'>Learn about the latest features and how to go furthur with your Apple devices</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE SPECIALIST</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Shop one on one with a Specialist. Online or in a store.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE SPECIALIST</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Shop one on one with a Specialist. Online or in a store.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE SPECIALIST</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Shop one on one with a Specialist. Online or in a store.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE SPECIALIST</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Shop one on one with a Specialist. Online or in a store.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* The apple store difference */}
            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">The Apple Store difference.<p className="text-3xl font-medium text-gray-500">&nbsp;Even more reasons to shop with us.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={5}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="ml-3 mt-3">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPovz5edJOb3xk0Og07rxhmtyBNN-MvH-GHJqpgs4_5aEHRFaZ" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-medium ml-3 mr-3">Enjoy <span className='text-green-400'>two-hour delivery</span> from an Apple Store, <span className='text-green-400'>free delivery</span>, or <span className='text-green-400'>easy pickup.²</span></h1>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="ml-3 mt-3">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMvmDnApQWvQRxpIk9kUPjJBPHfnzASby7nDsKs3EIqe2uKaZ" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-medium ml-3 mr-3"><span className='text-blue-500'>Trade in your current device.</span> Get credit toward a new one.</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="ml-3 mt-3">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPovz5edJOb3xk0Og07rxhmtyBNN-MvH-GHJqpgs4_5aEHRFaZ" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-medium ml-3">Pay in full or <span className='text-green-400'> pay overtime.</span> Your choice.</h1>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="ml-3 mt-3">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPovz5edJOb3xk0Og07rxhmtyBNN-MvH-GHJqpgs4_5aEHRFaZ" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-medium ml-3 mr-3">Enjoy <span className='text-green-400'>two-hour delivery</span> from an Apple Store, <span className='text-green-400'>free delivery</span>, or <span className='text-green-400'>easy pickup.²</span></h1>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="ml-3 mt-3">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPovz5edJOb3xk0Og07rxhmtyBNN-MvH-GHJqpgs4_5aEHRFaZ" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-medium ml-3 mr-3">Enjoy <span className='text-green-400'>two-hour delivery</span> from an Apple Store, <span className='text-green-400'>free delivery</span>, or <span className='text-green-400'>easy pickup.²</span></h1>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="ml-3 mt-3">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPovz5edJOb3xk0Og07rxhmtyBNN-MvH-GHJqpgs4_5aEHRFaZ" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-medium ml-3 mr-3">Enjoy <span className='text-green-400'>two-hour delivery</span> from an Apple Store, <span className='text-green-400'>free delivery</span>, or <span className='text-green-400'>easy pickup.²</span></h1>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="ml-3 mt-3">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPovz5edJOb3xk0Og07rxhmtyBNN-MvH-GHJqpgs4_5aEHRFaZ" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-medium ml-3 mr-3">Enjoy <span className='text-green-400'>two-hour delivery</span> from an Apple Store, <span className='text-green-400'>free delivery</span>, or <span className='text-green-400'>easy pickup.²</span></h1>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="ml-3 mt-3">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPovz5edJOb3xk0Og07rxhmtyBNN-MvH-GHJqpgs4_5aEHRFaZ" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-medium ml-3 mr-3">Enjoy <span className='text-green-400'>two-hour delivery</span> from an Apple Store, <span className='text-green-400'>free delivery</span>, or <span className='text-green-400'>easy pickup.²</span></h1>


                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* Accessories. */}

            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">Accessories.<p className="text-3xl font-medium text-gray-500">&nbsp;Essentials that pair perfectly with your favorite devices.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    direction="horizontal"

                >
                    {/* Slides */}
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-accessories-202403?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707850589330")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h3 className="text-3xl font-semibold mt-8 ml-4">In with the new.</h3>
                                <p className="ml-4 mt-2 text-lg">Discover fresh new colors for your favorite accessories.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* margin left works but margin right on the first slide doesnt work...and padding only fixes that slide but margin fixes other slides as well */}
                    <SwiperSlide className='pt-5 pb-5 ml-24'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWND3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1708125477348" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT263?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1699475074951" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MW4Q3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1707853692193" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWMW3ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1707791910829" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693594248668" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT2M3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1699644802878" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWND3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1708125477348" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* loud and clear*/}

            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">Loud and clear.<p className="text-3xl font-medium text-gray-500">&nbsp;Unparalleled choices for rich, high-quality sound.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    direction="horizontal"

                >
                    {/* Slides */}
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applemusic-202301?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1670389217380")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h3 className="text-3xl font-semibold mt-8 ml-4">Get 6 months of <br /> Apple music free.</h3>
                                <p className="ml-4 mt-2 text-lg">Included with Homepod, Airpods, <br /> or select Beat products.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* margin left works but margin right on the first slide doesnt work...and padding only fixes that slide but margin fixes other slides as well */}
                    <SwiperSlide className='pt-5 pb-5 ml-24'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1694014871985" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1670557210097" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632925510000" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1604021221000" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632861342000" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[310px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative">

                            <div className='flex flex-col p-5 pt-12'>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQLK3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1682361480894" className='w-[230px] h-[230px]' alt="" />
                                <h2 className="text-sm font-normal mt-8 text-orange-700">New</h2>
                                <h3 className="text-md font-medium mt-2">iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                                <p className="text-gray-600 mt-10">$49.00</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* The Apple experience
             */}
            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">The Apple experience.<p className="text-3xl font-medium text-gray-500">&nbsp;Do even more with Apple products and services.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={450}
                    slidesPerView={4}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-tv-services-202303?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1706548659792")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-white">APPLE TV+</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3 text-white">Get 3 months of Apple&nbsp;TV+ free when you buy an Apple&nbsp;device.°</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375546000")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h3 className="text-3xl font-medium leading-tight ml-3 mt-9">Six apple services. <br /> one easy subscription.</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applecare-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692730497948")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h3 className="text-3xl font-medium leading-tight ml-3 mt-9">We've got you covered.</h3>
                                <h5 className='text-lg font-normal leading-tight m-3'>AppleCare+ now comes with unlimited repairs for accidental damage protection.</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202303?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1677655420359")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h3 className="text-3xl font-medium leading-tight ml-3 mt-9">Discover all the ways to use Apple Pay.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692730632477")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">HOME</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">See how one app can control your entire home.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE SPECIALIST</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Shop one on one with a Specialist. Online or in a store.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">APPLE SPECIALIST</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Shop one on one with a Specialist. Online or in a store.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* special savings */}

            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">Special savings.<p className="text-3xl font-medium text-gray-500">&nbsp;iPhone carrier deals and exclusive savings for school, businesses, and more.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={4}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-carriertrade-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1693606978377")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">CARRIER TRADE-IN DEALS</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">iPhone carrier deals. Right&nbsp;here at Apple. For&nbsp;as&nbsp;low&nbsp;as&nbsp;$0.¹ .</h3>
                                <h5 className='ml-3'>Includes trade-in and carrier credits. <br /> AT&amp;T:&nbsp;up to $1000. T-Mobile: up to $800. <br /> Verizon: up to $830.</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5 ml-20'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-mac-card-40-education-202402_GEO_US?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1708288270822")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">EDUCATION</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Save on a new mac with education pricing.</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-business-202209?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1660927783133")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">BUSINESS</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3 text-white">From enterprise to small business, we'll work with you.</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259305816")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">GOVERNMENT</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Special pricing is available for state, local, federal agencies.</h3>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veteran-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1708061012884")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">TODAY AT APPLE</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Join free sessions at your <br /> Apple store.</h3>
                                <h5 className='font-light leading-tight m-3'>Learn about the latest features and how to go furthur with your Apple devices</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259306111")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-xs font-medium m-3 text-gray-500">TODAY AT APPLE</h2>
                                <h3 className="text-3xl font-medium leading-tight m-3">Join free sessions at your <br /> Apple store.</h3>
                                <h5 className='font-light leading-tight m-3'>Learn about the latest features and how to go furthur with your Apple devices</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div >
    );
}
