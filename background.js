init();

function init() {
	addBookmarkSearchHandler();
}

function addBookmarkSearchHandler() {
  chrome.omnibox.onInputChanged.addListener((text, suggest) => {
		chrome.bookmarks.search(text, result => {
			const suggestedUrlList = [];
			for (let i = 0; i < result.length; i++) {
				const { title, url } = result[i];
				const description = title.replace(/[\]?.,;:|*~`!^\-_+<>@$%&\\]/gi, "");
				suggestedUrlList.push({content: encodeURIComponent(url), description: description});
			}
			if (suggestedUrlList.length === 0) return;
			suggest(suggestedUrlList);
		});
	});

  chrome.omnibox.onInputEntered.addListener(url => {
		const newURL = decodeURIComponent(url);
		chrome.tabs.create({ url: newURL });
	});
}