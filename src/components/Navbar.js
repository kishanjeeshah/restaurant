import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>

        <div>
            <h1 className='font-semibold text-2xl '>Restaurdent Landing  Page</h1>
        </div>

        <div>

            <div>
                <ul className='flex gap-5 justify-center items-center'>
                    <li className='font-semibold'>Landing</li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>gallery</a></li>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Team</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'><FaShoppingCart /></a></li>

                </ul>
            </div>

        </div>

    </div>
  )
}

export default Navbar