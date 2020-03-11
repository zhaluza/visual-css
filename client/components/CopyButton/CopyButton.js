import React, { useState } from 'react';

const CopyButton = props => {
  const [copied, setCopied] = useState(false);
  const copyToClipboaard = () => {};
  return <button className="btn">Copy</button>;
};

export default CopyButton;
