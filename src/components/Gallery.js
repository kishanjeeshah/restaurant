import React from 'react'
import image from './image/image1.png'

const Gallery = () => {
    return (
        <div className='mt-10'>

            <div className='flex w-full  h-screen flex justify-evenly'>
                <div className='w-[450px] h-scren p-10'>
                    <div className='font-light text-lg'>Our Story </div>
                    <div className='h-1 w-10 bg-orange-300'></div>
                    <h1 className='font-light text-4xl py-5'>Welcome to Royal</h1>
                    <p className='font-light '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis e quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim psam voluptatem quoluptas sit aspernatur aut odit aut fugit. doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                        Doloren que laudantium, totam rem aperiam,</p>
                       <p className='font-light '> eaque ipsa quae abo. Sed ut perspiciatis unde omnis iste natus err sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                </div>


                <div className=''>
                    <img src={image} alt='' width={400}></img>
                </div>
            </div>


            <div className='text-center flex flex-col items-center py-5 bg-gray-200'>
                <h4 className='font-bold uppercase opacity-30 '>Only the best</h4>
                <div className='h-1 w-10 bg-orange-300 flex justify-center'></div>
                
                <div className='w-[800px]'>
                <div className=' text-4xl my-5'>Fresh Ingredient, Tasty Meals</div>
                
                <p className='font-bold opacity-40'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis e quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim psam voluptatem quoluptas sit aspernatur aut odit aut fugit. doloremque laudantium, totam rem aperiam, </p>

                <div className='my-5'>
                    <button className='bg-orange-300 py-2 px-5 uppercase text-white text-bold'>Views Items</button>
                </div>
                </div>

            </div>



        </div>
    )
}

export default Gallery