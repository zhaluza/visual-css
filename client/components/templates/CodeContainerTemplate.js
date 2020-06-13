import React, { useState } from 'react';
import {
  copyCodeToClipboard,
  displayCopiedMessage,
} from '../../functions/copyCode';

// TODO: Get copy button to work

const CodeContainerTemplate = (props) => {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('Copied!');

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
