import React from 'react';
import './AccordionHeader.scss';
import classNames from 'classnames';

interface Props {
    title: React.ReactNode;
    isClose: boolean;
    onClick: () => void;
}

const AccordionHeader: React.FC<Props> = props =>{
    return(
        <section
            className={classNames('AccordionHeader')}
            onClick={props.onClick}
            >
            <h5 className="AccordionHeader__title">{props.title}</h5>
        </section>
    );
};

export default AccordionHeader;
