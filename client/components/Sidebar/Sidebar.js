import React from 'react';
import './sidebar.scss';

const Sidebar = (props) => {
  const { setBoxShadowMode, setBorderRadiusMode, setRotate3DMode } = props;
  return (
    <div className="sidebar">
      <h2>Visual CSS</h2>
      <p>Choose a CSS setting and experiment.</p>
      <button className="btn" onClick={setBoxShadowMode}>
        Box Shadow
      </button>
      <button className="btn" onClick={setBorderRadiusMode}>
        Border Radius
      </button>
      <button className="btn" onClick={setRotate3DMode}>
        Rotate 3D
      </button>
    </div>
  );
};

export default Sidebar;
