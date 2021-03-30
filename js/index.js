import {initSlider} from "./slider.js";
import {dropDown} from "./dropDown.js";
import {startVideo} from "./video.js";
import {scrollElements} from "./scrollToSection.js";
import {scrollSections} from "./scrollToSection.js";

$(document).ready(function () {
    initSlider();
    dropDown();
    startVideo();
    $(window).trigger('scroll');
    scrollElements();
});

$(window).on('scroll', function() {
    scrollSections();
});


