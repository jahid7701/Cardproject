import React from 'react';
import Button from './Button';
import { PiArrowSquareRightBold } from "react-icons/pi";


const Price = (props) => {
    return (<><div className='flex flex-col  relative justify-around p-10 bg-white m-5 rounded-sm'>
        <div className='text-black'>
        <h2 className='text-black'>{props.title}</h2>
        <h3 className='text-black'>Cancel without oblication</h3>
        <h2 className='text-orange'>${props.price}/Month</h2>
        </div>
      
        <div className='mt-4 '>
      <p className='text-black flex'><PiArrowSquareRightBold className='tik' />
{props.pone}</p>
      <p className='text-black flex'><PiArrowSquareRightBold className='tik' />
{props.ptwo}</p>
      <p className='text-black flex'><PiArrowSquareRightBold className='tik' />
{props.pthree}</p>
      <p className='text-black flex'><PiArrowSquareRightBold className='tik'/>
{props.pfour}</p>
      <p className='text-black flex'><PiArrowSquareRightBold className='tik' />
{props.pfive}</p>

        </div>
        <div className='mt-4'>
<p className='text-black'>Encluding transition cost Mobile</p>
<div className='absolute bottom-[-16px] left-[80px]'>
<Button/></div>
        </div>
        
        </div></>);
}



export default Price;