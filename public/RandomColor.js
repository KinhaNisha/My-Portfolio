function generateColour() {
    var letters = 'ABCDEF0123456789';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function () {
      var randomColor = generateColour();
      document.body.style.backgroundColor = randomColor;
    });
  });