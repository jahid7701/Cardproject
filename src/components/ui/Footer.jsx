import React from 'react';
import Card from './Card';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";





const Footer = () => {
    return (<><div className='  w-full bg-white  p-10 flex flex-col lg:flex-row justify-center items-center'>
        <div className='flex flex-col h-[100px] justify-between items-center  lg:ml-10 '><h2 className='text-black '>Order Fries</h2> <div className='flex flex-row justify-center items-center  '><p className='ring-2 rounded-full text-black'><FaFacebook />
</p><p className='ring-2 rounded-full text-black ml-3 p-1'><FaTwitter />
</p><p className='ring-2 rounded-full text-black ml-2'><CiLinkedin />
</p><p className='ring-2 rounded-full text-black ml-3' ><FaInstagramSquare />
</p></div></div>
        <Card title='Services' name='Online Order' names='Pre-reservation' details='24/7 Services'/>
        <Card title='Quick Links' name='Restaurents' names='Pre-reservation' details='24/7 Services'/>
        <Card title='About' name='Our Story' names='Pre-reservation' details='24/7 Services'/>
        <Card title='Help' name='Contact' names='Pre-reservation' details='24/7 Services'/>
        
        </div></>);
}



export default Footer;