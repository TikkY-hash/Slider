'use strict';

import slider from './slider';

document.addEventListener('DOMContentLoaded', () => {

    slider({
        container: '.wrapper',
        fields: '.slides__fields',
        slide: '.slide',
        nextArrow: '.next__arrow',
        prevArrow: '.prev__arrow',
        arrowsWrapper: '.inner__arrow',
        speed : 3000,
        interval: true,
        mouseOverImage: true,
        mouseOverDots : true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

});