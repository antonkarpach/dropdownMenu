import React, {useCallback, useState} from "react";
import './Accordion.scss';
import classNames from 'classnames';
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

export interface AccordionProps {
    title: React.ReactNode;
    isClose?: boolean;
    classNames?: string;
    onHeaderClick?: (isAvailable: boolean) => void;
}

const Accordion: React.FC<AccordionProps> = props => {
    const [isClose, setIsClose] = useState(!!props.isClose);

    const onHeaderClick = useCallback((): void => {
        setIsClose(!isClose);
    }, [isClose, props.onHeaderClick]);

    return (
        <section className={classNames('Accordion', props.classNames)}>
            <AccordionHeader
                title={props.title}
                isClose={isClose}
                onClick={onHeaderClick}
            />
            <AccordionContent isClose={isClose}>{props.children}</AccordionContent>
        </section>
    );
};

Accordion.defaultProps = {
    isClose: false,
};

export default Accordion;
