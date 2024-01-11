"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
    return (<>
        <div className='h-[100px] w-full bg-green '>
                <div className='flex justify-between items-center relative '>
                    <h2 className='text-black'>Restaurent</h2>
              
                <div>
                    <ul className={MobileMenu ? "flex flex-col absolute top-5 left-0 h-screen w-full bg-green-hover" : "hidden     lg:flex lg:flex-row lg:gap-5"} onClick={() => setMobileMenu(false)}>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                    </ul>
                    <button className=' lg:hidden' onClick={() => setMobileMenu(!MobileMenu)}>
                        {
                            MobileMenu ? <IoClose   className='absolute top-4 right-3 z-20' /> :
                                <GiHamburgerMenu />
                        }
                    </button>
                </div>
            </div>

        </div>


    </>);
}


export default Header;