import React from "react";

export enum ButtonTypeEnum {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}

interface ButtonProps {
    type: ButtonTypeEnum;
    text: string;
}

const Button: React.FC<ButtonProps> = ({
    type,
    text
}: ButtonProps) => {
    if (type === ButtonTypeEnum.primary) {
        return <button style={{ backgroundColor: "transparent", padding: "10px 20px", borderRadius: "10px", border: "1px solid black" }}>{text}</button>
    }
    return <button>Error invalid button type</button>

};
  
export default Button;