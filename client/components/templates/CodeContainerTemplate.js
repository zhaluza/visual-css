import React, { useState } from 'react';

// TODO: Get copy button to work

const CodeContainerTemplate = (props) => {
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
      <textarea className="code" value={props.valueProps} />
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

export default CodeContainerTemplate;
