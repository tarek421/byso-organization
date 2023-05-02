import React from "react";
import './Header.css';
import logo from '../../../image/logo.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const Header = () => {
    return (
        <div>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 5000000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div id='header' className="slider-1">
                        <div className="ovarly">
                            <div className="content">
                                <img className="logo" src={logo} alt="" />
                                <h3>Bangladesh</h3>
                                <h1>Youth Skills Development <span>Organisation</span></h1>
                                <p className="w-75 m-auto">Bangladesh Youth Skills Development Organisation is a students-based social welfare and skills development organization.  </p>
                                <button className='btn'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id='header' className="slider-2">
                        <div className="ovarly2">
                            <div className="content text-white">
                                <h1 className="text-white">BYSDO Corporate and Management Career Bootcamp 2023 </h1>
                                <p className="text-white w-75 m-auto">Program duration: May 19 to June 3, 2023 (3 weeks)
                                    Platform: Blended (classes will be held online and in-person)
                                    Registration deadline: April 8, 2023.

                                </p>
                                <button className='btn text-white border-white'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;