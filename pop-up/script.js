'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const buttonCloseModal = document.querySelector('.close-modal')
const buttonOpenModal = document.querySelectorAll('.show-modal')

const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for(let i = 0;i<buttonOpenModal.length;i++){
    buttonOpenModal[i].addEventListener('click',openModal)
}


overlay.addEventListener('click',closeModal)

buttonCloseModal.addEventListener('click',closeModal)

