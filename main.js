const passwordInput = document.querySelector('.input-password');
const togglePasswordBtn = document.querySelector('.toggle-password');
const form = document.querySelector('.form');
const signInbtn = document.querySelector('.button-sign-in');

// Логика показа пароля при нажатии кнопки
const togglePassword = () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordBtn.textContent = 'Hide password';
    togglePasswordBtn.setAttribute('aria-label', 'Hide password');
  } else {
    passwordInput.type = 'password';
    togglePasswordBtn.textContent = 'Show password';
    togglePasswordBtn.setAttribute('aria-label', 'Show password');
  }
};

togglePasswordBtn.addEventListener('click', togglePassword);

// Валидация пароля
const resetCustomValidity = () => {
  passwordInput.setCustomValidity('');
};

const validatePassword = () => {
  let message = '';

  if (!/.{8,}/.test(passwordInput.value)) {
    message = 'At least eight characters';
  }

  if (!/.*[A-Z].*/.test(passwordInput.value)) {
    message += 'At least one uppercase letter';
  }

  if (!/.*[a-z].*/.test(passwordInput.value)) {
    message += 'At least one lowercase letter';
  }

  passwordInput.setCustomValidity(message);
};

const onFormSubmission = evt => {
  evt.preventDefault();
  validatePassword();
  form.reportValidity();

  if (form.checkValidity() === false) {
  } else {
    alert('Account is registered!');
    signInbtn.disabled = 'true';
  }
};

passwordInput.addEventListener('input', resetCustomValidity);
form.addEventListener('submit', onFormSubmission);
