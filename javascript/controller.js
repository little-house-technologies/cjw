const setupEventListeners = () => {
  document.getElementById('hamburger-menu').addEventListener('click', () => {
    console.log('menu clicked')
  });
}

window.onload = () => {
  setupEventListeners();
}
