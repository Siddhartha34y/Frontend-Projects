document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Sample chat data
    const chats = [
        { name: "Alice", lastMessage: "Hey, how are you?", time: "10:30 AM", unread: 2 },
        { name: "Bob", lastMessage: "Can we meet tomorrow?", time: "Yesterday", unread: 5 },
        { name: "Charlie", lastMessage: "Thanks for the help!", time: "Tuesday", unread: 0 },
        { name: "David", lastMessage: "See you at the party!", time: "Monday", unread: 1 },
    ];

    // Function to create a chat item
    function createChatItem(chat) {
        const chatItem = document.createElement('div');
        chatItem.className = 'chat-item';
        chatItem.innerHTML = `
            <img src="data:image/webp;base64,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" alt="${chat.name}" class="profile-pic">
            <div class="chat-details">
                <div class="chat-header">
                    <span class="chat-name">${chat.name}</span>
                    <span class="chat-time">${chat.time}</span>
                </div>
                <p class="last-message">${chat.lastMessage}</p>
            </div>
            ${chat.unread ? `<div class="unread-badge">${chat.unread}</div>` : ''}
        `;
        return chatItem;
    }

    // Populate chat list
    const chatList = document.querySelector('.chat-list');
    chats.forEach(chat => {
        chatList.appendChild(createChatItem(chat));
    });

    // Add click event to chat items
    chatList.addEventListener('click', (e) => {
        const chatItem = e.target.closest('.chat-item');
        if (chatItem) {
            // Simulate opening a chat
            alert(`Opening chat with ${chatItem.querySelector('.chat-name').textContent}`);
        }
    });

    // Simulate new message arrival
    setInterval(() => {
        const randomChat = chats[Math.floor(Math.random() * chats.length)];
        randomChat.lastMessage = "New message " + new Date().toLocaleTimeString();
        randomChat.time = "Just now";
        randomChat.unread = (randomChat.unread || 0) + 1;

        // Update the DOM
        chatList.innerHTML = ''; // Clear existing chats
        chats.forEach(chat => {
            chatList.appendChild(createChatItem(chat));
        });
    }, 30000); // Every 30 seconds

    // Add functionality to bottom navigation
    const bottomNav = document.querySelector('.bottom-nav');
    bottomNav.addEventListener('click', (e) => {
        const navItem = e.target.closest('.nav-item');
        if (navItem) {
            const navText = navItem.querySelector('span').textContent;
            alert(`Switching to ${navText} tab`);
        }
    });

    // Add a simple message input and send button
    const messageForm = document.createElement('form');
    messageForm.className = 'message-form';
    messageForm.innerHTML = `
        <input type="text" placeholder="Type a message" class="message-input">
        <button type="submit" class="send-button">
            <i data-lucide="send"></i>
        </button>
    `;
    document.querySelector('.whatsapp-container').appendChild(messageForm);

    // Handle message sending
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = messageForm.querySelector('.message-input');
        const message = input.value.trim();
        if (message) {
            alert(`Sending message: ${message}`);
            input.value = '';
            // In a real app, you'd send this message to a server here
        }
    });

    // Initialize the new Lucide icon
    lucide.createIcons();

    // Update the time in the status bar
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.querySelector('.status-bar .time').textContent = timeString;
    }
    updateTime();
    setInterval(updateTime, 60000); // Update every minute
});
