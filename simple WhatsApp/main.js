document.querySelectorAll('.message').forEach(function(messageElement) {
    messageElement.addEventListener('click', function() {
      
        const name = messageElement.querySelector('h3').textContent;
        const imageSrc = messageElement.querySelector('img').src;

        const personChatImg = document.querySelector('.personChat img');
        const personChatName = document.querySelector('.personChat h3');
        personChatImg.src = imageSrc;
        personChatName.textContent = name;
    });
});