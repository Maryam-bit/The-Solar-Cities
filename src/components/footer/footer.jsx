import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-5 pb-0">
                <section classname='mb-4'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <h3>Opening Hours</h3>
                                <p>Monday - Sunday <br /> 10AM - 6PM  <br /> Friday <br /> off </p>
                            </div>
                            <div className="col-md-4">
                                <h3>Call us anytime</h3>
                                <p>03215561073 <br /> 03335135237</p>
                            </div>
                            <div className="col-md-4">
                                <h3>Email US</h3>
                                <p>shafiq0800@gmail.com</p>
                                <b>Address: </b><span> Shop No 3, Buraq plaza, street No 31, faisal Market F-7/1, Islamabad</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/ShafiqueEMS" role="button">
                        <i className="fa fa-facebook"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/muhammad-shafique-2nd-76bbb61a0/" role="button">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                solar energy system © 2021 Copyright. All Rights Reserved
            </div>
        </footer>
    )
}
export default Footer