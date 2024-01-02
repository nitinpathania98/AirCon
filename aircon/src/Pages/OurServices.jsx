import React from 'react'

function OurServices() {
    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <h1 className="display-6 mb-5">We Provide professional Heating &amp; Cooling Services</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <img className="img-fluid" src="img/service-1.jpg" alt="" />
                                <div className="d-flex align-items-center bg-light">
                                    <div className="service-icon flex-shrink-0 bg-primary">
                                        <img className="img-fluid" src="img/icon/icon-01-light.png" alt="" />
                                    </div>
                                    <a className="h4 mx-4 mb-0" href>AC Installation</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <img className="img-fluid" src="img/service-2.jpg" alt="" />
                                <div className="d-flex align-items-center bg-light">
                                    <div className="service-icon flex-shrink-0 bg-primary">
                                        <img className="img-fluid" src="img/icon/icon-02-light.png" alt="" />
                                    </div>
                                    <a className="h4 mx-4 mb-0" href>Cooling Services</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <img className="img-fluid" src="img/service-3.jpg" alt="" />
                                <div className="d-flex align-items-center bg-light">
                                    <div className="service-icon flex-shrink-0 bg-primary">
                                        <img className="img-fluid" src="img/icon/icon-03-light.png" alt="" />
                                    </div>
                                    <a className="h4 mx-4 mb-0" href>Heating Services</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <img className="img-fluid" src="img/service-4.jpg" alt="" />
                                <div className="d-flex align-items-center bg-light">
                                    <div className="service-icon flex-shrink-0 bg-primary">
                                        <img className="img-fluid" src="img/icon/icon-04-light.png" alt="" />
                                    </div>
                                    <a className="h4 mx-4 mb-0" href>Maintenance &amp; Repair</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <img className="img-fluid" src="img/service-5.jpg" alt="" />
                                <div className="d-flex align-items-center bg-light">
                                    <div className="service-icon flex-shrink-0 bg-primary">
                                        <img className="img-fluid" src="img/icon/icon-05-light.png" alt="" />
                                    </div>
                                    <a className="h4 mx-4 mb-0" href>Indoor Air Quality</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <img className="img-fluid" src="img/service-6.jpg" alt="" />
                                <div className="d-flex align-items-center bg-light">
                                    <div className="service-icon flex-shrink-0 bg-primary">
                                        <img className="img-fluid" src="img/icon/icon-06-light.png" alt="" />
                                    </div>
                                    <a className="h4 mx-4 mb-0" href>Annual Inspections</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    )
}

export default OurServices