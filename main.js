const firstBtn = document.querySelector('.btn-1')
const secondBtn = document.querySelector('.btn-2')
const firstsubMenu = document.querySelector('.sub-menu-1')
const secondsubMenu = document.querySelector('.sub-menu-2')




firstBtn.addEventListener('click', ()=> {
    firstBtn.classList.toggle('active')
    document.querySelector(firstBtn.dataset.target).classList.toggle('active')
    removeSecondBtnActive();
    
})


const removeFirstBtnActive = () => {
    firstBtn.classList.remove('active')
    firstsubMenu.classList.remove('active')
}

const removeSecondBtnActive = () => {
    secondBtn.classList.remove('active')
    secondsubMenu.classList.remove('active')
}
secondBtn.addEventListener('click', ()=> {
  
    secondBtn.classList.toggle('active')
    document.querySelector(secondBtn.dataset.target).classList.toggle('active')
    removeFirstBtnActive();
    

})

