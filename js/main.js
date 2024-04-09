'use strict'
console.log(`Hello it's js!`);

//menu start

let nav = document.querySelector(".nav");

document.querySelector(".menu_btn").addEventListener("click", function () {
    nav.classList.remove("nav_transform");
});


document.querySelector(".nav__close").addEventListener("click", function () {
    nav.classList.add("nav_transform");
});
//menu end



let menu_1024 = document.querySelector(".menu__open-1024");

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 300) {
        menu_1024.classList.add("menu__open-1024-view");

    }
    else {
        menu_1024.classList.remove("menu__open-1024-view");
    }
});


menu_1024.addEventListener("click", function () {

    //это работает
    //window.scrollTo(0, 0);

});




// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);

                //media
                if (window.innerWidth <= 500) {
                    nav.classList.add("nav_transform");
                }
            });
        });
    };
    scrollTo();



}());

// --scroll


// Active menu --

// const elem = document.querySelector('#authors');

// document.addEventListener('scroll', function() {
//   const posTop = elem.getBoundingClientRect().top;

//   // Блок достиг верхней границы экрана (или выше)
//   // elem.classList.toggle('visible', posTop <= 0);

//   // Блок только появляется снизу (или выше)
//   // elem.classList.toggle('visible', posTop < window.innerHeight);

//   // Блок целиком находится в видимой зоне
//   //elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);

//   const link=document.querySelector(".main-nav__el-author");
//   if(elem.classList.toggle('visible', posTop < window.innerHeight)){
//         console.log(link);
//         link.classList.add("main-nav__el-focus");
//     }
//     else{
//         link.classList.remove("main-nav__el-focus");
//     }
// });

// -- Active menu


// windows size--
//Адаптация фиксед позиции меню под размер экрана
function display() {
    const menu = document.querySelector(".main-nav");
    if ((document.documentElement.clientHeight <= 740) && (window.innerWidth > 1024)) {
        menu.classList.add("min-margin");
    }
    else if ((document.documentElement.clientHeight > 740)) {
        menu.classList.remove("min-margin");
    }
    console.log("work");
}


window.addEventListener('resize', (e) => {
    display()
});

// --windwos size



// checked ---


const radioButtons = document.querySelectorAll(".recipes-radio-group__item");
const card_array = document.querySelectorAll(".recipes__card");

function choseRadioRecipes() {
    const recipes_radio = document.querySelector('input[name = "recipes-radio"]:checked');
    let value = recipes_radio.value;
    const cards = document.querySelector(".recipes__cards");
    animation__card();
    setTimeout(() => {
        cards.classList.remove("recipes__cards_order");
        cards.classList.remove("recipes__cards_order2");
        cards.classList.remove("recipes__cards_order3");
    }, 200);
    setTimeout(() => {
        if (value == 1) {
            cards.classList.add("recipes__cards_order");

        }
        else if (value == 2) {

            cards.classList.add("recipes__cards_order2");

        }
        else if (value == 3) {
            cards.classList.add("recipes__cards_order3");
        }
        else {
            cards.classList.add("recipes__cards_order");
        }
        animation__card__off();
    }, 200);

}

for (let el of radioButtons) {
    el.addEventListener("click", choseRadioRecipes)
}

function animation__card() {
    for (let el of card_array) {
        let rect = el.getBoundingClientRect();
        el.classList.add("card-hidden");
    }
}

function animation__card__off() {
    setTimeout(() => {
        for (let el of card_array) {
            el.classList.remove("card-hidden");
        }
    }, 250);
}


// ---checked



// Modal window --

function view_modalWindow(text, ...args) {

    const modalWindowWrapper = document.querySelector(".modal-window__wrapper");
    const modalWindow = document.querySelector(".modal-window");
    const modalWindowText = document.querySelector(".modal-window__text");
    const modal_window_text_container = document.querySelector(".modal-window__text-container");

    // modalWindowText.textContent = text;
    modal_window_text_container.innerHTML = (`<p class="modal-window__text">${text}</p>`);
    if (args != null) {
        for (let el of args) {
            if (el != null) {
                modal_window_text_container.innerHTML += (`<p class="modal-window__text">${el}</p>`);
            }
        }
    }
    modalWindowWrapper.classList.remove("modal-window__wrapper_hidden");
    setTimeout(() => {
        modalWindow.classList.remove("modal-window_hidden");
    }, 10);

    console.log("view");
}

function hidden_modalWindow() {
    const modalWindowWrapper = document.querySelector(".modal-window__wrapper");
    const modalWindow = document.querySelector(".modal-window");

    modalWindow.classList.add("modal-window_hidden");
    setTimeout(() => {
        modalWindowWrapper.classList.add("modal-window__wrapper_hidden");
    }, 500);

    console.log("hidden");
}

document.querySelector("#modal-window_img-container").addEventListener("click", hidden_modalWindow)



// -- Modal window


//Modal window use--



const use_language = document.querySelectorAll(".form_toggle-item");
for (let el of use_language) {
    el.addEventListener("click", function () {
        view_modalWindow("Вы переключиля язык сайта (нет)")
    });

}



const use_notifications = document.querySelector(".notifications__btn");
use_notifications.addEventListener("click", function () {
    view_modalWindow("Есть новые уведомления")
});



