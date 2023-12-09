import React from 'react';
import MenuButton from './MenuButton';
import MenuContent from './MenuContent';
import Button from '../Button';

const Menu = () => {
  return (
    <>
      <div className="menu-wrapper">
        <MenuButton />
        <MenuContent />
      </div>
      <Button />
    </>
  );
};

export default Menu;