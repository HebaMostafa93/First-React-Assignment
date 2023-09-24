import React from 'react'

export default function Contact() {
  return (
    <div className='contact py-5 d-flex align-items-center justify-content-center '>
      <div className='container'>
      <h2 className='mainTitle2 text-uppercase fw-bold text-center'>CONATCT SECTION</h2>
        <div className='title-decoration2 d-flex align-items-center justify-content-center py-3'>
          <div className='title-line2'></div>
          <i className='fa-solid fa-star mx-3'></i>
          <div className='title-line2'></div>
        </div>
<div className='d-flex align-items-center justify-content-center'>
<div className='w-50'>
        <form  >
          <input className='form-control border-0 border-bottom py-3 position-relative mt-4' id='userName' name='userName' type='text' placeholder='userName '/>

          <input className='form-control border-0 border-bottom py-3 position-relative mt-4' id='userAge' name='userAge' type='number' placeholder='userAge '/>

          <input className='form-control border-0 border-bottom py-3 position-relative mt-4' id='userEmail' name='userEmail' type='email' placeholder='userEmail '/>

          <input className='form-control border-0 border-bottom py-3 position-relative mt-4' id='userPassword' name='userPassword' type='text' placeholder='userPassword '/>

          <button type='button' className='btn send-btn mt-4 text-white'>Send Message</button>

        </form>
</div>
</div>


      </div>
    </div>
  )
}
