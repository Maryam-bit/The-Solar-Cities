import React from 'react'
import './about.scss'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import aboutImg from '../../assets/about-img4.jpg'
import Heading from '../../shared/heading/heading'
const About = () => {
    return (
        <div className="container-fluid about-container">
            <div className="row">
                <Heading text='Solar City in Pakistan' />

                <div className="col-md-4 img mt-4" style={{ textAlign: "center" }}>
                    <img width="300px" src={aboutImg} />
                    <span className="imgBorder"></span>
                </div>

                <div className="col-md-7 text mt-3 pt-3">
                    <p className="aboutme">
                        We work on solar energy system projects in all cities of Pakistan. Our work is guaranteed, our customers are happy with our
                        work, and our business is growing because of those customers.
                        We use good quality material, we use different materials depending on the place and area.
                        We use solar frame that does not rust, we use a double frame, this frame is protected from rust and does not
                        need to be painted.
                        Also we have good cable fireproof and high voltage SPD protection breaker.
                        In addition,We use grounding system to keep our system and home appliances safe from lightning or high voltage.
                        Our work is based on all the principles that work from the solar frame to the output power and we do not compromise on the
                        quality of work.
                    </p>
                    <br />
                    <div className="container-fluid icons-container" style={{ marginLeft: "-17px" }}>
                        <div className="row">
                            <div className="col-md-4 icon">
                                <img src={icon1} alt="icon1" />
                                <div>
                                    <p className="title">Great Experience </p>
                                    <span className="word">30 Years of experience</span>
                                </div>
                            </div>
                            <div className="col-md-4 icon">
                                <img src={icon2} alt="icon2" />
                                <div>
                                    <p className="title">Fast work and help </p>
                                    <span className="word">We are open 24/7</span>
                                </div>
                            </div>
                            <div className="col-md-4 icon">
                                <img src={icon3} alt="icon3" />
                                <div>
                                    <p className="title">Best Quality </p>
                                    <span className="word">we provide performant and quality work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default About