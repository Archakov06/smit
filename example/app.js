var storage = smit();
var user = prompt('Enter your name');

try {
  var messages = JSON.parse(localStorage.getItem('messages'));
} catch (e) {
  messages = [];
}

var appendElement = function(text) {
  var div = document.createElement('div');
  div.innerText = text;
  document.querySelector('#messages').appendChild(div);
};

var render = function() {
  document.querySelector('#messages').innerHTML = '';
  if (messages) {
    messages.forEach(function(item) {
      appendElement(item.user + ': ' + item.text);
    });
  }
};

window.onload = function() {
  render();
  document.querySelector('h2').innerText = 'Username: ' + user;

  document.querySelector('.actions button').addEventListener('click', function() {
    var text = document.querySelector('.actions input').value;
    messages.push({
      user: user,
      text: text,
    });
    render();
    localStorage.setItem('messages', JSON.stringify(messages));
    document.querySelector('.actions input').value = '';
  });

  storage.on('messages', function(data) {
    messages = JSON.parse(data);
    render();
  });
};
