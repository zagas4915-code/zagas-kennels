// EVENTS
window.addEventListener('scroll', function (){
    console.log(pageYOffset);
})

const btn = document.getElementById('button')
const para = document.getElementById('fineboy')

// mouesover
// mouseout
// click 
btn.addEventListener('click', () =>{
    para.style.backgroundColor = 'red'
})
btn.addEventListener('click', function(){
    para.classList.add('active')
})






















