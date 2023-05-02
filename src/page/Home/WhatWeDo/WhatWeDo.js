import React from 'react';
import './WhatWeDo.css';
import what_we_do from '../../../image/what-we-do.jpg';

const WhatWeDo = () => {
    return (
        <div id="what_we_do">
            <div className="container">
                <h1 className='text-white'>What we do</h1>

                <div className="row mt-5 gx-4 px-3 ">
                    <div className="col-sm-12 col-md-3 col-lg-3 mt-2">
                        <div className="card">
                            <img src="https://s35691.pcdn.co/wp-content/uploads/2016/03/iStock_000037379776_Medium.160328.jpg" className="card-img-top " alt="img" />
                            <div className="card-body">
                                <h4>Workshops</h4>
                                <p className="card-text">Bangladesh Youth Skills Development Organisation is a students-based social welfare and skills development organization.  </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoEL8TUE0oGBnYN_ujKczdJMiehLMTxpeZ2Vk9068l7SUfrtZPsD_gaO9h0F1vksPIyE&usqp=CAU" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h4>Courses</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="card">
                            <img src="https://www.quantumworkplace.com/hubfs/Marketing/Website/Blog/Blog%20Images/characteristics%20of%20high-performing%20teams.png" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h4>Training Sessions</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="card">
                            <img src={what_we_do} className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h4>Events</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;