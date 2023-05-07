const getCssPropertyById = (tag, property) => {
  return getComputedStyle(document.getElementById(tag))[property];
}

const setCssPropertyById = (tag, property, value) => {
  document.getElementById(tag).style[property] = value;
}

const listenForHamburgerMenuClick = () => {
  document.getElementById('hamburger-menu').addEventListener('click', () => {
    const display = getCssPropertyById('navbar-mobile', 'display');

    if (display === 'none') {
      setCssPropertyById('navbar-mobile', 'display', 'flex');
    } else if (display === 'flex') {
      setCssPropertyById('navbar-mobile', 'display', 'none');
    }

  });
}

const setupEventListeners = () => {
  listenForHamburgerMenuClick(); 
}

window.onload = () => {
  setupEventListeners();
}
