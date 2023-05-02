import React, { useState } from 'react';
import { CountUp } from 'use-count-up';
import './OurContribution.css';
import VisibilitySensor from "react-visibility-sensor";

const OurContribution = () => {
    const [focus, setFocus] = useState(false);

    return (
        <div id='contribution'>
            <div className="container">
                <div className="text-start title">
                    <h3>Our</h3>
                    <h1>Contributions</h1>
                </div>
                <div className="px-5 mt-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="border">
                                <h2><CountUp isCounting end={1150} duration={5} />+</h2>
                                <h3>Trained <span>Students</span></h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="border">
                                <h2><CountUp isCounting end={50} duration={3.2} />+</h2>
                                <h3>training <span>Sessions</span></h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="border">
                                <h2><CountUp isCounting end={5} duration={0.5} /></h2>
                                <h3>Workshops</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="border">
                                <h2><CountUp isCounting end={1} duration={0.2} /></h2>
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