chrome.tabs.onUpdated.addListener((_, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('https://chat.openai.com/')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
        });
    }
});