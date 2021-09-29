import React, {useContext} from 'react';
import {MenuContext} from "../Menu/MenuManager";
import cn from "classnames";
import { BiPlus } from "react-icons/bi";

import "./style.scss";

const Button = () => {

    const {open, setOpen} = useContext(MenuContext);

    return (
        <>
            <button className={cn("button", {open})} onClick={() => setOpen(!open)}>
            MENU
            </button>
        </>
    );
};

export default Button;