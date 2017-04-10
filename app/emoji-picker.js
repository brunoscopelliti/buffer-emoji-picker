
// I'm using Mutation Observers
// https://developers.google.com/web/updates/2012/02/Detect-DOM-changes-with-Mutation-Observers

// Emoji https://github.com/scotch-io/All-Github-Emoji-Icons

const shareBox = document.getElementById('sharer'); // ?

const createButton = () => {
  const button = document.createElement('button');
  button.id = 'js-emoji-picker-button';
  button.textContent = '😃';

  button.addEventListener('click', () => {
    const input = document.getElementById('composer');

    input.value = input.value + ' 🚀';

    const event = new KeyboardEvent('keyup', { bubbles: true, cancelable: true });

    input.dispatchEvent(event);
  });

  return button;
};

const observer = new MutationObserver(mutations => {
  document.getElementById('media-uploader').before(createButton());
});

observer.observe(shareBox, { childList: true });
