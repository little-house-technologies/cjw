const getCssPropertyById = (tag, property) => {
  return getComputedStyle(document.getElementById(tag))[property];
};

const setCssPropertyById = (tag, property, value) => {
  document.getElementById(tag).style[property] = value;
};

const listenForHamburgerMenuClick = () => {
  document.getElementById('hamburger-menu').addEventListener('click', () => {
    setCssPropertyById('navbar-mobile', 'display', 'flex');
    setCssPropertyById('hamburger-menu', 'display', 'none');
    setCssPropertyById('x-mark', 'display', 'block');
  });
};

const listenForXMarkClick = () => {
  document.getElementById('x-mark').addEventListener('click', () => {
    setCssPropertyById('navbar-mobile', 'display', 'none');
    setCssPropertyById('hamburger-menu', 'display', 'flex');
    setCssPropertyById('x-mark', 'display', 'none');
  });
};

const setupEventListeners = () => {
  listenForHamburgerMenuClick();
  listenForXMarkClick();
};

const getCurrentPage = () => {
  const urlElements = window.location.href.split('/');
  const pageWithFileEnding = urlElements[urlElements.length - 1];
  return pageWithFileEnding.split('.')[0];
}

const highlightCurrentRoute = () => {
  const page = getCurrentPage();
  const pageId = `${page}-link`;

  setCssPropertyById(pageId, 'text-decoration', 'underline');
};

const waitForLightbulbAnimationTrigger = () => {
  if (getCurrentPage() === 'home') {
    // We are creating a new IntersectionObserver instance
    let observer = new IntersectionObserver((entries, observer) => {
      // This takes a callback function that receives two arguments: the elements list and the observer instance.
      entries.forEach((entry) => {
        // `entry.isIntersecting` will be true if the element is visible
        if (entry.isIntersecting) {
          // entry.target.classList.add('active');
  
          const lightbulbAnimationTextTop = document.getElementById(
            'lightbulb-animation_text-top'
          );
          const lightbulbAnimationTextBottom = document.getElementById(
            'lightbulb-animation_text-bottom'
          );
  
          lightbulbAnimationTextTop.classList.add('active');
          lightbulbAnimationTextBottom.classList.add('active');
          document
            .querySelector('.lightbulb-animation_container')
            .classList.add('lightbulb-animation_on');
  
          // We are removing the observer from the element after adding the active class
          observer.unobserve(entry.target);
        }
      });
    });
    // Adding the observer to the element
    observer.observe(document.getElementById('lightbulb-animation_text-top'));
  }

};

window.onload = () => {
  setupEventListeners();
  highlightCurrentRoute();
  waitForLightbulbAnimationTrigger();
};
