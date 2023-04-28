import React from "react";
import './Header.css';
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
                    delay: 5000,
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
                                <h1>Building Bridges through Leadership Training</h1>
                                <p>Program duration: May 19 to June 3, 2023 (3 weeks)
                                    Platform: Blended (classes will be held online and in-person)
                                    Registration deadline: April 8, 2023.</p>
                                <button className='btn'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id='header' className="slider-2">
                        <div className="ovarly">
                            <div className="content">
                                <h1>BYSDO Corporate and Management Career Bootcamp 2023 </h1>
                                <p>Program duration: May 19 to June 3, 2023 (3 weeks)
                                    Platform: Blended (classes will be held online and in-person)
                                    Registration deadline: April 8, 2023.

                                </p>
                                <button className='btn'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;