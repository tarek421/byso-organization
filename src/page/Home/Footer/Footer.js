import React from 'react';
import './Footer.css';
import logo from '../../../image/logo.png';

const Footer = () => {
    return (
        <div id='footer' className='py-5 text-white text-start'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                            <h5>VISIT US</h5>
                            <h6>HEADQUARTERS</h6>
                            <p>Level 11 & 12, Medona Tower
                                28 Mohakhali C/A, Dhaka 1213</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                            <h5>CONTACT US</h5>
                            <h6>EMAIL & PHONE</h6>
                            <p>info@bylc.org
                                +880 28833519</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                            <h5>SOCIAL MEDIA</h5>
                            <h6>FOLLOW US</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer; <h2>This is footer</h2>