import React from 'react'

export default function About() {
  return (
    <div className='about py-5 d-flex align-items-center justify-content-center '>
      <div className='w-75 py-5'>
      <div className='container'>
        <h2 className='mainTitle text-uppercase fw-bold text-white text-center mt-5'>ABOUT COMPONENT</h2>
        <div className='title-decoration d-flex align-items-center justify-content-center py-3'>
          <div className='title-line'></div>
          <i className='fa-solid fa-star text-white mx-3'></i>
          <div className='title-line'></div>
        </div>
        <div className="container">
          <div className="row  text-white">
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>

        </div>

      </div>
      </div>
    </div>
  )
}
