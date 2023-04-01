burger = document.querySelector('.hamburger');
navigationPane = document.querySelector('#navigation');
ul =  document.querySelector('.negation');

burger.addEventListener('click', ()=>{
    navigationPane.classList.toggle('expand')
})