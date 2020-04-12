import React, { useState } from 'react';

// TODO: Get copy button to work

const CodeContainer = (props) => {
  const { posX, posY, blur, spread, opacity, inset } = props;
  const codeString = `box-shadow: ${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`;
  const insetCodeString = `box-shadow: inset ${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`;

  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('Copied!');

  const copyCodeToClipboard = (e) => {
    e.preventDefault();
    const code = document.getElementById('code');
    console.log(code.innerHTML);
    code.select();
    code.setSelectionRange(0, 9999); // For mobile
    document.execCommand('copy');
    displayCopiedMessage();
  };

  const displayCopiedMessage = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="code-container">
      <textarea id="code" value={inset ? insetCodeString : codeString} />
      <div className="code-buttons">
        <button className="btn" onClick={copyCodeToClipboard}>
          Copy Code
        </button>
        <button className="btn">Add to Favorites</button>
        {copied && <p>{message}</p>}
      </div>
    </div>
  );
};

export default CodeContainer;
