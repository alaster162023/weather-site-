function sendMessage() {
    const inputField = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");
    const userMessage = inputField.value.trim();

    if (userMessage) {
        // Display user's message
        const userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("message", "user-message");
        userMessageDiv.textContent = userMessage;
        chatMessages.appendChild(userMessageDiv);

        // Clear the input field
        inputField.value = "";

        // Simple AI response
        const aiResponseDiv = document.createElement("div");
        aiResponseDiv.classList.add("message");
        aiResponseDiv.textContent = generateAIResponse(userMessage);
        chatMessages.appendChild(aiResponseDiv);

        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function generateAIResponse(userMessage) {
    // Basic logic to give a response based on keywords in user's message
    if (userMessage.toLowerCase().includes("indoor")) {
        return "You could check out the Remai Modern art museum!";
    } else if (userMessage.toLowerCase().includes("outdoor")) {
        return "How about a walk on the Meewasin Valley Trail?";
    } else {
        return "I'm here to help! Let me know what type of activity you’re interested in.";
    }
}