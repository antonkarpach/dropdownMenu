import React, {MouseEvent, useMemo, useState} from "react";
import './NavMenuItem.scss';
import Dropdown from "./Dropdown";
import NavMenuItemTitle from './navMenuItemTitle';

interface Props {
    title: string;
    routePath: string;
    list?: ListItem[];
    onMouseOver?: (e: MouseEvent) => void;
}

//naming++
export interface ListItem {
    //remove++
    title: string;
    path: string;
}

const NavMenuItem: React.FC<Props> = props => {
    const title = useMemo<React.ReactNode>(( ) => {
        return <NavMenuItemTitle>{props.title}</NavMenuItemTitle>;
    },[props.title] );

    return (
        <a href={props.routePath} className="NavMenuItem">
            {props.list ?
                <Dropdown list={props.list} title={title}></Dropdown>
                : title}
        </a>
    );
};

export default NavMenuItem;
