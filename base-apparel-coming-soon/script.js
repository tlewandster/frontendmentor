const submitButton = document.getElementById('js-submit');
const emailInput = document.getElementById('js-input');
const validatedForm = document.getElementById('js-validated');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value))
    validatedForm.classList.add('is-not-valid');
  else validatedForm.classList.remove('is-not-valid');
});
