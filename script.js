document.addEventListener('DOMContentLoaded', function() {
  var btnContraste = document.getElementById('contraste-btn');
  btnContraste.addEventListener('click', function() {
    var body = document.body;
    var menu = document.querySelector('.menu');

    body.classList.toggle('alto-contraste');
    menu.classList.toggle('alto-contraste');

    var modoAltoContraste = body.classList.contains('alto-contraste');
    localStorage.setItem('contraste', modoAltoContraste ? 'alto' : 'normal');
  });

  var contrasteSalvo = localStorage.getItem('contraste');
  if (contrasteSalvo === 'alto') {
    document.body.classList.add('alto-contraste');
    document.querySelector('.menu').classList.add('alto-contraste');
  }
});
