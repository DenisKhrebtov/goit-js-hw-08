import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('textarea[name="message"]'),
  email: document.querySelector('input[name="email"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateTextarea();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.email.value && refs.message.value) {
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    alert('Необходимо заполнить все поля');
  }
  console.log(formData);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedSavedData = JSON.parse(savedMessage);
  if (savedMessage) {
    refs.email.value = parsedSavedData.email;
    refs.message.value = parsedSavedData.message;
  }
}
