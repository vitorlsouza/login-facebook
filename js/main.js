(function(win, doc) {
  'use strict';

  var fbLogout = doc.querySelector('.fb-logout-button');

  fbLogout.addEventListener('click', function() {
    logout();
  });

  function logout() {
    FB.logout(function(response) {
      // Person is now logged out
      console.log(response);
      console.log(JSON.stringify(response));
    });
  }
})(window, document);
