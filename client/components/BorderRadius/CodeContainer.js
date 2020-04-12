import React, { useState } from 'react';

const CodeContainer = (props) => {
  const { pixels, percent } = props;
  const codeStringPixels = `border-radius: ${pixels}px`;
  const codeStringPercent = `border-radius: ${percent}%`;

  const [pixOrPerc, setPixOrPcnt] = useState('pixels');
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
      <textarea
        className="code"
        readOnly={pixOrPerc === 'pixels' ? codeStringPixels : codeStringPercent}
      />
      <div className="pixel-percent-buttons">
        <div className="btn" onClick={() => setPixOrPcnt('pixels')}>
          Display Pixels
        </div>
        <div className="btn" onClick={() => setPixOrPcnt('percent')}>
          Display Percent
        </div>
      </div>
      <div className="code-buttons">
        <button className="btn" onClick={() => copyCodeToClipboard}>
          Copy Code
        </button>
        <button className="btn">Add to Favorites</button>
        {copied && <p>{message}</p>}
      </div>
    </div>
  );
};

export default CodeContainer;
