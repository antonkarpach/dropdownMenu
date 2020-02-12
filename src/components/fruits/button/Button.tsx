import React, { MouseEvent} from 'react';
import './Button.scss';

interface Props {
    value: string;
    onClick: (event: MouseEvent) => void;
}

const Button: React.FC<Props> = props => {
    return (
        <button onClick={props.onClick} value={props.value} className="Button">{props.children}</button>
    );
};
export default Button;
