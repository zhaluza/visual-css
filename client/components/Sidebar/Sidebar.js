import React from 'react';
import './sidebar.scss';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <h2>Visual CSS</h2>
      <p>Choose a CSS setting and experiment.</p>
      <button className="btn">Box Shadow</button>
    </div>
  );
};

export default Sidebar;
