import React from 'react'
import logo from '../images/logo.jpg'


const Footer = () => {
  return (
    <>
      {/* <!-- footer start --> */}
      <footer className="py-5 bg-dark">
        <div className='container px-5'>
          <div className="row text-white">
            <div className='foo-1 col-lg-4 col-md-6 col-12 mb-3'>
              <h3 className='d-flex align-items-center fw-bold mb-3'><img src={logo} width='40px' className='me-3' />Bira Ventures Pvt. Ltd</h3>
              <ul className="navbar-nav flex-column">
                <a><i className='bi bi-geo-alt'></i> MIG B-149,HH Colony,Near Patel Park,Ranchi,Jharkhand,834002</a>
                <a href='https://wa.me/+622081333570925'><i className='bi bi-whatsapp'></i> +91 xxx-xxxx-xxx</a>
                <a><i className='bi bi-envelope'></i> steven.sansit@gmail.com</a>
              </ul>
            </div>
            <div className='foo-2 offset-lg-1 col-lg-4 col-md-6 col-12 mb-3'>
              <h5>Quick Links</h5>
              <ul className="navbar-nav flex-column" style={{ fontSize: '0.9em' }}>
                <a className="nav-link p-0 mb-2" href="#">Home</a>
                <a className="nav-link p-0 mb-2" href="#">Services</a>
                <a className="nav-link p-0 mb-2" href="#">Contact Us</a>
                <a className="nav-link p-0 mb-2" href="#">About Us</a>
              </ul>
            </div>
            <div className='foo-3 col-lg-3 col-md-6 col-12 mb-3'>
              <h5>Sosial Media Kami</h5>
              <a href='https://www.instagram.com/sans_it_/' target='_blank'><i className='bi bi-instagram fs-3 me-3'></i></a>
              <a href='https://www.facebook.com/Steven.SANS.IT/' target='_blank'><i className='bi bi-facebook fs-3'></i></a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer end --> */}


    </>
  )
}

export default Footer
