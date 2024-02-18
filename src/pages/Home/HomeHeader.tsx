import React from "react";

const HomeHeader: React.FC = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <h1 style={{ margin: "2.5px 0px 2.5px 0px" }}>Bridgehouse</h1>
        <h2 style={{ margin: "2.5px 0px 2.5px 0px" }}>Ambergate</h2>
        <ul>
            <li>Home</li>
            <li>Menus</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <h3>Welcome</h3>
      </div>
    );
  };

export default HomeHeader;