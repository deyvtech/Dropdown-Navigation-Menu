

// const firstBtns = document.querySelectorAll('.btn-1')
// const secondBtns = document.querySelectorAll('.btn-2')
// const firstsubMenus = document.querySelectorAll('.sub-menu-1')
// const secondsubMenus = document.querySelectorAll('.sub-menu-2')


// firstBtns.forEach((firstBtn)=> {
//     firstBtn.addEventListener('click', () => {
//         firstBtn.classList.toggle('active')
//         document.querySelector(firstBtn.dataset.target).classList.toggle('active')
//         removeSecondBtnActive();
//         })
// })

// secondBtns.forEach((secondBtn) => {
//     secondBtn.addEventListener('click', () => {
//     secondBtn.classList.toggle('active')
//     document.querySelector(secondBtn.dataset.target).classList.toggle('active')
//     removeFirstBtnActive();
//     })
    
// })


// const removeFirstBtnActive = () => { 
//     firstsubMenus.forEach((firstsubMenu) => {
//         firstBtns.forEach((firstBtn) => {
//             firstBtn.classList.remove('active')
//             firstsubMenu.classList.remove('active')
//         })
//     })
// }

// const removeSecondBtnActive = () => { 
//     secondsubMenus.forEach((secondsubMenu) => {
//         secondBtns.forEach((secondBtn) => {
//             secondBtn.classList.remove('active')
//             secondsubMenu.classList.remove('active')
//         })
      
//     })
// }


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

//=================== mobile side bar=======================

const firstmobileBtn = document.querySelector('.btn-mobile-1')
const secondmobileBtn = document.querySelector('.btn-mobile-2')
const firstmobilesubMenu = document.querySelector('.sub-menu-mobile-1')
const secondmobilesubMenu = document.querySelector('.sub-menu-mobile-2')


firstmobileBtn.addEventListener('click', ()=> {
    firstmobileBtn.classList.toggle('active')
    document.querySelector(firstmobileBtn.dataset.target).classList.toggle('active')
    // removeSecondMobileBtnActive();
    
})

secondmobileBtn.addEventListener('click', ()=> {
    secondmobileBtn.classList.toggle('active')
    document.querySelector(secondmobileBtn.dataset.target).classList.toggle('active')
    // removeFirstMobileBtnActive();
    

})

// const removeFirstMobileBtnActive = () => {
//     firstmobileBtn.classList.remove('active')
//     firstmobilesubMenu.classList.remove('active')
// }

// const removeSecondMobileBtnActive = () => {
//     secondmobileBtn.classList.remove('active')
//     secondmobilesubMenu.classList.remove('active')
// }


//=========== Side bar=============

const btnMenu = document.querySelector('.mobile-menu')
const btnCloseMenu = document.querySelector('.mobile-close-menu')


btnMenu.addEventListener('click', () => {
    btnMenu.classList.add('active')
    document.querySelector(btnMenu.dataset.target).classList.add('active')
  
})


btnCloseMenu.addEventListener('click', () => {
    btnCloseMenu.classList.add('active')
    btnMenu.classList.remove('active')
    document.querySelector(btnMenu.dataset.target).classList.remove('active')
  
})
