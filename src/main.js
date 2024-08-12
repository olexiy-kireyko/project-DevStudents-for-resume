import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

// slick-carousel-yachts
$('.yachts-slider').slick({
  variableWidth: true,
  slidesToShow: 3,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        fade: true,
        variableWidth: false,
      },
    },
  ],
});

// slick-carousel-review
$('.review-slider').slick({
  variableWidth: true,
  slidesToShow: 3,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        fade: true,
        variableWidth: false,
      },
    },
  ],
});

//smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let link of links) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
});

//mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobMenu = document.getElementById('mobMenu');
const menuLinks = document.querySelectorAll('.mobile-menu a');
const mobHeader = document.querySelector('.header');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
    menuBtn.classList.remove('is-active');
    toggleHeaderFixed();
  });
});

function toggleHeaderFixed() {
  if (mobMenu.classList.contains('is-open')) {
    mobHeader.classList.add('is-fixed');
  } else {
    mobHeader.classList.remove('is-fixed');
  }
}

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobMenu.classList.toggle('is-open');
  toggleHeaderFixed();
});
