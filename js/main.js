document.addEventListener('DOMContentLoaded', function() {
    let generateButton = document.getElementById('generate');
    let copyButton = document.getElementById('copy');
    let passwordField = document.getElementById('password');
    let lengthField = document.getElementById('length');
  
    generateButton.addEventListener('click', generarContra);
    copyButton.addEventListener('click', copiarContra);
  
    function generarContra() {
      let length = parseInt(lengthField.value);
      let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?';
      let password = '';
  
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
  
      passwordField.value = password;
    }
  
    function copiarContra() {
      passwordField.select();
      document.execCommand('copy');
      alert('Contraseña Copiada');
    }
  });
