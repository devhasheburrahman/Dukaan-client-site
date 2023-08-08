import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'

export default function Product() {
    return (
        <div>
            <div className='grid grid-cols-3 gap-5 '>

                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className=' w-full h-[198px]  ' src="/8.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/8.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/9.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/6.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/image4.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/image3.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/image5.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/image1.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/8.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/8.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/8.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='shadow-2xl rounded-lg'>
                    <div className='p-5'>
                        <img className='w-full h-[198px] ' src="/8.png" alt="" />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
                                <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
                            </div>
                            <div className='flex gap-5'>
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <div className='text-[#FF9017] text-base'>7.5</div>
                            </div>
                            <div>
                                <p className='text-[#505050] text-base font-[Inter]'>CoPro hero6 4k action</p>
                                <p className='text-[#505050] text-base font-[Inter]'>Camera - Black</p>
                            </div>
                        </div>
                        <div>
                            <img className='bg-white mt-10 h-16 w-16  p-2 rounded border ' src="/love.png" alt="" />
                        </div>
                    </div>

                </div>
                
            </div>





            {/* patination */}
            <div className='justify-end flex mt-10 '>
                <select className="w-full border p-2 max-w-xs">
                    <option disabled selected> Show by</option>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>

                </select>
                <div className="join">
                    <button className="join-item btn btn-md">1</button>
                    <button className="join-item btn btn-md btn-active">2</button>
                    <button className="join-item btn btn-md">3</button>
                    <button className="join-item btn btn-md">4</button>
                </div>
            </div>
        </div>
    )
}
