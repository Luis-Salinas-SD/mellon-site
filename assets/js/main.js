/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function removeClass() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(element => element.addEventListener('click', removeClass))


/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsHeader.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach(el => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})

//! ==================== SERVICES MODAL ====================

const modalViews = document.querySelectorAll('.services__modal'), //div
    modalBtns = document.querySelectorAll('.services__button'),//span
    modalCloses = document.querySelectorAll('.services__modal-close')//etiqueta i

//* === Funcion que agrega la clase active-modal ===
let modal = function (indice) {
    modalViews[indice].classList.add('active-modal')
}

//& === Funcion que activa la funcion modal ↖↖↖↖↖↖ ===
modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener('click', () => {
        modal(index)
    })
})

//*Funcion para remover la clase active-modal
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

//$==================== PORTFOLIO SWIPER  ====================

var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    }
});


//!==================== TESTIMONIAL ====================
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakepoints: {
        568: {
            slidesPerView: 2
        }
    }

});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');


function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        //obtener el offsetHeight de la seccion
        const sectionHeight = current.offsetHeight
        //obtener el offsetTop - 50 px de la seccion
        const sectionTop = current.offsetTop - 50
        //obtener el id de la seccion
        sectionId = current.getAttribute('id')

        //Condicional
        //! ilumina la palabra de acuerdo a la seccion*/
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })

}
window.addEventListener('scroll', scrollActive)
// hace un pequeño box shadow al menu movil al hacer scroll al llegar a los 80px
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    }
    else {
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

//& ==================== DARK LIGHT THEME ====================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//* ------------------------> Formulario <----------------------------
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', handleSubmit)

async function handleSubmit(evento) {
    evento.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    //* --------->Response de fetch <---------
    if (response.ok) {
        alert('mensaje enviado con exito')
        this.reset()
    } else {
        console.warn('algo salió mal' + error);
    }
}