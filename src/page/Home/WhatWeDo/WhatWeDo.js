import React from 'react';
import './WhatWeDo.css';
import { WhatWeDoData } from '../../../data/WhatWeDoData';

const WhatWeDo = () => {
    return (
        <div id="what_we_do">
            <div className="container">
                <h1 className='text-white'>What we do</h1>

                <div className="row mt-5 gx-4 px-3 ">

                    {
                        WhatWeDoData.map(item => <div className="col-sm-12 col-md-4 col-lg-3 mt-2">
                            <div className="card">
                                <img src={item.image} className="card-img-top " alt="img" />
                                <div className="card-body">
                                    <h4>{item.title}</h4>
                                    <p className="card-text">{item.content}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;