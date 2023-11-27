import React from 'react'
import { IoStar } from "react-icons/io5";

const Blog = () => {
  return (
    <div className='my-10 py-10 flex flex-col items-center'>

        <h4 className='text-center font-bold opacity-50'>Testimonial</h4>
        <div className='h-1 w-12 bg-orange-300'></div>

        <div className='text-4xl my-10'>What People are Saying </div>

        <div className='flex justify-around gap-10'>
        <div className='w-[200px]'>
            <div className='flex text-orange-300 w-full'>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
            </div>

            <h1 className='my-5 '>"A Great Find"</h1>

            <p className='opacity-70'>Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo
            </p>

            <p className='my-3'>Divi</p>
        </div>

        <div className='w-[200px]'>
            <div className='flex text-orange-300 w-full'>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
            </div>

            <h1 className='my-5 '>"Fabolus Food & Flawless service"</h1>

            <p className='opacity-70'>Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo
            </p>

            <p className='my-3'>Bloom</p>
        </div>

        <div className='w-[200px]'>
            <div className='flex text-orange-300 w-full'>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
            </div>

            <h1 className='my-5 '>"Another succedssful experience"</h1>

            <p className='opacity-70'>Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo
            </p>

            <p className='my-3'>Extra</p>
        </div>

        <div className='w-[200px]'>
            <div className='flex text-orange-300 w-full'>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
                <div><IoStar /></div>
            </div>

            <h1 className='my-5 '>"Spechless"</h1>

            <p className='opacity-70'>Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo
            </p>

            <p className='my-3'>Monarch</p>
        </div>

        </div>
        

    </div>
  )
}

export default Blog