import React from 'react';
import MenuButton from './MenuButton';
import MenuContent from './MenuContent';

const Menu = () => {
  return (
    <>
      <div className="menu">
        <MenuButton />
        <MenuContent />
      </div>
    </>
  )
}

export default Menu;