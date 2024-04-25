const buttons = document.querySelectorAll('.section__button');
const modalElem = document.querySelector('.modal');
const bodyElem = document.querySelector('body');

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    `;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest('.modal__close') || event.code === 'Escape') {
        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
            bodyElem.style.overflow = 'auto';
        }, 300);

        window.removeEventListener('keydown', closeModal);
    }
};

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    bodyElem.style.overflow = 'hidden';
    window.addEventListener('keydown', closeModal);
};

buttons.forEach(button => {
    button.addEventListener('click', openModal);
});

modalElem.addEventListener('click', closeModal);

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.main__nav-burger');
const headerChanged = document.querySelector('.container-hero');
const BagIcon = document.querySelector('.bag');
const headerIcon = document.querySelector('.logo__hero');

burger.addEventListener('click', () => {
    if (navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        burger.setAttribute('src', 'imgure/icons/burger.svg');
        BagIcon.setAttribute('src', 'imgure/icons/bag.svg');
        headerIcon.setAttribute('src', 'imgure/logotype/logo.svg');
        headerChanged.style.backgroundColor = "white";

    } else {
        navMenu.classList.add('is-open');
        headerChanged.style.backgroundColor = "rgba(168, 123, 98, 1)";
        burger.setAttribute('src', 'imgure/icons/burgerwhite.svg');
        BagIcon.setAttribute('src', 'imgure/icons/bagwhite.svg');
        headerIcon.setAttribute('src', 'imgure/logotype/logowhite.svg');
    }
});
const expandSvgs = document.querySelectorAll('.expand-svg');
const expandTexts = document.querySelectorAll('.expand-text');

expandSvgs.forEach((expandSvg, index) => {
    expandSvg.addEventListener('click', () => {
        if (expandTexts[index].style.display === 'none') {
            expandTexts[index].style.display = 'block';
            expandSvg.setAttribute('src', 'imgure/icons/open.svg');
        } else {
            expandTexts[index].style.display = 'none';
            expandSvg.setAttribute('src', 'imgure/icons/close.svg');
        }
    });
});

document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
});

let slideIndex = 0;
let slidesPerPage = window.innerWidth <= 1050 ? 2 : 4;
showSlide(slideIndex);

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const totalPages = Math.ceil(slides.length / slidesPerPage);

    if (n >= totalPages) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = totalPages - 1;
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        if (i >= slideIndex * slidesPerPage && i < (slideIndex + 1) * slidesPerPage) {
            slides[i].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }

    const pInnewElements = document.getElementsByClassName("p-innew");
    for (let i = 0; i < pInnewElements.length; i++) {
        pInnewElements[i].innerText = i + 1;
        pInnewElements[i].style.fontWeight = "normal";
        pInnewElements[i].style.color = "rgba(155, 153, 151, 1)";
    }

    const currentPage = document.getElementsByClassName("p-innew")[slideIndex];
    currentPage.style.fontWeight = "bold";
    currentPage.style.color = "rgb(29, 22, 19)";
}

function updateSliderPerPage() {
    slidesPerPage = window.innerWidth <= 1050 ? 2 : 4;
    showSlide(slideIndex);
}

window.addEventListener('resize', updateSliderPerPage);

document.getElementById("prev").addEventListener("click", () => {
    showSlide(slideIndex - 1);
});

document.getElementById("next").addEventListener("click", () => {
    showSlide(slideIndex + 1);
});

let touchstartX = 0;
let touchendX = 0;

const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

slider.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
}, false);

function handleGesture() {
    if (touchendX < touchstartX) {
        showSlide(slideIndex + 1);
    }

    if (touchendX > touchstartX) {
        showSlide(slideIndex - 1);
    }
}

const pInnewElements = document.getElementsByClassName("p-innew");

for (let i = 0; i < pInnewElements.length; i++) {
    pInnewElements[i].addEventListener("click", function () {
        showSlide(i);
        for (let j = 0; j < pInnewElements.length; j++) {
            pInnewElements[j].style.fontWeight = "normal";
            pInnewElements[j].style.color = "rgba(155, 153, 151, 1)";
        }
        pInnewElements[i].style.fontWeight = "bold";
        pInnewElements[i].style.color = "rgb(29, 22, 19)";
    });
}
