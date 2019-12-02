import './icons';

document.addEventListener('DOMContentLoaded', async () => {
  const [main] = Array.from(document.getElementsByClassName('main'));

  window.requestAnimationFrame(() => {
    main.classList.add('jp-dom-loaded');
  });
});
