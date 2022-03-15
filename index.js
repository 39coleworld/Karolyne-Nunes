/*--- OPEN E CLOSE MENU  ----*/
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/*---  INTERAÇÃO MENU (ABRIR E FECHAR)  ----*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/*------  MUDA O CABEÇALHO QUANDO O PERGAMINHO -----*/
const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/*------   SLIDE    -------*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    heyboard: true,
    breakpoints: {
        776: {
            slidesPerView: 2,
            setWrapperSize: true
        },

        992: {
            slidesPerView: 2,
            setWrapperSize: true,
        },

        1200: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/*---   ScrollReveal: MOSTRAR ELEMENTOS QUANDO DER Scroll NA PÁGINA ----*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`,
    { interval: 100 }
)
