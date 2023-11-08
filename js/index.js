let loginButton = getElement('bank-login');

//Add event listener for button
loginButton.addEventListener('click',loginFormHandler);

document.addEventListener('keydown',function(event) {
  if(event.key === 'Enter') {
    loginFormHandler();
}
});


function loginFormHandler() {
  let passwordField = getFieldValue('password', true);
   let usernameField = getFieldValue('username', true);
   let errorField = getElement('error-message');
   
   if(errorField) {
     errorField.parentNode.removeChild(errorField);
   }
   if(passwordField === 'secret' && usernameField === 'koti@gmail.com') {
    window.location.href = 'home.html'
   } else {
      const errorField = createElement('p', "Please enter valid email or password");
      const btn = getElement('bank-login');
      const form = getElement('bank-login-form');
      errorField.style.fontSize = '1.5rem';
      errorField.style.color = '#E21717';
      errorField.style.textAlign = 'left';
      errorField.style.paddingBottom = '8px';
      errorField.id = 'error-message';

      form.insertBefore(errorField, btn );
   }
}
