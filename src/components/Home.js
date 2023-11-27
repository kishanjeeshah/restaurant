import React from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className=' my-5 h-[450px] flex justify-center background text-white'>

        <div className='w-[750px] text-center'>
            <h1 className='font-bold text-6xl p-5 mt-[100px] '>Only Quality Food</h1>

            <p className='font-light text-md'>Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                 totam rem aperiam, eaque ipse quee ab illo inventore veritatis et quasi archicture ipsa quee ab illoinventore.</p>

            <div className='flex justify-center gap-5 mt-[50px]'>
                <button className='border-2 border-black py-2 px-5'>View menu</button>
                <button className='border-2 border-black bg-orange-300 py-2 px-5 '>Reservation</button>
            </div>

            <div className='flex justify-center my-5 py-5 text-4xl'>
                <FaLongArrowAltDown />
            </div>
        </div>


    </div>
  )
}

export default Home