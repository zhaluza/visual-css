import React from 'react';
import LoginButtons from './LoginButtons/index';
import Sidebar from './Sidebar/index';
import BoxShadowContainer from '../containers/BoxShadowContainer/index';

// TODO: Refactor app to use React Router for different CSS settings

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content-container">
        <LoginButtons />
        <BoxShadowContainer />
      </div>
    </div>
  );
};

export default App;
