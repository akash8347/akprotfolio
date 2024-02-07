import React from "react";
import Slider from "react-slick";


function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="text">djfgkjgfjxhdbkjh</div>
        </div>
        <div>
          <div className="text">xjdgfjxbhfkjxbvn</div>
        </div>
        <div>
        <div className="text">vijay rupani</div>
          {/* <img src="/akashvgohillogo.png" width={100} height={100} /> */}
        </div>
        <div>
            <div className="text">test test</div>
          {/* <img src="/akashvgohillogo.png" width={100} height={100} /> */}
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
