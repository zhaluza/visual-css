import React, { useState, useRef } from 'react';

const CodeContainerTemplate = (props) => {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('Copied to clipboard!');
  const textAreaRef = useRef(null);

  function copyCodeToClipBoard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    displayCopiedMessage();
  }

  function displayCopiedMessage() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }
  return (
    <div className="code-container">
      <textarea className="code" value={props.valueProps} ref={textAreaRef} />
      <div className="code-buttons">
        {props.children}
        {document.queryCommandSupported('copy') && (
          <button className="btn btn-2 copy-btn" onClick={copyCodeToClipBoard}>
            Copy Code
          </button>
        )}

        {copied && <p>{message}</p>}
      </div>
    </div>
  );
};

export default CodeContainerTemplate;
