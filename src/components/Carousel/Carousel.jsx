import Slider from "react-slick";
import './carousel.scss';

function Arrow({className, style, onClick}) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "hsl(216, 19%, 26%)", borderRadius: "60%" }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {

  var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      // autoplay: true,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  return (
    <>
    <h2 className="carousel__header">Categories</h2>
        <Slider {...settings} className="slider">
         <div>
            <div className="electronics">
            <h3 className="carousal__header-inner">
              Electronics
            </h3>
            <p className="carousel__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, tempora.</p>
            </div>
         </div>
          
          <div>
          <div className="jewelery">
            <h3 className="carousal__header-inner">
              Jewelry
            </h3>
            <p className="carousel__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, tempora.</p>
          </div>
          </div>

          <div> 
          <div className="men-clothing">
            <h3 className="carousal__header-inner">
              Men's Clothing
            </h3>
            <p className="carousel__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, tempora.</p>
          </div>
          </div>

          <div>  
          <div className="women-clothing">
            <h3 className="carousal__header-inner">
              Women's Clothing
            </h3>
            <p className="carousel__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, tempora.</p>
            </div>
          </div>
        </Slider>

  </>
  )
}

export default Carousel
