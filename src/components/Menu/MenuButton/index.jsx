import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import cn from "classnames";

import "./style.scss";

const MenuButton = () => {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <>
      <div className={cn("menu__btn", { open })}>
        <button onClick={() => setOpen(!open)}>
          <span></span>
        </button>
      </div>
      <button className={cn("menu__btn--mobile", { open })} onClick={() => setOpen(!open)}>
        Menu
      </button>
    </>
  );
};

export default MenuButton;
