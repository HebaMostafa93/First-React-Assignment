import React from 'react'
import myImg from '../images/avataaars.svg'

export default function Home() {
  return (
<div className='home py-5 d-flex align-items-center justify-content-center'>
<div className=' text-center'>
        <img src={myImg} alt='homeImage' width={250}/>
        <h2 className='mainTitle text-uppercase fw-bold text-white mt-5'>START FRAMEWORK</h2>
        <div className='title-decoration d-flex align-items-center justify-content-center py-3'>
          <div className='title-line'></div>
          <i className='fa-solid fa-star text-white mx-3'></i>
          <div className='title-line'></div>
        </div>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>

  </div>
</div>


  )
}
