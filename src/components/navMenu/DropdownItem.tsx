import React from 'react';
import {ListItem} from "./NavMenuItem";

interface Props {
    item: ListItem;
}

const DropdownItem: React.FC<Props> = props =>{

    return(
            <a className="DropdownItem" href={props.item.path}>
                {props.item.title}
            </a>
    );
};

export default DropdownItem;
