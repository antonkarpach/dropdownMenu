import React from 'react';
import './AccordionHeader.scss';
import classNames from 'classnames';
import AccordionActionIcon from "./AccordionActionIcon";

interface Props {
    title: React.ReactNode;
    isClose: boolean;
    onClick: () => void;
}

const AccordionHeader: React.FC<Props> = props => {
    return (
        <section
            className={classNames('AccordionHeader')}
            onClick={props.onClick}
        >
            <div className="AccordionHeader__title">{props.title}</div>
            <AccordionActionIcon isClose={props.isClose}/>
        </section>
    );
};

export default AccordionHeader;
