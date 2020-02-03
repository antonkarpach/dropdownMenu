import React, {useState} from "react";
import './Dropdown.scss';
import ShevronDown from '../../chevron-down-solid.svg';
import DropdownItem from "./DropdownItem";
import {ListItem} from "./NavMenuItem";

export interface Props {
    //naming, add interface
    list: ListItem[];
    title: React.ReactNode;
    //remove++
}


const Dropdown: React.FC<Props> = props => {
    const [isItemsVisible, setIsItemsVisible] = useState(false);

    //mpove to component html++
    //add interfaces++

    // let?++ naming++
    const onShowList = (): void => {
            setIsItemsVisible(!isItemsVisible )
    };

    return (
        <div onMouseOver={onShowList}>
            <div className={"Dropdown"}>
                {/* Title to props*/}
                {props.title}
                <img className={"Shevron"} src={ShevronDown}/>
            </div>
            { isItemsVisible && <div className="Dropdown__list" >
                {props.list.map((item: ListItem, index: number) => <DropdownItem key={index} item={item}/>)}
            </div> }
        </div>
    );
};


export default Dropdown;
