# Token Transfer Platform

## Project Description

This platform is to be used with [Metamask browser extension](https://metamask.io/) or [mobile app](https://mobile.metamask.io/). It aims at helping a user find a coworker's Ethereum address when transfering an ERC-20 Token deployed on the Ropsten Ethereum blockchain. The user can either scan a QR code or copy paste the recipient's address in Metamask.

## Latest Developments

- [x] ~~JavaScript `document.execCommand` isn't supported on iOS devices which causes iPhone/iPad users to be unable to use the copy paste button to load the Ethereum address in the clipboard~~ Fixed on July, 30th with [clipboard.js](https://clipboardjs.com/) script
- [x] ~~The platform isn't optimized for browsing on mobile devices~~ Fixed on July, 30th
- [x] ~~The dropdown menu isn't reset after refreshing the page on Firefox browser~~ Fixed on August, 1st
