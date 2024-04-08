import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className='bg-[#f5f5f7] text-[12px]'>
                <div className='w-[1024px] px-6 mx-auto'>
                    <div className='pt-4 pb-3 border-b border-[#444445] text-black opacity-55'>
                        <p className='pb-2.5'>1. Trade-in values will vary based on the condition, year, and configuration of
                            your eligible
                            trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be
                            eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward
                            qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on
                            receipt of a qualifying device matching the description provided when estimate was made. Sales tax
                            may be assessed on full value of a new device purchase. In-store trade-in requires presentation of
                            a valid photo ID (local law may require saving this information). Offer may not be available in all
                            stores, and may vary between in-store and online trade-in. Some stores may have additional
                            requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any
                            trade-in transaction for any reason. More details are available from Apple’s trade-in partner for
                            trade-in and recycling of eligible devices. Restrictions and limitations may apply.</p>
                        <p className='pb-2.5'>Available in the U.S. on <span className='text-black opacity-90 underline'>
                            <Link to="https://www.apple.com/">apple.com</Link></span>, in the Apple Store app, and at Apple
                            Stores.</p>
                        <p className='pb-2.5'>To access and use all Apple Card features and products available only to
                            Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has
                            the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for
                            qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City
                            Branch.</p>
                        <p className='pb-2.5'>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923
                            with questions about Apple Card.</p>
                        <p className='pb-2.5'>Learn more about how Apple Card applications are evaluated at <span className='text-black underline'>
                            support.apple.com/kb/HT209218</span>.</p>
                        <p className='pb-5'>A subscription is required for Apple TV+.</p>

                    </div>

                    <div className='mt-5 grid grid-cols-5 gap-x-4'>
                        <div>
                            <h3 className='mb-1.5 font-semibold'>Shop and Learn</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Store</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Mac</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >iPad</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >iPhone</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Watch</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Vision</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >AirPods</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >TV &amp; Home</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >AirTag</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Accessories</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Gift Cards</Link></li>
                            </ul>
                            <h3 className='mb-1.5 font-semibold'>Apple Wallet</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Wallet</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Card</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Pay</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Cash</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='mb-1.5 font-semibold'>Account</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Manage Your Apple ID</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Store Account</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >iCloud.com</Link></li>
                            </ul>
                            <h3 className='mb-1.5 font-semibold'>Entertainment</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Apple One</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple TV+</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Music</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Arcade</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Fitness++</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple News+</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Products</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Books</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Store</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='mb-1.5 font-semibold'>Apple Store</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Find a Store</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Genius Bar</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Today at Apple</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Camp</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Store App</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Certified Refurbished</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Trade In</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Finncing</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >areer Deal at Apple</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Order Status</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Shopping Help</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='mb-1.5 font-semibold'>For Business</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Apple and Business</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Shop For Business</Link></li>
                            </ul>
                            <h3 className='mb-1.5'>For Education</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Apple and Education</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Shop for K-12</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Shop for Collage</Link></li>
                            </ul>
                            <h3 className='mb-1.5 font-semibold'>For Health</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Apple in Healthcare</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Health on Apple Watch</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Health record on iPhone</Link></li>
                            </ul>
                            <h3 className='mb-1.5 font-semibold'>For Government</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Shop for Government</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Shop for Vaterans and Military</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='mb-1.5 font-semibold'>Apple Values</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Accessibility</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Education</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Enviornment</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Inclusion and Diversity</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Privacy</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Racial Equility and Justice</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Supplier Responsibility</Link></li>
                            </ul>
                            <h3 className='mb-1.5 font-semibold'>About Apple</h3>
                            <ul class="opacity-55 mb-3">
                                <li className='mb-1.5 hover:underline'><Link >Newsroom</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Apple Leadership</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Career Opportunities</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Investers</Link></li>
                                <li className='mb-1.5 hover:underline'><Link >Ethics and Copmliance</Link></li>
                                <li className='mb-1.5 hover:underline'><Link ></Link>Events</li>
                                <li className='mb-1.5 hover:underline'><Link >Contect Apple</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='pt-9 pb-5 border-b border-[#444445]'>
                        <p className='opacity-55'>More ways to shop: <span className='text-[#2997ff] underline opacity-100'>Find an Apple Store</span> or
                            <span className='text-[#2997ff] underline opacity-100'>other retailer</span> near you. Or call 1-800-MY-APPLE.</p>
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className=' flex justify-between'>
                            <p className='opacity-55'>
                                Copyright &copy; 2024  Apple Inc. All rights reserved.
                            </p>
                            <div className='opacity-75'>
                                <p><Link className='hover:underline mx-1.5'>Privacy Policy</Link> | <Link className='hover:underline mx-1.5'>Terms of Use</Link>
                                    | <Link className='hover:underline mx-1.5'>Sales and refund</Link> | <Link className='hover:underline mx-1.5'>Legal</Link> |
                                    <Link className='hover:underline mx-1.5'>Site Map</Link></p>
                            </div>
                        </div>
                        <div className='opacity-55'>United States</div>
                    </div>
                </div>
            </footer >
        </>
    )
}
