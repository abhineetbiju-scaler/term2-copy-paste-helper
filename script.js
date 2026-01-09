// Initialize DOM elements
const textArea = document.getElementById('textArea');
const copyBtn = document.getElementById('copyBtn');
const pasteBtn = document.getElementById('pasteBtn');
const status = document.getElementById('status');

// Show status message
function showStatus(message, isError = false) {
    status.textContent = message;
    status.className = isError ? 'error' : '';

    // Auto-hide after 2 seconds
    setTimeout(() => {
        status.textContent = '';
        status.className = '';
    }, 2000);
}

// Event listeners
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(textArea.value);
        showStatus('Copied!');
    } catch (err) {
        showStatus('Failed to copy!', true);
    }
});

pasteBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        textArea.value = text;
        showStatus('Pasted!');
    } catch (err) {
        showStatus('Failed to paste!', true);
    }
});
