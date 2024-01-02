import React from 'react'

function FreeQuote() {
    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Free Quote</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Free Quote</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Quote Start */}
            <div className="container-fluid overflow-hidden px-lg-0" style={{ margin: '6rem 0' }}>
                <div className="container quote px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 quote-text" data-parallax="scroll" data-image-src="img/carousel-1.jpg">
                            <div className="h-100 px-4 px-sm-5 ps-lg-0 wow fadeIn" data-wow-delay="0.1s">
                                <h1 className="text-white mb-4">For Individuals And Organisations</h1>
                                <p className="text-light mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a href className="align-self-start btn btn-primary py-3 px-5">More Details</a>
                            </div>
                        </div>
                        <div className="col-lg-6 quote-form" data-parallax="scroll" data-image-src="img/carousel-2.jpg">
                            <div className="h-100 px-4 px-sm-5 pe-lg-0 wow fadeIn" data-wow-delay="0.5s">
                                <div className="bg-white p-4 p-sm-5">
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="gname" placeholder="Gurdian Name" />
                                                <label htmlFor="gname">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="gmail" placeholder="Gurdian Email" />
                                                <label htmlFor="gmail">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="cname" placeholder="Child Name" />
                                                <label htmlFor="cname">Your Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="cage" placeholder="Child Age" />
                                                <label htmlFor="cage">Service Type</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '80px' }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary py-3 px-5" type="submit">Get A Free Quote</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quote End */}
        </>
    )
}

export default FreeQuote