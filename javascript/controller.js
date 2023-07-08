const getCssPropertyById = (tag, property) => {
  return getComputedStyle(document.getElementById(tag))[property];
}

const setCssPropertyById = (tag, property, value) => {
  document.getElementById(tag).style[property] = value;
}

const listenForHamburgerMenuClick = () => {
  document.getElementById('hamburger-menu').addEventListener('click', () => {
   setCssPropertyById('navbar-mobile', 'display', 'flex');
   setCssPropertyById('hamburger-menu', 'display', 'none');
   setCssPropertyById('x-mark', 'display', 'block');
  });
}

const listenForXMarkClick = () => {
  document.getElementById('x-mark').addEventListener('click', () => {
   setCssPropertyById('navbar-mobile', 'display', 'none');
   setCssPropertyById('hamburger-menu', 'display', 'flex');
   setCssPropertyById('x-mark', 'display', 'none');
  });
}

const setupEventListeners = () => {
  listenForHamburgerMenuClick(); 
  listenForXMarkClick();
}

const highlightCurrentRoute = () => {
  const urlElements = window.location.href.split('/');
  const pageWithFileEnding = urlElements[urlElements.length - 1];
  const page = pageWithFileEnding.split('.')[0];
  const pageId = `${page}-link`;

  setCssPropertyById(pageId, 'text-decoration', 'underline');
  console.log(page);
}

window.onload = () => {
  setupEventListeners();
  highlightCurrentRoute();
}
