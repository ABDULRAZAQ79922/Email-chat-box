document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        addMessageToChatBox(email, message);
        sendEmailNotification(email, message);
        document.getElementById('message').value = '';
    } else {
        alert('Your Message Sent Succesfully!.');
    }
}

function addMessageToChatBox(email, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerHTML = `<strong>${email}</strong>: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendEmailNotification(email, message) {
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, message })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
