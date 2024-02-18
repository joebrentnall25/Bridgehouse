import React from "react";
import "./Home.css"
import HomeHeader from "./HomeHeader";
import MenuPreview from "../../components/MenuPreview";
import AboutUs from "../../components/AboutUs";

const Home: React.FC = () => {
    return (
      <div>
        <HomeHeader />
        <AboutUs />
        <MenuPreview />        
      </div>
    );
  };
  
export default Home;