import React from "react";
import Button, { ButtonTypeEnum } from "./Button";

const AboutUs: React.FC = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", margin: "5rem"}}>
        <p style={{ wordWrap: "normal", width: "250px" }}>Bridgehouse Lorem ipsum random words to make something that sounds relatively decent. Ambergate.</p>
        <Button type={ButtonTypeEnum.primary} text="ABOUT US"/>
      </div>
    );
  };
  
export default AboutUs;