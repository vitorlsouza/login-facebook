(function(win, doc) {
  'use strict';

  var fbLoginButton = doc.querySelectorAll('.fb-login-button');
  var tel = doc.querySelector('[data-js="tel"]');
  var email = doc.querySelector('[data-js="email"]');

  fbLoginButton.forEach(function(button) {
    if (button.id === 'login') getInputValues();
  });
  // fbLoginButton.addEventListener('click', function() {
  //   getInputValues();
  // });

  var telefoneValue = '';
  tel.addEventListener('input', function() {
    telefoneValue = this.value;
  });

  var emailValue = '';
  email.addEventListener('input', function() {
    emailValue = this.value;
  });

  function logout() {
    FB.logout(function(response) {
      // Person is now logged out
      console.log(response);
      console.log(JSON.stringify(response));
    });
  }

  function getInputValues() {
    console.log(telefoneValue, emailValue);
  }
})(window, document);
