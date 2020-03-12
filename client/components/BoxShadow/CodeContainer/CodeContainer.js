import React from 'react';
import './codeContainer.scss';

// TODO: Get copy button to work

const CodeContainer = props => {
  const { posX, posY, blur, spread, opacity, inset } = props;
  const codeString = `box-shadow: ${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`;
  const insetCodeString = `box-shadow: inset ${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`;
  return (
    <div className="code-container">
      <code>{inset ? insetCodeString : codeString}</code>
      <div className="code-buttons">
        <button className="btn">Copy Code</button>
        <button className="btn">Add to Favorites</button>
      </div>
    </div>
  );
};

export default CodeContainer;
