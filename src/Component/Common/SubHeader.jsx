import React from 'react'
import { FaBars } from 'react-icons/fa';

export default function SubHeader() {
    return (
        <div className='flex justify-between h-14 bg-white border '>
            <div className='flex gap-7 justify-center items-center px-10'>
                <p className='text-[rgb(139,150,165)] h-[19px] text-2xl'><FaBars /></p>
                <p className='text-black font-[Inter] text-base leading-[22px]'>All Category</p>
                <p className='text-black font-[Inter] text-base leading-[22px]'>Hot Offer</p>
                <p className='text-black font-[Inter] text-base leading-[22px]'>All Gift Boxes</p>
                <p className='text-black font-[Inter] text-base leading-[22px]'>Project</p>
                <p className='text-black font-[Inter] text-base leading-[22px]'>Menu Item</p>
                <p className='text-black font-[Inter] text-base leading-[22px]' ><select className="select  bg-white text-black">
                    <option selected>Help</option>
                    <option>T-shirts</option>
                    <option>Mugs</option>
                </select></p>
            </div>
            <div>
                {/* boder change korta hoba */}
                <select className="select bg-white  text-black">
                    <option selected>English,USD</option>
                    <option>T-shirts</option>
                    <option>Mugs</option>
                </select>
                <select className="select bg-white  text-black">
                    <option selected>Slip To </option>
                    <option>T-shirts</option>
                    <option>Mugs</option>
                </select>

            </div>
        </div>

    )
}
