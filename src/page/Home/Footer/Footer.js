import React from 'react';
import './Footer.css';
import logo from '../../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id='footer' className='py-5 text-white text-start'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 m-auto">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                            <h5 className='display-7'>
                                <strong>VISIT US</strong>
                            </h5>
                            <p className='mbr-tag mbr-fonts-style display-4'><em>HEADQUARTERS</em></p>
                            <p className='display-4'>Science Faculty Road, University of Chittagong, Chittagong, Bangladesh</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div>
                            <h5 className='display-7'>
                                <strong>CONTACT US</strong>
                            </h5>
                            <p className='mbr-tag mbr-fonts-style display-4'><em>EMAIL & PHONE</em></p>
                            <p className='display-4'>info@bysdo.org <br /> teamhrmbysdo@gmail.com <br />
                                +8801860-841162</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className='social-media'>
                            <h5 className='display-7'>
                                <strong>SOCIAL MEDIA</strong>
                            </h5>
                            <p className='mbr-tag mbr-fonts-style display-4'><em>FOLLOW US</em></p>
                            <ul>
                                <li><a href="https://www.facebook.com/bysdoofficial" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li>
                                    <a href="https://www.linkedin.com/company/bysdoofficial" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/bysdoofficial" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/bysdoofficial" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer; <h2>This is footer</h2>