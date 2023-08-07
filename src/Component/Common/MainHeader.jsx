import React from 'react'
import { FaCartPlus, FaHeart, FaRegCommentAlt, FaUserAlt } from 'react-icons/fa';


export default function MainHeader() {
    return (
        <div className='px-10 flex justify-between items-center h-[86px] bg-white'>
            <div>
                <img className='h-[77px]' src="/Dukaan.png" alt="" />
            </div>
            {/* <div>
                <div className="form-control border-[1.5px]  border-[#0067FF] rounded-[10px] ">
                    <div className="input-group">
                        <input type="text" cl placeholder="Search…" className="input   bg-white" />
                        <select className="select bg-white  border-l-[#0067FF] text-black select-bordered">
                            <option selected>All category</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                        </select>
                        <button className="px-4 text-white bg-gradient-to-r from-[#127FFF] to-[#0067FF] ">Search</button>
                    </div>
                </div>
            </div> */}

            <div className="join rounded-[10px] border-[1.5px] border-[#127FFF]">
                <div className='form-control'>
                    <div>
                        <input className="input w-[600px] join-item" placeholder="Search...." />
                    </div>
                </div>
                <select className="select rounded-lg border-x-[1.5px] border-x-[#127FFF] bg-white  text-black h-[40px]  select-bordered join-item">
                    <option  selected>Filter</option>
                    <option>T-shirts</option>
                    <option>Mug</option>
                    <option>Action</option>
                </select>
                <div className="indicator">

                    <button className="px-4 text-white rounded-lg bg-[#127FFF] join-item">Search</button>
                </div>
            </div>

            <div className='flex gap-[38px]  items-center'>
                <div className='flex flex-col items-center'>
                    <p className='text-[#8B96A5] h-[19px] w-[20px]'><FaUserAlt /></p>
                    <p className='font-[Inter] text-xs text-[#8B96A5]'>Profile</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[#8B96A5] h-[19px] w-[20px]'><FaRegCommentAlt /></p>
                    <p className='font-[Inter] text-xs text-[#8B96A5]'>Message</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[#8B96A5] h-[19px] w-[20px]'><FaHeart /></p>
                    <p className='font-[Inter] text-xs text-[#8B96A5]'>Orders</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[#8B96A5] h-[19px] w-[20px]'><FaCartPlus /></p>
                    <p className='font-[Inter] text-xs text-[#8B96A5]'>My cart</p>
                </div>
            </div>

        </div>
    )
}
