import React from 'react';

const Card = (props) => {
    return (<><div className='flex flex-col mt-[40px]  lg:m-10'>
        <p className='text-black  text-2xl lg:text-xl'>{props.title}</p>
        <p className='text-black'>{props.name}</p>
        <p className='text-black'>{props.names}</p>
        <p className='text-black'>{props.details}</p>
        
        </div></>);
}


export default Card;