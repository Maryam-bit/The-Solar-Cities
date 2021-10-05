import React from 'react'
import './whyus.scss'
import fullElectricity from '../../assets/24-7-electricity.png'
import costEffective from '../../assets/cost-effective.png'
import noBill from '../../assets/no-bill.png'
import saveMoney from '../../assets/save-money.png'
import Heading from '../../shared/heading/heading'

const Whyus = () => {
    return (
        <div className="whyus-container container">
            <Heading text='Making Tomorrow Different Today' />
            <div className="row">
                <div className="col-md-4">
                    <h6>Making Tomorrow Different Today</h6>
                    <h2>Energize Society With Sustainable And Reliable Energy Systems!</h2>
                    <p>
                        The solar system is a new invention. Installing a solar system protects us from polution and noice
                        By installing a solar system, we are protected from having more or less electricity.
                        Installing a solar system protects electrical appliances at home, because solar energy gives us equal power.
                    </p>
                </div>
                <div className="col-md-7">
                    <div className="container-fluid icons-container">
                        <div className="row">
                            <div className="col-md-6 icon">
                                <img src={fullElectricity} alt="icon1" />
                                <div>
                                    <p className="title">24/7 Electricity </p>
                                    <span className="word">Get Rid of Load Shedding. Enjoy Continuous Electricity source </span>
                                </div>
                            </div>
                            <div className="col-md-6 icon">
                                <img src={costEffective} alt="icon2" />
                                <div>
                                    <p className="title">Cost Effective </p>
                                    <span className="word">Solar Solutions are Cost Effective and Requires minimal maintenance</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 icon">
                                <img src={saveMoney} alt="icon3" />
                                <div>
                                    <p className="title">Save Your Money</p>
                                    <span className="word">Save money on utilities or increase the value of your home by installing solar panels as a great option.</span>
                                </div>
                            </div>
                            <div className="col-md-6 icon">
                                <img src={noBill} alt="icon3" />
                                <div>
                                    <p className="title">No Bill</p>
                                    <span className="word">Get Rid of Every Day Increasing Electricity Prices.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus;