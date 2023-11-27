import React from 'react'

const Contact = () => {
  return (
    <div className='m-10 p-10 background_contact'>

        <div className='flex justify-center gap-10'>

        <div className='bg-gray-900 text-white w-[40%] text-center p-10'>
            <h1 className=' text-4xl' >Hours Of Operation</h1>

            <div className='m-10 p-10 font-bold space-y-3'>
            <h5>MON - FRI</h5>
            <p>10:00AM - 1:00PM</p>
            <p>4:00PM - 10:30PM</p>

            <p className='w-full h-1 bg-orange-300'></p>

            <h5>SAT</h5>
            <p>3:00PM - 10:30PM</p>

            <p className='w-full h-1 bg-orange-300'></p>

            <h5>SUN</h5>
            <p>We are Closed</p>

            <button className='bg-orange-300 py-2 px-10'>MAKE A RESERVATION</button>
            </div>

        </div>


        <div className='bg-gray-900 text-white w-[40%] text-center p-10'>
            <h1 className='text-4xl p-3'>Drop Us a Line</h1>

            <p className='my-5'>Don't be shy. Let us know if you have questions!</p>

            <button className='bg-orange-300 py-2 px-5'>CONTACT US </button>

            <h2 className='mt-10 text-xl '>Our Newsletter</h2>

            <p className='p-5'>Dialogue is an essentail part of any script</p>

            <div className='flex flex-col space-y-5 w-full px-5'>
            <label>
                <input
                className='w-full p-1 bg-black'
                    type='text'
                    placeholder='First name'
                />
            </label>

            <label>
                <input
                                className='w-full p-1 bg-black'
                    type='text'
                    placeholder='Last name'
                />
            </label>

            <label>
                <input
                                className='w-full p-1 bg-black'
                    type='email'
                    placeholder='Email'
                />
            </label>

            <button className='bg-orange-300 py-2 px-10'>CONTACT US</button>
            </div>

        </div>
        </div>

        
    </div>
  )
}

export default Contact