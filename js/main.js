const btn = document.querySelector('.mobile-nav-button');
const icon = document.querySelector('.mobile-nav-button__icon');
const menu = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');

btn.addEventListener('click', function () {
    icon.classList.toggle('active');
    menu.classList.toggle('active');
    logo.classList.toggle('visually-hidden');
    document.body.classList.toggle('no-scroll');


})


$(function () {
    $('.programs__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="images/prpgrams-arrow-left.svg"> </button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/prpgrams-arrow-right.svg"> </button>',

        centerMode: true,
        centerPadding: '420px',
        slidesToShow: 3,
        adaptiveHeight: true,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 667,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    centerPadding: '2px',
                }
            },
            {
                breakpoint: 450,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerPadding: false,
                    infinite: true,
                    speed: 300,
                    adaptiveHeight: true
                }
            },

        ]
    });
});


const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}