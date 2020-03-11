import React from 'react';
import CodeContainer from './CodeContainer/index';
import CSSImage from './CSSImage/index';
import LoginButtons from './LoginButtons/LoginButtons';
import Sidebar from './Sidebar/index';
import SliderContainer from './SliderContainer/index';

// TODO: Refactor app to use React Router for different CSS settings

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content-container">
        <LoginButtons />
        <CSSImage />
        <div className="container-bottom">
          <SliderContainer />
          <CodeContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
