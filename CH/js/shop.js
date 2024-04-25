/* price regulator for pc */

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 0;

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

/* price regulator for mobile */

const rangeInput_modal = document.querySelectorAll(".range-input_modal input"),
    priceInput_modal = document.querySelectorAll(".price-input_modal input"),
    range_modal = document.querySelector(".slider_modal .progress_modal");
let priceGap_modal = 0;

priceInput_modal.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput_modal[0].value),
            maxPrice = parseInt(priceInput_modal[1].value);

        if (maxPrice - minPrice >= priceGap_modal && maxPrice <= rangeInput_modal[1].max) {
            if (e.target.className === "input-min_modal") {
                rangeInput_modal[0].value = minPrice;
                range_modal.style.left = (minPrice / rangeInput_modal[0].max) * 100 + "%";
            } else {
                rangeInput_modal[1].value = maxPrice;
                range_modal.style.right = 100 - (maxPrice / rangeInput_modal[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput_modal.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput_modal[0].value),
            maxVal = parseInt(rangeInput_modal[1].value);

        if (maxVal - minVal < priceGap_modal) {
            if (e.target.className === "range-min_modal") {
                rangeInput_modal[0].value = maxVal - priceGap_modal;
            } else {
                rangeInput_modal[1].value = minVal + priceGap_modal;
            }
        } else {
            priceInput_modal[0].value = minVal;
            priceInput_modal[1].value = maxVal;
            range_modal.style.left = (minVal / rangeInput_modal[0].max) * 100 + "%";
            range_modal.style.right = 100 - (maxVal / rangeInput_modal[1].max) * 100 + "%";
        }
    });
});

/* BURGER */
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

/* filter for pc */
document.querySelector('.button_filter').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    const minPrice = parseInt(document.querySelector('.input-min').value);
    const maxPrice = parseInt(document.querySelector('.input-max').value);
    const products = document.querySelectorAll('.product_jewellery');

    document.querySelector('.all_products').style.justifyContent = "center";
    document.querySelector('.pag').style.display = 'none';

    products.forEach(product => {
        const category = product.getAttribute('data-category');
        const price = parseInt(product.getAttribute('data-price'));
        const material = product.getAttribute('data-material');
        const collection = product.getAttribute('data-collection');

        if ((checkboxes[0].checked && category !== 'necklaces') ||
            (checkboxes[1].checked && category !== 'chokers') ||
            (checkboxes[2].checked && category !== 'rings') ||
            (checkboxes[3].checked && category !== 'earrings') ||
            (checkboxes[4].checked && material !== 'gold') ||
            (checkboxes[5].checked && material !== 'silver') ||
            (checkboxes[6].checked && collection !== 'pink_flamingo') ||
            (checkboxes[7].checked && collection !== 'dream') ||
            (price < minPrice || price > maxPrice)) {
            product.classList.add('hidden');
        } else {
            product.classList.remove('hidden');
        }
    });
});

/* filter modal button */

document.querySelector('.button_filter_modal').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    const minPrice = parseInt(document.querySelector('.input-min_modal').value);
    const maxPrice = parseInt(document.querySelector('.input-max_modal').value);
    const products = document.querySelectorAll('.product_jewellery');

    const closeModal_two = () => {
        modalElem_two.style.opacity = 0;
    
        setTimeout(() => {
            modalElem_two.style.visibility = 'hidden';
            bodyElem_two.style.overflow = 'auto';
        }, 300);
    
        window.removeEventListener('keydown', closeModal_two);
    };

    document.querySelector('.all_products').style.justifyContent = "center";
    document.querySelector('.pag').style.display = 'none';

    products.forEach(product => {
        const category = product.getAttribute('data-category');
        const price = parseInt(product.getAttribute('data-price'));
        const material = product.getAttribute('data-material');
        const collection = product.getAttribute('data-collection');

        if ((checkboxes[8].checked && category !== 'necklaces') ||
            (checkboxes[9].checked && category !== 'chokers') ||
            (checkboxes[10].checked && category !== 'rings') ||
            (checkboxes[11].checked && category !== 'earrings') ||
            (checkboxes[12].checked && material !== 'gold') ||
            (checkboxes[13].checked && material !== 'silver') ||
            (checkboxes[14].checked && collection !== 'pink_flamingo') ||
            (checkboxes[15].checked && collection !== 'dream') ||
            (price < minPrice || price > maxPrice)) {
            product.classList.add('hidden');
        } else {
            product.classList.remove('hidden');
        }
    });
    closeModal_two();
});

/* button clear pc */

document.querySelector('.button_clear').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');

    document.querySelector('.all_products').style.justifyContent = "center";
    document.querySelector('.pag').style.display = 'flex';

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    const products = document.querySelectorAll('.product_jewellery');

    products.forEach(product => {
        product.classList.remove('hidden');
    });
    document.querySelector('.input-min').value = 55;
    document.querySelector('.input-max').value = 155;
    document.querySelector('.range-min').value = 55;
    document.querySelector('.range-max').value = 155;

    products.forEach(product => {
        product.classList.remove('hidden');
    });

    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(progressBar => {
        progressBar.style.left = '35%';
        progressBar.style.right = '0';
    });
});

/* button modal clear */

document.querySelector('.button_clear_modal').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');

    document.querySelector('.all_products').style.justifyContent = "center";
    document.querySelector('.pag').style.display = 'flex';

    const closeModal_two = () => {
        modalElem_two.style.opacity = 0;

        setTimeout(() => {
            modalElem_two.style.visibility = 'hidden';
            bodyElem_two.style.overflow = 'auto';
        }, 300);

        window.removeEventListener('keydown', closeModal_two);
    };

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    const products = document.querySelectorAll('.product_jewellery');

    products.forEach(product => {
        product.classList.remove('hidden');
    });
    document.querySelector('.input-min_modal').value = 55;
    document.querySelector('.input-max_modal').value = 155;
    document.querySelector('.range-min_modal').value = 55;
    document.querySelector('.range-max_modal').value = 155;

    products.forEach(product => {
        product.classList.remove('hidden');
    });

    const progressBars = document.querySelectorAll('.progress_modal');
    progressBars.forEach(progressBar => {
        progressBar.style.left = '35%';
        progressBar.style.right = '0';
    });
    closeModal_two();
});

/* login modal */

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

/* filter modal */
const buttons_two = document.querySelectorAll('.filter_button');
const modalElem_two = document.querySelector('.modal__filter');
const bodyElem_two = document.querySelector('body');

modalElem_two.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    `;

const closeModal_two = event => {
    const target = event.target;

    if (target === modalElem_two || target.closest('.modal__close__filter') || event.code === 'Escape') {
        modalElem_two.style.opacity = 0;

        setTimeout(() => {
            modalElem_two.style.visibility = 'hidden';
            bodyElem_two.style.overflow = 'auto';
        }, 300);

        window.removeEventListener('keydown', closeModal_two);
    }
};

const openModal_two = () => {
    modalElem_two.style.visibility = 'visible';
    modalElem_two.style.opacity = 1;
    bodyElem_two.style.overflow = 'hidden';
    window.addEventListener('keydown', closeModal_two);
};

buttons_two.forEach(button => {
    button.addEventListener('click', openModal_two);
});

modalElem_two.addEventListener('click', closeModal_two);

/*  */