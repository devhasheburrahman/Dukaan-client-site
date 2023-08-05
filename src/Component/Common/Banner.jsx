import React from 'react'

export default function Banner() {
    return (
        <div className='flex bg-white justify-center gap-4 mt-5 p-4'>
            <div className='w-[250px] space-y-3'>
                <p className='font-[Inter] text-base text-[#505050] '>Automobiles</p>
                <p className='font-[Inter] text-base text-[#505050] '>Clothes and wear</p>
                <p className='font-[Inter] text-base text-[#505050] '>Home interiors</p>
                <p className='font-[Inter] text-base text-[#505050] '>Computer and tech</p>
                <p className='font-[Inter] text-base text-[#505050] '>Tools, equipments</p>
                <p className='font-[Inter] text-base text-[#505050] '>Sports and outdoor</p>
                <p className='font-[Inter] text-base text-[#505050] '>Animal and pets</p>
                <p className='font-[Inter] text-base text-[#505050] '>Machinery tools</p>
                <p className='font-[Inter] text-base text-[#505050] '>More category</p>
            </div>

            <div className="hero w-[664px] h-[373px] " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div >
                        <h1 className=" text-xl  font-[Inter] text-black">Latest trending</h1>
                        <p className="  text-2xl text-black font-bold font-[Inter]">Electronic items</p>
                        <button className="bg-white px-4 py-[10px] rounded-lg text-[13px] font-[Inter] font-medium   text-black">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='w-[200px] flex flex-col gap-[10px] rounded-lg '>
                <div className='bg-[#E3F0FF] p-4'>
                    <div className='flex gap-[9px]'>
                        <img className='rounded-full h-[44px]' src="Avatar.jpg " alt="" />
                        <p className='text-base font-[Inter]'>Hi , User <br /> Let's get stated</p>
                    </div>
                    <button className='bg-[#0067FF] w-full py-[7px] rounded-lg text-[13px] font-[Inter] font-medium mt-6 mb-[7px] text-white '> Join now</button>
                    <button className='bg-white  w-full py-[7px] rounded-lg text-[#0067FF]'> Log in</button>
                </div>
                <div className='bg-[#F38332] rounded-md'>
                    <p className='font-[Inter] p-4 text-white text-base'>Get US $10 off <br /> with a new <br /> supplier</p>
                </div>
                <div className='bg-[#55BDC3] rounded-md'>
                    <p className='font-[Inter] p-4 text-white text-base'>Send quotes with supplier preferences</p>
                </div>

            </div>



        </div>
    )
}
