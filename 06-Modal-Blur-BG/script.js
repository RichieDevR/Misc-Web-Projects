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

const addClass = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const clickClose = element => element.addEventListener('click', addClass);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) addClass();
  }
});

clickClose(closeModal);
clickClose(overlay);