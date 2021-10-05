import React from 'react'
import './services.scss'
import serviceIcon1 from '../../assets/services-icon1.png'
import serviceIcon2 from '../../assets/services-icon2.png'
import serviceIcon3 from '../../assets/services-icon3.png'
import Heading from '../../shared/heading/heading'

const Services = () => {
    return (
        <div className="services-container pb-5 mb-5 container-fluid">
            <Heading text='Our Services Include' />
            <p className='text-center'>How can we help you?</p>
            <div className="container services-child">
                <div class="row">
                    <div className="col-md-6">
                        <div className="card p-3 m-3 mx-auto">
                            <img className="services-icon" src={serviceIcon1} alt="" />
                            <span>Commercial Solar System ONGRID + OFFGRID</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-3 m-3 mx-auto">
                            <img className="services-icon" src={serviceIcon2} alt="" />
                            <span>Industrial Net metering system</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div className="col-md-6">
                        <div className="card p-3 m-3 mx-auto">
                            <img className="services-icon" src={serviceIcon3} alt="" />
                            <span>High voltage Battery Solar long backup solution</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-3 m-3 mx-auto">
                            <img className="services-icon" src={serviceIcon1} alt="" />
                            <span>Residential solar system ONGRID + OFFGRID</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;