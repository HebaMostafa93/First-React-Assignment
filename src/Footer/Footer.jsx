import React from 'react'

export default function Footer() {
  return <>
<footer>
<section id='upperFooter'>
    <div className="container py-5">
    <div className="row text-white text-center py-5">
        <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>

        <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <div className="social-icons ">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-solid fa-globe"></i>
            </div>

        </div>

        <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
</div>
  </section>
  <section id='bottomFooter'>
<p className='py-4 text-white text-center mb-0'>Copyright © Your Website 2021</p>
</section>
</footer>
  </>
}
