(function() {
  'use strict';

  function checkStateLogin() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // usuario logado no facebook e com o app aceito
      } else if (response.status === 'not_authorized') {
        // Usuario logado no facebook, mas nao aceitou o App
      } else {
        // Usuario nao logado no facebook
      }
    });
  }

  checkStateLogin();
})();
