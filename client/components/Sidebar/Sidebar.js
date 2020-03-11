import React from 'react';
import './sidebar.scss';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <h2>Choose a CSS Setting</h2>
      <button className="btn">Box Shadow</button>
    </div>
  );
};

export default Sidebar;
