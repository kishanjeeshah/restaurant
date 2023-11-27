import React from 'react'
import image1 from './image/shop1.png'
import image2 from './image/shop2.png'
import image3 from './image/shop3.png'
import image4 from './image/shop4.png'
import image5 from './image/shop5.png'
import image6 from './image/shop6.png'

const Shop = () => {
  return (
    <div className='flex justify-center bg-black'>

        <div className='grid grid-cols-3 w-[900px] text-center p-5 bg-white'>
        <div className='my-5' >
            <h1 className='text-orange-700 text-2xl'>$26.95</h1>
            <h1 className='text-2xl my-3'>Grilled Fillet</h1>
            <p className='m-5 opacity-60'>
                sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo inventore veritatis et quasi archicture
            </p>
        </div>
        
        <div>
            <img src={image1} alt=''></img>
        </div>

        <div className='my-5'>
            <h1 className='text-orange-700 text-2xl'>$53.3</h1>
            <h1 className='text-2xl my-3' >Chicken Breast</h1>
            <p className='m-5 opacity-60'>
                sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo inventore veritatis et quasi archicture
            </p>
        </div>
        
        <div>
            <img src={image2} alt=''></img>
        </div>

        <div className='my-5'>
            <h1 className='text-orange-700 text-2xl'>$40.5</h1>
            <h1 className='text-2xl my-3'>King Crab</h1>
            <p className='m-5 opacity-60'>
                sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo inventore veritatis et quasi archicture
            </p>
        </div>
        
        <div>
            <img src={image3} alt=''></img>
        </div>

        <div className='my-5'>
            <h1 className='text-orange-700 text-2xl'>$40.5</h1>
            <h1 className='text-2xl my-3'>Sea Trout</h1>
            <p className='m-5 opacity-60'>
                sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo inventore veritatis et quasi archicture
            </p>
        </div>
        
        <div>
            <img src={image4} alt=''></img>
        </div>

        <div className='my-5'>
            <h1 className='text-orange-700 text-2xl'>$22.3</h1>
            <h1 className='text-2xl my-3'>Roasted Bakra</h1>
            <p className='m-5 opacity-60'>
                sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo inventore veritatis et quasi archicture
            </p>
        </div>
        
        <div>
            <img src={image5} alt=''></img>
        </div>

        <div className='my-5'>
            <h1 className='text-orange-700 text-2xl'>$22.3</h1>
            <h1 className='text-2xl my-3'>Roasted Bakra</h1>
            <p className='m-5 opacity-60'>
                sed ut prespiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudamtium ,
                totam rem aperiam, eaque ipse quee ab illo inventore veritatis et quasi archicture
            </p>
        </div>
        
        <div>
            <img src={image6} alt=''></img>
        </div>

        </div>
        
    </div>
  )
}

export default Shop