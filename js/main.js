(function(win, doc) {
  'use strict';

  var fbLoginButton = doc.querySelector('.fb-login-button');
  var tel = doc.querySelector('[data-js="tel"]');
  var email = doc.querySelector('[data-js="email"]');

  fbLoginButton.addEventListener('click', function() {
    getInputValues();
  });

  var telefoneValue = '';
  tel.addEventListener('input', function() {
    telefoneValue = this.value;
  });

  var emailValue = '';
  email.addEventListener('input', function() {
    emailValue = this.value;
  });

  function getInputValues() {
    alert(telefoneValue, emailValue);
  }
})(window, document);
