(function(win, doc) {
  'use strict';

  var fbLogin = doc.querySelector('.fb-login-button');

  fbLogin.addEventListener('click', () => {
    checkLoginState();
  });

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // usuario logado no facebook e com o app aceito
        console.log('teste1');
        console.log(response.authResponse.accessToken);
      } else if (response.status === 'not_authorized') {
        console.log('teste2');
        console.log(response.authResponse.accessToken);
        // Usuario logado no facebook, mas nao aceitou o App
      } else {
        console.log('teste3');
        console.log(response.authResponse.accessToken);
        // Usuario nao logado no facebook
      }
    });
  }
})(window, document);
