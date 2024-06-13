function envoyerMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const messagesDiv = document.getElementById('messages');

        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;

        messagesDiv.appendChild(messageElement);
        messageInput.value = "";
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}

document.getElementById('messageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        envoyerMessage();
    }
});