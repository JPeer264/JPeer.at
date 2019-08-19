document.addEventListener('DOMContentLoaded', async () => {
  const [main] = Array.from(document.getElementsByClassName('main'));

  await new Promise((res) => setTimeout(res, 500));
  main.classList.add('jp-dom-loaded');
});
