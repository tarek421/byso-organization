import React from 'react';
import './OurContribution.css';

const OurContribution = () => {
    return (
        <div id='contribution'>
            <div className="container">
                <div className="text-start w-25 title">
                    <h3>Our</h3>
                    <h1>Contributions</h1>
                </div>
                <div className="px-5 mt-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="border">
                                <h2>1150+</h2>
                                <h3>Trained <span>Students</span></h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="border">
                                <h2>50+</h2>
                                <h3>training <span>Sessions</span></h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="border">
                                <h2>05</h2>
                                <h3>Workshops</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="border">
                                <h2>01</h2>
                                <h3>Course</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurContribution;