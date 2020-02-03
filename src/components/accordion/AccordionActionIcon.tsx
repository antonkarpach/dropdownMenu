import React from 'react';
import ShevronDown from '../../chevron-down-solid.svg';
import ShevronUp from '../../chevron-up-solid.svg';


interface Props {
    isCloce: boolean;
}

function AccordionActionIcon(props) {
    console.log(props.isClose);
    return (
        <div>
            {/*<img src={ShevronUp}/>*/}
            {props.isClose ?<img src={ShevronDown}/>:<img src={ShevronUp}/>}
        </div>
    );
}

export default AccordionActionIcon;
