import React from "react";
import { Link } from "react-router-dom";

export enum ButtonTypeEnum {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}

interface ButtonProps {
    type: ButtonTypeEnum;
    text: string;
    emphasis?: string;
    callback?: () => any;
    linkTo?: string;
}

const Button: React.FC<ButtonProps> = ({
    type,
    text,
    emphasis,
    callback,
    linkTo
}: ButtonProps) => {
    const chooseStyle = (): object => {
        const borderRadius = "27px"
        const padding = "20px 60px"
        let style: {[key: string]: any} = {
            padding: padding, 
            borderRadius: borderRadius,
        }
        if (emphasis) {
            style["fontWeight"] = emphasis
        }
        if (type === ButtonTypeEnum.primary) {
            return { ...style, backgroundColor: "#5C1F37", border: "1px solid #5C1F37", color: "white"};
        } else if (type === ButtonTypeEnum.secondary) {
            return { ...style, backgroundColor: "transparent", border: "2px solid black", color: "black"};
        } else if (type === ButtonTypeEnum.tertiary) {
            return { ...style, backgroundColor: "transparent", border: "2px solid black", color: "black"}
        }
        return style
    }

    const getButtonComponent = () => {
        return (
            <button style={chooseStyle()} onClick={callback}>{text}</button>
        )
    }

    return (
        <>
            {linkTo ? <Link to={linkTo}>{getButtonComponent()}</Link> : getButtonComponent()}
        </>
    )


};

export default Button;