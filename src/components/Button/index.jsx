import React, {useContext} from 'react';
import {MenuContext} from "../Menu/MenuManager";
import cn from "classnames";

import "./style.scss";

// Composant utilisant le useContext défini dans le composant Menu>MenuManager ainsi que la library "classnames"
// Lorsqu'on clique sur le bouton, on ajoute au bouton la classe "open" et inversement

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