import React from 'react'

function Features() {
    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Features</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Features</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Features Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-6 mb-5">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="d-flex mb-5">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: '90px', height: '90px' }}>
                                    <img className="img-fluid" src="img/icon/icon-08-light.png" alt="" />
                                </div>
                                <div className="ms-4">
                                    <h5 className="mb-3">Trusted Service Center</h5>
                                    <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</span>
                                </div>
                            </div>
                            <div className="d-flex mb-5">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: '90px', height: '90px' }}>
                                    <img className="img-fluid" src="img/icon/icon-10-light.png" alt="" />
                                </div>
                                <div className="ms-4">
                                    <h5 className="mb-3">Reasonable Price</h5>
                                    <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</span>
                                </div>
                            </div>
                            <div className="d-flex mb-0">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle" style={{ width: '90px', height: '90px' }}>
                                    <img className="img-fluid" src="img/icon/icon-06-light.png" alt="" />
                                </div>
                                <div className="ms-4">
                                    <h5 className="mb-3">24/7 Supports</h5>
                                    <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative rounded overflow-hidden h-100" style={{ minHeight: '400px' }}>
                                <img className="position-absolute w-100 h-100" src="img/feature.jpg" alt="" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
        </>
    )
}

export default Features