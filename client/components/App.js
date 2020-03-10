import React from 'react';
import Sidebar from './Sidebar/index';
import CodeContainer from './CodeContainer/index';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content-container">
        <CodeContainer />
      </div>
    </div>
  );
};

export default App;
