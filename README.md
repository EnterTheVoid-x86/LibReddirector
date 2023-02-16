# LibReddirector

LibReddirector is a Chrome extension that redirects all Reddit URLS to an open source Reddit client named [LibReddit](https://github.com/libreddit/libreddit/blob/master/README.md) whenever you click on a reddit link or directly browse to reddit.

## Using your own LibReddit instance
If you are using your own [LibReddit instance](https://github.com/libreddit/libreddit-instances/blob/master/instances.md) to browse reddit, you can redirect reddit links to your instance, by going to Options and pasting in URL to your instance.

## Installing extension from repo
1. Download [this repo as a ZIP file](https://github.com/EnterTheVoid-x86/libreddirector/archive/main.zip) from GitHub.
2. Unzip the file
3. In Chrome, go to the extensions page - chrome://extensions
4. Enable Developer Mode.
5. Click `Load unpacked` button and select the `src` folder that was extracted or drag the extracted `src` folder anywhere on the page to import it

## Permissions Audit
If you are curious or concerned about the permissions requested by this extension, the following is a brief explainer for each permission and where you can find it used in code:
- `webRequest` and `webRequestBlocking` are used to [redirect your traffic](https://github.com/EnterTheVoid-x86/libreddirector/blob/main/src/background.js#L29-L36)
- `storage` is used to [store the URL you set](https://github.com/EnterTheVoid-x86/libreddirector/blob/main/src/options.js#L1-L23) if you decide to use your own teddit instance 
- [`background` scripts can't be run with `persistent` key set to false when using the `webRequest` API](https://developer.chrome.com/docs/extensions/mv2/background_pages/)
