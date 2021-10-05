import React from 'react'
import './plans.scss'
import serviceIcon1 from '../../assets/services-icon1.png'
import serviceIcon2 from '../../assets/services-icon2.png'
import serviceIcon3 from '../../assets/services-icon3.png'
import Heading from '../../shared/heading/heading'

const Plans = () => {
    return (
        <div className="plans container-fluid">
            <Heading text='Our Plans' />
            <p className='text-center'>Best Plans and offers or you.</p>
            <div className="container services-child">
                <div class="row">
                    <div className="col-md-4">
                        <div className="card p-3 m-3 mx-auto">
                            <img className="services-icon" src={serviceIcon1} alt="" />
                            <h2>Residential ongrid system</h2>
                            <p>T-R one solar panel</p>
                            <p>Mounting structure</p>
                            <p>Safety Protection</p>
                            <p>Cable standard</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 m-3 mx-auto">
                            <img className="services-icon" src={serviceIcon2} alt="" />
                            <h2>Industrial ongrid system</h2>
                            <p>T-R one solar panel</p>
                            <p>Mounting structure</p>
                            <p>Safety Protection</p>
                            <p>Cable standard</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 m-3 mx-auto errCard">
                            <img className="services-icon" src={serviceIcon3} alt="" />
                            <h2>Long Backup</h2>
                            <p>High voltage battery</p>
                            <p>High voltage inverter</p>
                            <p>Lifetime warrenty</p>
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    )
}

export default Plans