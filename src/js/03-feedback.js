import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = "feedback-form-state";


// function onEmailInput(evt) {
//   const email = evt.target.value;

//     localStorage.setItem(LOCALSTORAGE_KEY, email);
    
// };

// function onMessageInput(evt) {
//    const message = evt.target.value;

//     localStorage.setItem(LOCALSTORAGE_KEY, message);
  
// };