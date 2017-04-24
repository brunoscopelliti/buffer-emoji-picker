
import listen from 'listen-events';
import { debounce } from 'lodash';

/**
 * Remove scroll event listener.
 * @name removeScrollListener
 * @private
 */
let removeScrollListener;

/**
 * Register scroll event listener on the `js-scrollable` element.
 * @param {HTMLElement} root 
 */
const listenScroll = (root) => {
  const scrollableEl = root.querySelector('.js-scrollable');
  removeScrollListener = listen('scroll', scrollableEl, debounce(onScroll, 50, { trailing: true }));
};

export { listenScroll };


/**
 * It's the scroll event handler.
 * Determines the currently selected category on the basis
 * of the scroll height of the container box.
 * @name onScroll
 * @private
 * @param {Event} event 
 */
function onScroll(event) {
  const scrollLevel = event.target.scrollTop;

  const shelfElems = [...event.target.querySelectorAll('.js-scrollable-section')];

  const selectedShelf = shelfElems.reduce((selectedEl, shelfEl) => scrollLevel + 25 > shelfEl.offsetTop ? shelfEl : selectedEl, shelfElems[0]);
  const selectedShelfKey = selectedShelf.dataset['jsSection'];

  markSelected(selectedShelfKey);
}

/**
 * Updates DOM elements on the basis of the currently
 * selected category.
 * @name markSelected
 * @private
 * @param {String} key 
 */
const markSelected = (key) => {
  const currentlySelectedCategoryEl = document.querySelector('.js-selectable-category.is-selected');
  const selectedCategoryEl = document.querySelector(`[data-js-section-key="${key}"]`);

  if (currentlySelectedCategoryEl != selectedCategoryEl){
    toggleClass([currentlySelectedCategoryEl, selectedCategoryEl], 'is-selected');
  }
};

/**
 * Toggles the `className` from the given `elems`.
 * @name toggleClass
 * @private
 * @param {HTMLElement[]} elems 
 * @param {String} className 
 * @param {Boolean} force 
 */
const toggleClass = (elems, className, force) => 
  (Array.isArray(elems) ? elems : [elems])
    .forEach(el => el.classList.toggle(className, force));



/**
 * It's the click on category event handler.
 * @name scrollTo
 * @param {Event} event 
 */
const scrollTo = (event) => {
  const url = new URL(event.target.href);
  const categoryKey = url.hash.substr(1);

  const categoryShelfEl = event.currentTarget.querySelector('#' + categoryKey)

  if (categoryShelfEl){
    removeScrollListener();
    // TODO Chrome does not support scrollOption parameter. Add smooth scroll effect.
    categoryShelfEl.scrollIntoView();
    setTimeout(listenScroll, 100, event.currentTarget);
  }

  markSelected(event.target.dataset['jsSectionKey']);
  event.preventDefault();
}

export { scrollTo };
