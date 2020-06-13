import React, { useState } from 'react';
import CodeContainerTemplate from '../templates/CodeContainerTemplate';

const CodeContainer = (props) => {
  const { pixels, percent } = props;
  const codeStringPixels = `border-radius: ${pixels}px`;
  const codeStringPercent = `border-radius: ${percent}%`;

  const [pixOrPerc, setPixOrPcnt] = useState('pixels');

  return (
    <CodeContainerTemplate
      valueProps={pixOrPerc === 'pixels' ? codeStringPixels : codeStringPercent}
    >
      <div className="pixel-percent-buttons">
        <div className="btn" onClick={() => setPixOrPcnt('pixels')}>
          Display Pixels
        </div>
        <div className="btn" onClick={() => setPixOrPcnt('percent')}>
          Display Percent
        </div>
      </div>
    </CodeContainerTemplate>
  );
};

export default CodeContainer;
