import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item className="img-size">
        <img
          className="d-block w-100 "
          src="https://royaljewelers.com/wp-content/uploads/2016/12/6-favorite-dive-watches-all-banner.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="/products">
            <Button className="banner-btn" variant="outline-secondary">
              Explore Now
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/494/596/16/1-frederique-constant-banner-wallpaper-preview.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Button className="banner-btn" variant="outline-secondary">
            Explore Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://anscommerce.s3.ap-south-1.amazonaws.com/live/image/catalog/brandstore/johnson/Information/service-center-5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Button className="banner-btn" variant="outline-secondary">
            Explore Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
