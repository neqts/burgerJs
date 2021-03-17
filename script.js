const icon1 = document.querySelector('.fa-bars')
const icon2 = document.querySelector('.fa-times')
const nav = document.querySelector('nav')


const change = () => {
    nav.classList.add('active')
    icon2.classList.add('active')
    icon2.classList.remove('hide')
}


const change2 = () => {
    nav.classList.remove('active')
    icon2.classList.add('hide')
    icon2.classList.remove('active')
}

icon1.addEventListener('click', change)
icon2.addEventListener('click', change2)






