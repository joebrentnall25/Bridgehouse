import React from "react";

const MenuPreview: React.FC = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", margin: "5rem" }} >
        <h3>Our Menu</h3>
        <p style={{ wordWrap: "normal", width: "150px" }}>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Leo at pharetra nisi, et ut. Pretium lectus.</p>
        <div style={{ display: "flex" }}>
            <div>
                <img src="" alt="" />
                <p>DRINKS</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>BREAKFAST</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>BRUNCH</p>
            </div>
        </div>
      </div>
    );
  };
  
export default MenuPreview;