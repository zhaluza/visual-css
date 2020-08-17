import React from 'react';
import './sidebar.scss';

const Sidebar = ({
  setBoxShadowMode,
  setBorderRadiusMode,
  setRotate3DMode,
  mode,
  menuOpen,
  isMobile,
}) => {
  return (
    <div className={`sidebar ${isMobile && 'sidebar-mobile'} ${!menuOpen && 'sidebar-hidden'}`}>
      <h2>Visual CSS</h2>
      <p>Choose a CSS setting and experiment.</p>
      <button>
        <a href="https://github.com/login/oauth/authorize?client_id=b5c4eac00ad59b774b91">
          Log in with Github
        </a>
      </button>
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
