import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'

export default function LeftNavigation() {
    return (
        <div className='w-[240px]'>
            <p className='bg-red-300 px-5'>Left Navigation </p>

            <div>
                <select className="select w-full">
                    <option disabled selected>Category</option>
                    <option>Homer</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                    <option>
                        <button className='bg-red-500'>See More</button>
                    </option>
                </select>
            </div>

            {/* brands */}

            <div>
                <select className="select w-full">
                    <option disabled selected>Brands</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                    <option>
                        <button className='bg-red-500'>See More</button>
                    </option>
                </select>
            </div>


            {/* Feature */}
            <div>
                <select className="select w-full">
                    <option disabled selected>Brands</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                    <option>
                        <button className='bg-red-500'>See More</button>
                    </option>
                </select>
            </div>

            {/* price Range  */}
            <div>
                <input type="range" min={0} max="100" value="40" className="range range-info" />
                <select className="select w-full">
                    <option disabled selected>Brands</option>
                    <option>Homer</option>
                    <option> <input type="text" name="" id="" /></option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                    <option>
                        <button className='bg-red-500'>See More</button>
                    </option>
                </select>
            </div>


            {/* condition */}
            <div>
                <select className="select w-full">
                    <option disabled selected>Brands</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                    <option>
                        <button className='bg-red-500'>See More</button>
                    </option>
                </select>
            </div>


            {/* rating */}
            <div className='flex gap-3'>
                <div >
                    <input className='h-4 w-4' type="checkbox" name="" id="" />
                </div>
                <Rating
                    placeholderRating={5}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>} />
            </div>
            <div className='flex gap-3'>
                <div >
                    <input className='h-4 w-4' type="checkbox" name="" id="" />
                </div>
                <Rating
                    placeholderRating={4}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>} />
            </div>
            <div className='flex gap-3'>
                <div >
                    <input className='h-4 w-4' type="checkbox" name="" id="" />
                </div>
                <Rating
                    placeholderRating={3}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>} />
            </div>
            <div className='flex gap-3'>
                <div >
                    <input className='h-4 w-4' type="checkbox" name="" id="" />
                </div>
                <Rating
                    placeholderRating={2}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>} />
            </div>
            <div className='flex gap-3'>
                <div >
                    <input className='h-4 w-4' type="checkbox" name="" id="" />
                </div>
                <Rating
                    placeholderRating={1}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>} />
            </div>


        </div >
    )
}
