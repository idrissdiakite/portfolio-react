import React, { useState, createContext } from "react";

// Composant utilisant l'API Context de React afin de rendre le menu accessible
// à plusieurs endroits sur le site sans avoir à passer à chaque fois des propriétés

export const MenuContext = createContext({
  open: false,
  setOpen: () => {},
});

export default function MenuManager(props) {
  const [open, setOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {props.children}
    </MenuContext.Provider>
  );
}
