import React from 'react'
import OwlCarousel from 'react-owl-carousel'

function Carousel() {
    var settings = {
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]

    };
    return (
        <>
            <OwlCarousel className='owl-carousel testimonial-carousel' loop margin={10} nav {...settings}>
                <div class='testimonial-item text-center'>
                    <img className="img-fluid mx-auto mb-4" src="img/testimonial-1.jpg" alt="" />
                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                    <h5>Client Name</h5>
                    <span>Profession</span>
                </div>
                <div class='testimonial-item text-center'>
                    <img className="img-fluid mx-auto mb-4" src="img/testimonial-2.jpg" alt="" />
                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                    <h5>Client Name</h5>
                    <span>Profession</span>
                </div>
                <div class='testimonial-item text-center'>
                    <img className="img-fluid mx-auto mb-4" src="img/testimonial-3.jpg" alt="" />
                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                    <h5>Client Name</h5>
                    <span>Profession</span>
                </div>
            </OwlCarousel>;
        </>
    )
}

export default Carousel