import React from 'react';
import Erro from "../../../images/Error.jpg"
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home';

function Error() {
    const navigate = useNavigate();
    return (
        <>
         <div className="container">
            <button className='bg-white py-[12px] px-[12px] mb-[10px] rounded' onClick={()=>navigate (-1)}><i className='bx bx-arrow-back'></i>Back</button>
            <img src={Erro} alt="Error" className='w-full h-[600px]' />
         </div>   
        </>
    );
}

export default Error;