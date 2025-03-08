import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const ImageCarousel = ({images}) => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
      // screenSize?.width < 768 ? 1 : screenSize?.width < 1024 ? 2 : screenSize?.width > 1024 ? 3 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={style.slickNext} onClick={onClick}>
        <RightOutlined />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={style.slickPrev} onClick={onClick}>
        <LeftOutlined />
      </div>
    );
  }

  return (
    <div className={style.SliderMain}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className={style.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
