import React from 'react';
import CodeContainerTemplate from '../templates/CodeContainerTemplate';
const CodeContainer = (props) => {
  const { posX, posY, blur, spread, opacity, inset } = props;
  const codeString = `box-shadow: ${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`;
  const insetCodeString = `box-shadow: inset ${posX}px ${posY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`;

  return (
    <CodeContainerTemplate valueProps={inset ? insetCodeString : codeString} />
  );
};

export default CodeContainer;
