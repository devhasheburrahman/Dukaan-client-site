import React from 'react'
import { FaBars, FaGenderless, FaRegStar, FaStar, FaWindows } from 'react-icons/fa';
import Rating from 'react-rating';

export default function Content() {
  return (
    <div>
      <div className='h-[62px] w-[920] flex justify-between border rounded-lg mt-5 items-center bg-white px-10 '>
        <p>12,911 items <span className='font-[Inter] font-semibold'>in Mobile Accessory</span></p>
        <div className='flex justify-center gap-5'>
          <div className='flex items-center gap-3'>
            <input className='h-5 w-5' type="checkbox" name="" id="" />
            <p>Verified Only </p></div>
          <div><select className="w-full border p-2 max-w-xs">
            <option disabled selected>Featured</option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          </div>
          <div className='flex gap-3 border p-1'>
            <FaWindows className='text-2xl border ' />
            <FaBars className='text-2xl  bg-slate-200' />
          </div>
        </div>

      </div>

      {/* card section  */}


      <div className='flex flex-col gap-10 rounded-lg' >
        <div className='h-[200px]  flex justify-between  px-5  shadow-2xl '>
          <div className='h-[184px] w-[184px] p-5'>
            <img className='w-full' src="/8.png" alt="" />
          </div>

          <div >
            <p className='font-bold font-[Inter] text-base tracking-[-0.2px]'>Canon Cmera EOS 2000, Black 10x zoom</p>
            <div className='flex gap-3 items-center'>
              <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
              <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
            </div>

            <div className='flex items-center gap-5'>
              <div className='flex gap-5'>
                <Rating
                  placeholderRating={5}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                  fullSymbol={<FaStar></FaStar>} />
                <div className='text-[#FF9017] text-base'>7.5</div>
              </div>
              <p className='text-[#DEE2E7]'><FaGenderless /></p>
              <p className='text-[#505050] text-base font-[Inter]'>154 order</p>
              <p ><FaGenderless /></p>
              <p className='text-[#00B517] text-base font-[Inter]'> Free shipping</p>
            </div>
            <div className='text-[#505050] text-base font-[Inter]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda at dolores, quasi sapiente inventore alias debitis possimus enim beatae saepe!
            </div>
            <button className='text-[#0D6EFD] text-base font-[Inter] tracking-[-0.2px] '>View Details</button>
          </div>
          <div>
            <img className='bg-white mt-10 h-10 w-16  p-2 shadow-lg' src="/love.png" alt="" />
          </div>

        </div>
        <div className='h-[200px]  flex justify-between  px-5  shadow-2xl '>
          <div className='h-[184px] w-[184px] p-5'>
            <img className='w-full' src="/8.png" alt="" />
          </div>

          <div >
            <p className='font-bold font-[Inter] text-base tracking-[-0.2px]'>Canon Cmera EOS 2000, Black 10x zoom</p>
            <div className='flex gap-3 items-center'>
              <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
              <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
            </div>

            <div className='flex items-center gap-5'>
              <div className='flex gap-5'>
                <Rating
                  placeholderRating={5}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                  fullSymbol={<FaStar></FaStar>} />
                <div className='text-[#FF9017] text-base'>7.5</div>
              </div>
              <p className='text-[#DEE2E7]'><FaGenderless /></p>
              <p className='text-[#505050] text-base font-[Inter]'>154 order</p>
              <p ><FaGenderless /></p>
              <p className='text-[#00B517] text-base font-[Inter]'> Free shipping</p>
            </div>
            <div className='text-[#505050] text-base font-[Inter]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda at dolores, quasi sapiente inventore alias debitis possimus enim beatae saepe!
            </div>
            <button className='text-[#0D6EFD] text-base font-[Inter] tracking-[-0.2px] '>View Details</button>
          </div>  <div>
            <img className='bg-white mt-10 h-10 w-16  p-2 shadow-lg' src="/love.png" alt="" />
          </div>

        </div>
        <div className='h-[200px]  flex justify-between  px-5  shadow-2xl '>
          <div className='h-[184px] w-[184px] p-5'>
            <img className='w-full' src="/8.png" alt="" />
          </div>

          <div >
            <p className='font-bold font-[Inter] text-base tracking-[-0.2px]'>Canon Cmera EOS 2000, Black 10x zoom</p>
            <div className='flex gap-3 items-center'>
              <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
              <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
            </div>

            <div className='flex items-center gap-5'>
              <div className='flex gap-5'>
                <Rating
                  placeholderRating={5}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                  fullSymbol={<FaStar></FaStar>} />
                <div className='text-[#FF9017] text-base'>7.5</div>
              </div>
              <p className='text-[#DEE2E7]'><FaGenderless /></p>
              <p className='text-[#505050] text-base font-[Inter]'>154 order</p>
              <p className='text-[#DEE2E7]'><FaGenderless /></p>
              <p className='text-[#00B517] text-base font-[Inter]'> Free shipping</p>
            </div>
            <div className='text-[#505050] text-base font-[Inter]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda at dolores, quasi sapiente inventore alias debitis possimus enim beatae saepe!
            </div>
            <button className='text-[#0D6EFD] text-base font-[Inter] tracking-[-0.2px] '>View Details</button>
          </div>  <div>
            <img className='bg-white mt-10 h-10 w-16  p-2 shadow-lg' src="/love.png" alt="" />
          </div>

        </div>
        <div className='h-[200px]  flex justify-between  px-5  shadow-2xl '>
          <div className='h-[184px] w-[184px] p-5'>
            <img className='w-full' src="/8.png" alt="" />
          </div>

          <div >
            <p className='font-bold font-[Inter] text-base tracking-[-0.2px]'>Canon Cmera EOS 2000, Black 10x zoom</p>
            <div className='flex gap-3 items-center'>
              <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
              <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
            </div>

            <div className='flex items-center gap-5'>
              <div className='flex gap-5'>
                <Rating
                  placeholderRating={5}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                  fullSymbol={<FaStar></FaStar>} />
                <div className='text-[#FF9017] text-base'>7.5</div>
              </div>
              <p className='text-[#DEE2E7]'><FaGenderless /></p>
              <p className='text-[#505050] text-base font-[Inter]'>154 order</p>
              <p className='text-[#DEE2E7]'><FaGenderless /></p>
              <p className='text-[#00B517] text-base font-[Inter]'> Free shipping</p>
            </div>
            <div className='text-[#505050] text-base font-[Inter]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda at dolores, quasi sapiente inventore alias debitis possimus enim beatae saepe!
            </div>
            <button className='text-[#0D6EFD] text-base font-[Inter] tracking-[-0.2px] '>View Details</button>
          </div>  <div>
            <img className='bg-white mt-10 h-10 w-16  p-2 shadow-lg' src="/love.png" alt="" />
          </div>

        </div>
        <div className='h-[200px]  flex justify-between  px-5  shadow-2xl '>
          <div className='h-[184px] w-[184px] p-5'>
            <img className='w-full' src="/8.png" alt="" />
          </div>

          <div >
            <p className='font-bold font-[Inter] text-base tracking-[-0.2px]'>Canon Cmera EOS 2000, Black 10x zoom</p>
            <div className='flex gap-3 items-center'>
              <p className='font-bold font-[Inter] text-xl tracking-[-0.2px]'>$ 980.00</p>
              <p className='font-semibold  text-base text-[#8B96A5] line-through '>$1120.00</p>
            </div>

            <div className='flex items-center gap-5'>
              <div className='flex gap-5'>
                <Rating
                  placeholderRating={5}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                  fullSymbol={<FaStar></FaStar>} />
                <div className='text-[#FF9017] text-base'>7.5</div>
              </div>
              <p className='text-[#DEE2E7]'><FaGenderless /></p>
              <p className='text-[#505050] text-base font-[Inter]'>154 order</p>
              <p className='text-[#DEE2E7]'><FaGenderless /></p>
              <p className='text-[#00B517] text-base font-[Inter]'> Free shipping</p>
            </div>
            <div className='text-[#505050] text-base font-[Inter]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda at dolores, quasi sapiente inventore alias debitis possimus enim beatae saepe!
            </div>
            <button className='text-[#0D6EFD] text-base font-[Inter] tracking-[-0.2px] '>View Details</button>
          </div>  <div>
            <img className='bg-white mt-10 h-10 w-16  p-2 shadow-lg' src="/love.png" alt="" />
          </div>

        </div>
      </div>

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
