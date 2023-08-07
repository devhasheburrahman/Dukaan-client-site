import React from 'react'

export default function Suppliers() {
    return (

        <div className="hero w-[1190px] h-[420px] mt-10 rounded-l-lg flex mx-auto pl-[22px] " style={{ backgroundImage: 'url(/suppliers.png)' }}>
            <div className='flex flex-col gap-10'>
                <h1 className=" text-[32px] tracking-[-0.2px] font-[Inter] text-white">An easy way to send <br />requests to all suppliers</h1>
                <p className='text-base  font-[Inter] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.!</p>
            </div>
            <div className='h-[346px] w-[490px] bg-white  p-5 mr-5 rounded-lg'>
                <p>Send quote to suppliers</p>
                <input type="text" placeholder="What item you need ?" className="input input-bordered   w-full  " />
                <textarea className="textarea mt-5 textarea-bordered w-full" placeholder="Type more details"></textarea>
                <div className='flex gap-5 w-3/4 pt-5'>
                    <input type="text" placeholder="Quantity" className="input input-bordered   w-full  " />
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>PCS</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <button className='bg-[#0067FF]  px-5 py-[7px] rounded-lg text-[13px] font-[Inter] font-medium mt-6 mb-[7px] text-white '>Send inquiry</button>
            </div>
        </div>

    )
}
