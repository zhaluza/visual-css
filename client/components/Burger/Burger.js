import React from 'react';
import './burger.scss';

const Burger = ({ toggleMenu, menuOpen }) => {
  let burger;

  !menuOpen
    ? (burger = (
        <div className="burger" onClick={() => toggleMenu()}>
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </div>
      ))
    : (burger = (
        <div className="burger" onClick={() => toggleMenu()}>
          <div className="bar top bar-close"></div>
          <div className="bar middle bar-close"></div>
          <div className="bar bottom bar-close"></div>
        </div>
      ));

  return burger;
};

export default Burger;
