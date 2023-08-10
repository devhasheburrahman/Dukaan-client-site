import React from 'react'
import { FaCheck, FaRegCommentAlt, FaRegStar, FaShoppingBasket, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'


export default function DetailsPages() {
    return (
        <div className='flex gap-3 shadow-xl '>
            <div className='w-[380px] p-5'>
                <div className='  p-5'>
                    <img className='h-[345px] w-[345px] border-2  rounded-md ' src="/image 34.png" alt="" />
                </div>
                <div className='flex gap-3'>
                    <img className='h-[48px] w-[48px] border-2 p-[4px] rounded-md ' src="/image 35.png" alt="" />
                    <img className='h-[48px] w-[48px] border-2 p-[4px] rounded-md ' src="/image 40.png" alt="" />
                    <img className='h-[48px] w-[48px] border-2 p-[4px] rounded-md ' src="/image 36.png" alt="" />
                    <img className='h-[48px] w-[48px] border-2 p-[4px] rounded-md ' src="/image 37.png" alt="" />
                    <img className='h-[48px] w-[48px] border-2 p-[4px] rounded-md ' src="/image 38.png" alt="" />
                    <img className='h-[48px] w-[48px] border-2 p-[4px] rounded-md ' src="/image 39.png" alt="" />

                </div>
            </div>

            <div className='w-[430px]'>
                <div className='py-5'>
                    <p className='flex gap-3 text-[#00B517] text-base tracking-[-0.2px] items-center'><FaCheck /> In Stock</p>
                    <p className='text-[#1C1C1C] font-[Inter] font-bold text-xl'>Mens long sleeve T-shirt Cotton Base Layer slim muscle</p>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-4'>
                                <div className='flex gap-5'>
                                    <Rating
                                        placeholderRating={4}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>} />
                                    <div className='text-[#FF9017] text-base'>9.5</div>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <img src="/message.svg" alt="" />
                                    <p>32 reviews</p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <img src="/shopping.png" alt="" />
                                    <p>154 Sold</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[72px] w-full flex justify-center px-5 bg-[#FFF0DF]'>
                    <div className='p-4'>
                        <p className='text-[#FA3434] font-[Inter] font-semibold text-lg'>$98.00</p>
                        <p className='text-[#606060] font-[Inter]   text-[13px]'>50-100 pcs</p>
                    </div>
                    <div className='p-4'>
                        <p className='text-[#1C1C1C] font-[Inter] font-semibold text-lg'>$90.00</p>
                        <p className='text-[#606060] font-[Inter]   text-[13px]'>100-700 pcs</p>
                    </div>
                    <div className='p-4'>
                        <p className='text-[#1C1C1C] font-[Inter] font-semibold text-lg'>$78.00</p>
                        <p className='text-[#606060] font-[Inter]   text-[13px]'>700+ pcs</p>
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='text-[#8B96A5] text-base font-[Inter]  '>Price : <span > Negotiable</span></p>
                    <hr />
                    <p className='text-[#8B96A5] text-base font-[Inter]  '>Type: <span >classis show</span></p>
                    <p className='text-[#8B96A5] text-base font-[Inter]  '>Material : <span > Plastic material</span></p>
                    <p className='text-[#8B96A5] text-base font-[Inter]  '>Design : <span >Modern nice</span></p>
                    <hr />
                    <p className='text-[#8B96A5] text-base font-[Inter]  '>Customization:  : <span > Customized logo and design custom packages</span></p>
                    <p className='text-[#8B96A5] text-base font-[Inter]  '>Protection:  : <span > Refund Policy</span></p>
                    <p className='text-[#8B96A5] text-base font-[Inter]  '>Warranty:  : <span > 2 years full warranty </span></p>
                </div>
            </div>

        </div>
    )
}
