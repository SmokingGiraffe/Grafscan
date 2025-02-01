// content.js
document.addEventListener("DOMContentLoaded", () => {
    scanForScams();
    detectDrainerScripts();
    detectRepeatedWalletConnections();
});

function detectDrainerScripts() {
    const drainerPatterns = [
        /new WebSocket\(/,
        /solana\.request\(\s*{.*"method":\s*"signMessage"/, 
        /solana\.request\(\s*{.*"method":\s*"signAndSendTransaction"/
    ];
    
    document.querySelectorAll("script").forEach(script => {
        if (script.innerText && drainerPatterns.some(pattern => pattern.test(script.innerText))) {
            console.warn("Blocked Suspicious Wallet Drainer Script:", script);
            script.remove();
            alert("Warning: This website is attempting to run a known wallet-draining script!");
        }
    });
}

function detectRepeatedWalletConnections() {
    let walletConnectionAttempts = 0;
    
    document.querySelectorAll("button, a").forEach(element => {
        element.addEventListener("click", () => {
            if (element.innerText.toLowerCase().includes("connect wallet")) {
                walletConnectionAttempts++;
                if (walletConnectionAttempts > 3) {
                    alert("⚠️ WARNING: This website is repeatedly requesting wallet connections. Be cautious!");
                }
            }
        });
    });
}
