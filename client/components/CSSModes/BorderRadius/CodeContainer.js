import React, { useState } from 'react';
import CodeContainerTemplate from '../../templates/CodeContainerTemplate';

const CodeContainer = ({ pixels, percent, togglePixels }) => {
  const codeStringPixels = `border-radius: ${pixels}px`;
  const codeStringPercent = `border-radius: ${percent}%`;

  return (
    <CodeContainerTemplate
      valueProps={togglePixels ? codeStringPixels : codeStringPercent}
    ></CodeContainerTemplate>
  );
};

export default CodeContainer;
