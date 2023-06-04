import React, { useState } from 'react';
import './MemberShip.css';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUserAlt, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const MemberShip = () => {

    const [active, setActive] = useState(false);

    const handleSignUpClick = event => {
        setActive(true)
    }

    const handleSignInClick = event => {
        setActive(false)
    }

    return (
        <div id=''>
            <div className={active ? 'member-ship sign-up-mode' : 'member-ship'}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faUserAlt} />
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <Link className="social-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                                <Link href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </Link>
                                <Link href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </Link>
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faUserAlt} />
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <Link className="social-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                                <Link href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </Link>
                                <Link href="#" className="social-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <img src={logo} className="image" alt="a" />
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button onClick={handleSignUpClick} className="btn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </div>

                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <img src={logo} className="image" alt="" />
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">
                                Sign in
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberShip;