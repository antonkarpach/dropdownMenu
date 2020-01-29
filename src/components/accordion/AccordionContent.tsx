import React from "react";
import './Accordion.scss';
import classNames from 'classnames';

interface Props {
    isClose: boolean;
}

const AccordionContent: React.FC<Props> = props => {
    return (
        <div
            className={classNames('AccordionContent', {
                'AccordionContent--close': props.isClose,
            })}
        >
            {props.children}
        </div>
    );
};

export default AccordionContent;
