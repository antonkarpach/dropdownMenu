import React from "react";

interface Props {
    title: string;
    htmlFor?: string;
    onRadioClick?: () => void;
}

const Label: React.FC<Props> = props => {
    return (
        <label onClick={props.onRadioClick} htmlFor={props.htmlFor}>
            {props.title}
        </label>
    );
};

export default Label;
