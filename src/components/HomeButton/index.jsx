import React, {useContext} from 'react';
import {MenuContext} from "../Menu/MenuManager";
import cn from "classnames";
import { BiPlus } from "react-icons/bi";

import "./style.scss";

const HomeButton = () => {

    const {open, setOpen} = useContext(MenuContext);

    return (
        <>
            <button className={cn("contact-button", {open})} onClick={() => setOpen(!open)}>
            <span><BiPlus fontSize="2em" /></span>
            </button>
        </>
    );
};

export default HomeButton;