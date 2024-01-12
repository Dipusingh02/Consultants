let burger=document.querySelector('.burger');
let hr=document.querySelector('hr');
let list=document.querySelector('.list');
let navbar=document.querySelector('#navbar');
let isToggled=false


burger.addEventListener('click',()=>{
    list.classList.toggle('v-class')
    if (isToggled) {
        navbar.style.height='7vh'
        hr.style.top='3.7rem'
    }
    else{
        navbar.style.height='31vh'
        hr.style.top='16.3rem'

    }
    isToggled=!isToggled
})