const use_btn_lk = document.querySelector(".btn_lk");
use_btn_lk.addEventListener("click", function () {
    view_modalWindow("Личный кабинет")
});



const social_network = document.querySelectorAll(".social__link");
for (let el of social_network) {
    el.addEventListener("click", function () {
        view_modalWindow("Перейти на страницу в соцсеть");
    });
}



const social_networkRecipes = document.querySelectorAll(".recipes__author-social-icon");
for (let el of social_networkRecipes) {
    el.addEventListener("click", function () {
        view_modalWindow("Перейти на страницу автора рецепта в соцсеть");
    });
}


const use__pageAuthor = document.querySelectorAll(".authors__person");
for (let el of use__pageAuthor) {
    el.addEventListener("click", function () {
        view_modalWindow("Страница автора рецептов");
    });
}


const use_moreRecipesAuthor = document.querySelectorAll(".recipes__img-context");
for (let el of use_moreRecipesAuthor) {
    el.addEventListener("click", function () {
        // view_modalWindow("Больше рецептов автора");
        choseRadioRecipes();
    });
}



const use__otherPage = document.querySelectorAll(".other-page");
for (let el of use__otherPage) {
    el.addEventListener("click", function () {
        view_modalWindow("Другая страница");
    });
}

document.querySelector(".search-form__icon").addEventListener('click', function (e) {
    const input = document.querySelector('.search-form__input');
    if (input.value.length >= 1) {
        view_modalWindow(`Поиск по: ${input.value}`);
    }
});

document.querySelector('.search-form__input').addEventListener('keydown', function (e) {
    if (e.keyCode == "13") {
        if (this.value.length >= 1) {
            view_modalWindow(`Поиск по: ${this.value}`);
        }
    }
});


const use_selectetCard = document.querySelectorAll(".selection__card");
for (let el of use_selectetCard) {
    el.addEventListener("click", function () {
        view_modalWindow("Переход на другую страницу");
    });
}

const use_recipesTitle = document.querySelectorAll(".recipes__card-title");
for (let el of use_recipesTitle) {
    el.addEventListener("click", function () {
        view_modalWindow("Переход на другую страницу");
    });
}

const use_rcompilationCard = document.querySelectorAll(".compilation__card");
for (let el of use_rcompilationCard) {
    el.addEventListener("click", function () {
        view_modalWindow("Переход на другую страницу");
    });
}



hidden_modalWindow();

// -- Modal window use


// Form function --
function subscriptionHandleFormSubmit(event) {
    event.preventDefault();
    const email_input = document.querySelector(".subscription__email");
    view_modalWindow(`Подписка на ${email_input.value}`)
}

const subscriptionForm = document.querySelector('.subscription__form')
subscriptionForm.addEventListener('submit', subscriptionHandleFormSubmit)

function recipesHandleFormSubmit(event) {
    event.preventDefault();

    //1 разновидность
    const sel_varity = document.querySelector("#sel-varyti").value;

    //2 Блюдо
    const sel_dish = document.querySelector("#sel-dish").value;

    //3 Кухня
    const sel_kitchen = document.querySelector("#sel-kitchen").value;

    //4  Меню
    const sel_menu = document.querySelector("#sel-menu").value;

    //5  Сложность
    const sel_difficulty = document.querySelector("#sel-difficulty").value;

    //Строка ввода
    const otherParams = document.querySelector(".select-form__params-input").value;

    if (otherParams.length < 1) {
        view_modalWindow(`Заполните поле "Ингриденты, детали" `);
        return
    }
    //view_modalWindow(`Отарпвленно \n ${otherParams.value}`)

    const result = `Отправка формы:`
    const result2 = `Разновидность: <span class="cursive modal-window__text"> ${sel_varity}</span>`
    const result3 = `блюдо: <span class="cursive modal-window__text"> ${sel_dish}</span>`
    const result4 = `Кухня: <span class="cursive modal-window__text"> ${sel_kitchen}</span>`
    const result5 = `Меню: <span class="cursive modal-window__text"> ${sel_menu}</span>`
    const result6 = `Сложность: <span class="cursive modal-window__text">  ${sel_difficulty}</span>`
    const result7 = `Ингридиенты, детали: <span class="cursive modal-window__text">${otherParams}</span>`
    view_modalWindow(result, result2, result3, result4, result5, result6, result7);
    console.log(sel_varity);
}

const recipesForm = document.querySelector('.select-form')
recipesForm.addEventListener('submit', recipesHandleFormSubmit)


// -- Form function



// Like recipes click --


const likes_btns = document.querySelectorAll(".recipes__likes");
const likes_obj = [];
for (let el of likes_btns) {
    let obj = {
        obj: el,
        value: parseInt(el.outerText)
    };
    likes_obj.push(obj);
}
for (let el of likes_obj) {
    el.obj.addEventListener("click", function () {
        el.obj.classList.add("scale-two");
        if (parseInt(el.obj.outerText) <= el.value) {
            el.obj.textContent = el.value + 1;
            el.obj.classList.add("recipes__likes_clicked");
        }
        else {
            el.obj.textContent = el.value;
            el.obj.classList.remove("recipes__likes_clicked");
        }
        setTimeout(() => {
            el.obj.classList.remove("scale-two");
        }, 300);


    });
}

// -- Like recipes click