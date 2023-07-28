// content.js
window.onload = function () {
    var searchDiv = document.createElement('div');
    var searchBox = document.createElement('input');

    searchDiv.id = 'search';
    searchBox.id = 'search-field';
    searchBox.placeholder = 'Search...';

    searchBox.onkeyup = function () {
        var filter = searchBox.value.toUpperCase();
        var chatList = document.getElementsByClassName('chat-container');
        for (var i = 0; i < chatList.length; i++) {
            var chatText = chatList[i].innerText;
            if (chatText.toUpperCase().indexOf(filter) > -1) {
                chatList[i].style.display = "";
            } else {
                chatList[i].style.display = "none";
            }
        }
    };

    searchDiv.appendChild(searchBox);

    var container = document.getElementsByClassName('chats')[0];
    container.insertBefore(searchDiv, container.firstChild);
}
