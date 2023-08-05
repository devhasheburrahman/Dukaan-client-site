import React from 'react'

export default function NewLatter() {
    return (
        <div className='bg-white flex flex-col items-center pb-20 pt-20'>
            <p className='font-[Inter] text-[20px] font-semibold text-[#1C1C1C]'>Subscribe on our newsletter</p>
            <p className='font-[Inter] text-base leading-[24px] mb-5 text-[#606060] translate-[-0.2px]'>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Email 👍" className="input input-bordered bg-white" />
                    <button className="px-4 text-white bg-[#0067FF]  ">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

