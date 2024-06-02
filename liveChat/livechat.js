document.addEventListener("DOMContentLoaded", function(){
    const replyBox = document.querySelector('.js-input');
    const button = document.querySelector('.js-send');
    const chatbox = document.querySelector('.chat-conversation');
    const scrollCont = document.querySelector('.livechat-container');

    button.addEventListener("click", printReply);
    replyBox.addEventListener("keypress", function(event) {
        if (event.key === 'Enter') {
            printReply();
        }
    });

    function printReply(){
        const clientReply = replyBox.value.trim();
        if (clientReply !== '') {
            // Display client's message
            chatbox.innerHTML += `
                <div class="client-reply">
                    <div class="empty4"></div>
                    <div class="client-reply-box">
                        <p>${clientReply}</p>
                    </div>
                </div>`;

            // Generate system's reply based on client's input
            const systemReply = generateSystemReply(clientReply);

            // Display system's reply
            chatbox.innerHTML += `
                <div class="cs-reply">
                    <div class="cs-reply-box">
                        <p>${systemReply}</p>
                    </div>
                    <div class="empty3"></div>
                </div>`;

            // Clear the input box after sending the message
            replyBox.value = '';

            scrollCont.scrollTop = scrollCont.scrollHeight;
        }
    }

    // Function to generate system's response based on client's input
    function generateSystemReply(clientReply) {
        if(clientReply === "faster pls") {
            return "Sorry for the inconvenience caused. Please be patient. Thank you.";
        } 
        else if(clientReply === 'hi'){
            return "Hello, how can I help you?";
        }  
        else if(clientReply === 'thanks'){
            return "You're welcome! If you have any more questions or need further assistance, feel free to reach out anytime. We're here to help!"
        }
        else {
            return "I understand your concern, please hold on for a moment while I look into this for you.";
        }
    }
});
