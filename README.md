# Grafscan (Firefox Extension)

## Overview
Grafscan is a browser extension designed to block known scam websites, detect fraudulent wallet drainer scripts, and prevent unauthorized wallet connections.

## Installation & Build Instructions
### Prerequisites
- Mozilla Firefox (latest version)
- Node.js (recommended v16+)
- npm (comes with Node.js)

### Steps to Build & Install
1. Clone this repository:
   ```sh
   git clone https://github.com/SmokingGiraffe/grafscan.git
   cd grafscan
   ```

2. Install dependencies (if needed):
   ```sh
   npm install
   ```

3. Load the extension into Firefox:
   - Open `about:debugging` in Firefox.
   - Click **"This Firefox"** → **"Load Temporary Add-on"**.
   - Select the `manifest.json` file in the project folder.

4. The extension should now be active in the browser.

## Build Script
For easy packaging, run:
```sh
zip -r grafscan.zip * -x "node_modules/*"
```
This will create `grafscan.zip`, which is ready for submission to Mozilla Add-ons.

## Additional Notes
- Ensure the extension has **"Allow this extension to run on all websites"** enabled in Firefox settings.
- If modifying the blacklist, update `background.js` accordingly and reload the extension.

---

## License
MIT License. Contributions welcome!
