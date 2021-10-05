import React from 'react'
import Heading from '../../shared/heading/heading'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import './portfolio.scss'
const Portfolio = () => {
    return (
        <div className="mt-5 pt-5 mb-5 pb-5 portfolio container">
            <br /><br /><br />
            <Heading text="Visit Our Project Portfolio" />
            <div className="card-container">
                <div className="row">

                    <div className="col-md-4">
                        <div className="card-parent">
                                <img className="card-img-top" src={project1} alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">10kw ongrid + offgrid solar system in B17, Islamabad.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-parent">
                                <img className="card-img-top" src={project2} alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">4.5kw offgrid solar system in Shaheen town, Islamabad.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-parent">
                                <img className="card-img-top" src={project3} alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">9kw ongrid + offgrid solar system in Mashid oullah G-6/1-2 , Islamabad.</p>
                                </div>
                            </div>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    )
}
export default Portfolio