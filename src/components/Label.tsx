import React from "react";

interface Props {
    htmlFor?: string;
}

const Label: React.FC<Props> = props => {
    return (
        <label htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
};

export default Label;
