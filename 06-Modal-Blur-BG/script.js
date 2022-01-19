/* eslint-env browser */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');

openModal.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

const classAdd = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const clickClose = element => element.addEventListener('click', classAdd);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) classAdd();
  }
});

clickClose(closeModal);
clickClose(overlay);
