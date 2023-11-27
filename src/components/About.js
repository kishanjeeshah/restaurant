import React from 'react'
import image1 from './image/about1.png'
import image2 from './image/about2.png'
import image3 from './image/about3.png'

const About = () => {
  return (
    <div className='flex flex-col items-center'>

    <div className='flex flex-col items-center'>
    <h4 className='text-center font-bold opacity-50'>DON'T MISS</h4>
        <p className='h-1 w-12 bg-orange-300'></p>
    </div>

    <div className='flex flex-col items-center'>
    <h1 className='text-4xl py-10 '>Our News And Events</h1>
        <p className='text-center opacity-60 w-[500px] my-3'>
            sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
            totam rem aperiam, eaque ipse quee ab illo inventore veritatis et quasi archicture
        </p>
    </div>



        <div className='flex jusitfy-between m-10 gap-10'>
            <div className='w-[300px] bg-slate-100'>
                <img src={image1} alt='' width={300} height={200}></img>
                <h2 className='font-semibold my-3 p-3'>Nunc Volutpat Venenatis </h2>
                <h4 className='text-orange-300 font-bold text-sm p-3'>CATEGORY</h4>
                <p className='opacity-60 p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                    commodi molestias. Vero quisquam accusantium, ex non minus ipsam aperiam soluta.</p>
            </div>

            <div className='w-[300px] bg-slate-100'>
                <img src={image2} alt=''  width={300} height={200}></img>
                <h2 className='font-semibold my-3 p-3'> Vestibulum Nisl Felis </h2>
                <h4 className='text-orange-300 font-bold text-sm p-3'>CATEGORY</h4>
                <p className='opacity-60 p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                    commodi molestias. Vero quisquam accusantium</p>
            </div>

            <div className='w-[300px] bg-slate-100'>
                <img src={image3} alt=''  width={300} height={200}></img>
                <h2 className='font-semibold my-3 p-3'>Proin Eu Augue Efficitur</h2>
                <h4 className='text-orange-300 font-bold text-sm p-3' >CATEGORY</h4>
                <p className=' opacity-60 p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                    commodi molestias. Vero quisquam accusantium</p>
            </div>
        </div>

        <div className='flex justify-center'>
            <button className='py-2 px-5 bg-orange-300 text-white'>Read More</button>
        </div>
    </div>
  )
}

export default About