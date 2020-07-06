import React from 'react';
import './sidebar.scss';

const Sidebar = ({ setBoxShadowMode, setBorderRadiusMode, setRotate3DMode, mode }) => {
  return (
    <div className="sidebar">
      <h2>Visual CSS</h2>
      <p>Choose a CSS setting and experiment.</p>
      <button className={`btn ${mode === 'box-shadow' ? 'active' : ''}`} onClick={setBoxShadowMode}>
        Box Shadow
      </button>
      <button
        className={`btn ${mode === 'border-radius' ? 'active' : ''}`}
        onClick={setBorderRadiusMode}
      >
        Border Radius
      </button>
      <button className={`btn ${mode === 'rotate-3d' ? 'active' : ''}`} onClick={setRotate3DMode}>
        Rotate 3D
      </button>
    </div>
  );
};

export default Sidebar;
