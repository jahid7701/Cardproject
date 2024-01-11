'use client'

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const Styleguide = () => {
    return <><div className='flex flex-col gap-y-4 p-20 bg-hasan bg-cover bg-no-repeat'>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
<p>
My name is Jahid Hasan.My name is Jahid Hasan.My name is Jahid Hasan.My name is Jahid Hasan.My name is Jahid Hasan.


</p>

        
        
        
        </div>
        <div className='bg-black p-20 flex flex-col gap-y-4'><Link href={'/'}>Link</Link>
        {/* button */}
  <button className='btn btn-orange'>Button 1</button>
  <button className='btn btn-orange'>Button 2</button>
  <button className='btn btn-gray'>Button 3</button>
  <button className='btn btn-pink'>Button 4</button>
  <div>
<label htmlFor='firstname' >First Name</label>
<input type='text' id='firstname'/>


  </div>
  <div>
<label htmlFor='lastname' >Last Name</label>
<input type='text' id='lasttname'/>


  </div>
  {/* calender */}
 <div>
    
    <label>Date</label>
    <input type='date'/></div>
           {/* select */}
           <div>
            <select className='h-[62px] w-full text-orange px-6 flex disabled:opacity-50 focus:outline-none bg-white/5'>
                <option>Apple</option>
                <option>Orange</option>
                <option>Mango</option>
            </select>
           </div>
          
        </div></>;
}

export default Styleguide;