import React from 'react'
import Carousel from '../Components/Carousel'

function Testimonial() {
    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Testimonial</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Testimonial Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <h1 className="display-6 mb-5">What They Say About Our Services</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="testimonial-left h-100">
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-1.jpg" alt="" />
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-2.jpg" alt="" />
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <Carousel/>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="testimonial-right h-100">
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-1.jpg" alt="" />
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-2.jpg" alt="" />
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
        </>
    )
}

export default Testimonial