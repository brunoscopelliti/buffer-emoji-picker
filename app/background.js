
const getCurrentTabUrl = () => new Promise((resolve, reject) => {
  chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, tab => resolve(tab.url));
  });
});



const tryRegisterHistoryStateUpdatedListener = (url) => {
  if (isEditorPage(url)){
    registerHistoryStateUpdatedListener();
  }
};

const isEditorPage = (url) => {
  const editorPageRx = /^\/app\/profile\/[0-9a-z]+\/buffer\/queue\/list$/gi;
  const pageUrl = new URL(url);
  return editorPageRx.test(pageUrl.pathname);
};

const registerHistoryStateUpdatedListener = (() => {
  let hasListenerBeenSetOnce = false;
  let hasScriptBeenInjected = false;

  const tryInjectScripts = (details) => {
    if (isEditorPage(details.url) && !hasScriptBeenInjected){
      chrome.tabs.executeScript({ file: 'emoji-picker.js' }, () => { hasScriptBeenInjected = true; });
    }
  };

  return () => {
    if (!hasListenerBeenSetOnce) {
      chrome.webNavigation.onHistoryStateUpdated.addListener(tryInjectScripts);
      hasListenerBeenSetOnce = true;
    }
  };
})();


getCurrentTabUrl()
  .then(tryRegisterHistoryStateUpdatedListener)
  .catch((err) => {
    console.error('An error has occurred:', err.message);
    console.error(err);
  });
