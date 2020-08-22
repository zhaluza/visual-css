import React from 'react';
import CodeContainerTemplate from '../../templates/CodeContainerTemplate';
const CodeContainer = (props) => {
  const { posX, posY, blur, spread, inset, shadowColor } = props;
  const { r, g, b, a } = shadowColor;
  const codeString = `box-shadow: ${
    inset ? 'inset ' : ''
  }${posX}px ${posY}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${a})`;

  return <CodeContainerTemplate valueProps={codeString} />;
};

export default CodeContainer;
