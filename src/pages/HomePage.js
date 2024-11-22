import React from "react";
import img1 from "../assets/img/heroSlider/6.jpg";
import img2 from "../assets/img/heroSlider/7.jpg";
import img3 from "../assets/img/heroSlider/8.jpg";
import Navegacion from "../components/Navegacion";

const HomePage = () => {
  return (
    <div className="relative h-screen">
 <div className="relative h-screen">
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators z-15">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={img1}
          className="h-screen w-full object-cover object-center"
          alt="..."
        />
        <div className="carousel-caption-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>
            Some representative placeholder content for the first slide.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src={img2}
          className="h-screen w-full object-cover object-center"
          alt="..."
        />
        <div className="carousel-caption-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>
            Some representative placeholder content for the second slide.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src={img3}
          className="h-screen w-full object-cover object-center"
          alt="..."
        />
        <div className="carousel-caption-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>
            Some representative placeholder content for the third slide.
          </p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
      style={{ zIndex: "1" }}
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
      style={{ zIndex: "1" }}
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <div className="absolute inset-0 flex items-center justify-center ">
    <p className="text-center text-white text-7xl font-bold font-primary ">
      El Horizonte del Llano 
    </p>
  </div>
</div>
  <div className="absolute top-0 left-0 right-0 z-50">
    <Navegacion />
  </div>
</div>
  );
};
export default HomePage;
