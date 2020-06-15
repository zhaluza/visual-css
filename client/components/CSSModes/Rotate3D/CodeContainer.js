import React from 'react';
import CodeContainerTemplate from '../../templates/CodeContainerTemplate';

const CodeContainer = (props) => {
  const { x, y, z, angle } = props;
  const codeString = `transform: rotate3d(${x}, ${y}, ${z}, ${angle}deg)`;
  return <CodeContainerTemplate valueProps={codeString} />;
};

export default CodeContainer;
