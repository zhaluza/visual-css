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
