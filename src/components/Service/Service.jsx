import React from 'react';
import './../../assets/css/style.css';
import ecom from './../../assets/images/ecommerce.png';
import design from './../../assets/images/design.png';
import web from './../../assets/images/web.png';

const Service = () => {
  return (
    <>
    <div className="container text-center">
        <h1 className='heading'>My Services</h1>
        <div className="underline"></div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="service-item">
                    <img src={ecom} alt="" />
                    <h2>Ecommerce</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam! Earum, suscipit!</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item">
                    <img src={design} alt="" />
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam! Earum, suscipit!</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item">
                    <img src={web} alt="" />
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam! Earum, suscipit!</p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Service;