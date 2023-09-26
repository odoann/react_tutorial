import React from 'react'
import { NavLink } from "react-router-dom";

const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Blog', to: '/blog' },
]

function NavBar() {
    return (
        <div className=' bg-white w-full'>
            <div className='max-w-[1286px] mx-auto'>
                <div className='flex justify-between items-center mt-[32px]'>
                    <div className='text-mainColor text-[29px] font-bold'>LOGO</div>

                    <div className='flex  items-center gap-x-[71px] text-[16px]'>
                        {navLinks.map((item, index) => {
                            return <NavLink to={item.to}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "relative text-mainColor before:block before:absolute before:w-2 before:h-2 before:bg-mainColor before:rounded-full  before:-top-1 before:-left-2" : ""
                                }>{item.name}</NavLink>
                        })}

                        <NavLink to='/contact' className='bg-mainColor text-white px-[6px] py-1.5 text-center rounded-[6px] text-[13px]'><button>Contact
                            Us</button></NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar
