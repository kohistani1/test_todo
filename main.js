'use strict'
//Elements Selection
const mainBoxEl = document.querySelector('.main__box')
const modalEl = document.querySelector('.modal')
const overlayEl = document.querySelector('.overlay')
const txtAreaEl = document.querySelector('#txt_A__add__el');
// btns Selection
const btnCloseModal = document.getElementsByClassName('btn__modal__close')
const btnAddItem = document.querySelector('.add__item')
const btnsCloseModal = document.querySelectorAll('.btn__modal__close')
const btnOpenModal = document.querySelector('.btn--add')
const btnClearNotes = document.querySelector('.btn--clear')

//functions defination
const openModal = function () {
    modalEl.classList.remove('hidden')
    overlayEl.classList.remove('hidden')
}
const closeModal = function () {
    modalEl.classList.add('hidden')
    overlayEl.classList.add('hidden')
    updateModal()
}
const updateModal = function () {
    txtAreaEl.value = ''
}
const clearNotes = function () {
    mainBoxEl.innerHTML = ''
}

const createNode = function () {
    if (txtAreaEl.value) {
        const htmlEl = `
            <div class="item">
            <button class="btn__close">X</button>
            <h5>${txtAreaEl.value}</h5>
            </div></div>
        `
        const item__box = document.createElement('div')
        item__box.classList.add('item__box')
        item__box.insertAdjacentHTML('afterbegin', htmlEl)
        mainBoxEl.append(item__box)
        closeModal()
    } else alert('Please Write something')

}
const hideItem = function(e){
    console.log(e.target);
    const target = e.target
    const parent = target.parentElement;
    if (target.classList.contains('btn__close')) parent.style.display = "none"
}
//Event Listners
btnOpenModal.addEventListener('click', openModal)
btnsCloseModal.forEach(el => el.addEventListener('click', closeModal));
btnClearNotes.addEventListener('click', clearNotes)
btnAddItem.addEventListener('click', createNode)
mainBoxEl.addEventListener('click', hideItem.bind(this))


