import React from 'react'
import img1 from '../images/poert1.png'
import img2 from '../images/port2.png'
import img3 from '../images/port3.png'

export default function Portfolio() {

  return (
    <div className='portfolio py-5 d-flex align-items-center justify-content-center '>
      <div className='container'>
        <h2 className='mainTitle2 text-uppercase fw-bold text-center'>PORTFOLIO COMPONENT</h2>
        <div className='title-decoration2 d-flex align-items-center justify-content-center py-3'>
          <div className='title-line2'></div>
          <i className='fa-solid fa-star mx-3'></i>
          <div className='title-line2'></div>
        </div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-4">
              <div className="item position-relative overflow-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={img1} className='w-100 rounded-3' />
                <div className="layer position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="item position-relative overflow-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img src={img2} className='w-100 rounded-3' />
                <div className="layer position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="item position-relative overflow-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <img src={img3} className='w-100 rounded-3' />
                <div className="layer position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="item position-relative overflow-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={img1} className='w-100 rounded-3' />
                <div className="layer position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="item position-relative overflow-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img src={img2} className='w-100 rounded-3' />
                <div className="layer position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="item position-relative overflow-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <img src={img3} className='w-100 rounded-3' />
                <div className="layer position-absolute rounded-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body p-0">
                <img src={img1} className='w-100' />
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body p-0">
                <img src={img2} className='w-100' />
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body p-0">
                <img src={img3} className='w-100' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
