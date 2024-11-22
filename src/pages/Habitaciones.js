import React from "react";
import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <div className="container mx-auto relative ">
        <div className="mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-16">
          <BookForm />
        </div>
      </div>
      <Rooms />
    </>
  );
};

export default Home;
