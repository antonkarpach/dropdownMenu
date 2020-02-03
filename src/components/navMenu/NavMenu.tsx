import React from "react";
import './NavMenu.scss';

import NavMenuItem from "./NavMenuItem";
import data from "./data/routsData.json";


const NavMenu: React.FC = () => {
    return (
        <section className={"NavMenu"}>
            <NavMenuItem title={"Item1"} routePath={"/"}/>
            <NavMenuItem title={"Item2"} routePath={"/"}/>
            <NavMenuItem title={"Item3"} routePath={"/"}/>
            <NavMenuItem title={"Item4"} routePath={"/"} list={data}/>
        </section>
    );
};

export default NavMenu;
