import React from 'react'

export default function DealOffer() {
    return (
        <div className='flex px-10'>
            <div className='bg-white border pt-5 px-5'>
                <h1 className='leading-[28px] font-[Inter]  text-xl text-black font-bold tracking-[-0.2px]'>Deals And Offers</h1>
                <p className='text-[#8B96A5] font-[Inter] text-base'>hygiene Equipments</p>
                <div className="grid grid-flow-col pt-5  text-center gap-3 auto-cols-max">
                    <div className="flex flex-col p-2 bg-[#606060]  rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-[#606060] rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-[#606060] rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 48 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5'>
                <div className='bg-white border py-[38px] px-[10px]'>
                    <div className='h-[140px] flex justify-center items-center w-[140px]'>
                        <img src="/image1.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='leading-[24px] font-[Inter]   text-base tracking-[-0.2px]'>Smart Watch</p>
                        <span className='rounded-[29px]  text-[#EB001B] text-sm font-medium font-[Inter] bg-[#FFE3E3] px-[13px] py-[4px]'>-25%</span>
                    </div>
                </div>
                <div className='bg-white border py-[38px] px-[10px]'>
                    <div className='h-[140px] flex justify-center items-center w-[140px]'>
                        <img src="/image3.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='leading-[24px] font-[Inter]   text-base tracking-[-0.2px]'> Canon camera</p>
                        <span className='rounded-[29px] pb-[7px] text-[#EB001B] text-sm font-medium font-[Inter] bg-[#FFE3E3] px-[13px] py-[4px]'>-25%</span>
                    </div>
                </div>
                <div className='bg-white border py-[38px] px-[10px]'>
                    <div className='h-[140px] flex justify-center items-center w-[140px]'>
                        <img src="/image2.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='leading-[24px] font-[Inter]   text-base tracking-[-0.2px]'> Mobile Phone</p>
                        <span className='rounded-[29px]  text-[#EB001B] text-sm font-medium font-[Inter] bg-[#FFE3E3] px-[13px] py-[4px]'>-25%</span>
                    </div>
                </div>
                <div className='bg-white border py-[38px] px-[10px]'>
                    <div className='h-[140px] flex justify-center items-center w-[140px]'>
                        <img src="/image4.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='leading-[24px] font-[Inter]   text-base tracking-[-0.2px]'> Laptop</p>
                        <span className='rounded-[29px]  text-[#EB001B] text-sm font-medium font-[Inter] bg-[#FFE3E3] px-[13px] py-[4px]'>-25%</span>
                    </div>
                </div>
                <div className='bg-white border py-[38px] px-[10px]'>
                    <div className='h-[140px] flex justify-center items-center w-[140px]'>
                        <img src="/image5.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='leading-[24px] font-[Inter]   text-base tracking-[-0.2px]'>Head Phone</p>
                        <span className='rounded-[29px] text-[#EB001B] text-sm font-medium font-[Inter] bg-[#FFE3E3] px-[13px] py-[4px]'>-50%</span>
                    </div>
                </div>
                 
            </div>
        </div>
    )
}
