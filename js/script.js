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
        speed: 3000,
        interval: true,
        mouseOverImage: true,
        mouseOverDots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breackpoint: 992,
                settings: {
                    speedR: 3000,
                    intervalR: true,
                    mouseOverImageR: true,
                    mouseOverDotsR: true,
                    slidesToShowR: 1,
                    slidesToScrollR: 1,
                }
            },
            {
                breackpoint: 600,
                settings: {
                    speedR: 3000,
                    intervalR: true,
                    mouseOverImageR: true,
                    mouseOverDotsR: true,
                    slidesToShowR: 1,
                    slidesToScrollR: 1,
                }
            },
        ]
    });

});