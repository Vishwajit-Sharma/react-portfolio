import React from 'react'
import Heading from './Heading'
import imageBg from '../assets/shape-bg.png'
import Carousel from 'react-grid-carousel'


export default function Testimonial() {
    const responsive = [
        {
            breakpoint: 4000,
            cols: 4,
            rows: 1,
            gap: '5%',
            loop: true,
            autoplay: 3000
        },
        {
          breakpoint: 2000,
          cols: 3,
          rows: 1,
          gap: '5%',
          loop: true,
          autoplay: 3000
        },
        {
            breakpoint: 992,
            cols: 2,
            rows: 1,
            gap: '5%',
            loop: true,
            autoplay: 3000
          },
          {
            breakpoint: 576,
            cols: 1,
            rows: 1,
            loop: true,
            autoplay: 3000
          },
      ]


  return (
    <div>
        <Heading main="Testimonials" sub="What My Clients Say" />
        <div id='testimonial' className="row">
            <div className="test-outer">
                <div className="testimonial-container">
                    
                </div>
                <div className="bg-design"><img src={imageBg} alt="" /></div>
                <div className="carousel-div">
                    <Carousel responsiveLayout={responsive} hideArrow={true} >
            <Carousel.Item>
              <div className="testimonial-number">
                <p className="testimonial"><span>"</span>This guy is incredibly awesome. he has made an Ecommerce website for me which is awesome. I love his work and hope to collaborate with him in future too. <span>"</span> </p>
                <p className="star">&#9733; &#9733; &#9733; &#9733;</p>
                <p className="test-name">Vishwajit Sharma</p>
                <small> -ABC Company</small>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-number">
                <p className="testimonial"><span>"</span>This guy is incredibly awesome. he has made an Ecommerce website for me which is awesome. I love his work and hope to collaborate with him in future too. <span>"</span> </p>
                <p className="star">&#9733; &#9733; &#9733; &#9733;</p>
                <p className="test-name">Vishwajit Sharma</p>
                <small> -ABC Company</small>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-number">
                <p className="testimonial"><span>"</span>This guy is incredibly awesome. he has made an Ecommerce website for me which is awesome. I love his work and hope to collaborate with him in future too. <span>"</span> </p>
                <p className="star">&#9733; &#9733; &#9733; &#9733;</p>
                <p className="test-name">Vishwajit Sharma</p>
                <small> -ABC Company</small>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-number">
                <p className="testimonial"><span>"</span>This guy is incredibly awesome. he has made an Ecommerce website for me which is awesome. I love his work and hope to collaborate with him in future too. <span>"</span> </p>
                <p className="star">&#9733; &#9733; &#9733; &#9733;</p>
                <p className="test-name">Vishwajit Sharma</p>
                <small> -ABC Company</small>
              </div>
            </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
       
      
      
    </div>
  )
}
