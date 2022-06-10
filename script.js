let number_btns = document.querySelectorAll('.number')
let submit_btn = document.querySelector('.submit')
let Card2 = document.querySelector('.card-2')
let Card1 = document.querySelector('.card-1')
let span = document.querySelector('span')

Array.from(number_btns).forEach(btn => {
    btn.addEventListener('click', e => {
        let rating = e.target.textContent
    submit_btn.addEventListener('click', e =>{
        span.textContent = rating
        Card2.classList.remove('hide')
        Card1.classList.add('hide')
    })
})
})