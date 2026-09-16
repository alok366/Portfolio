/**
 * PORTFOLIO APPLICATION ENGINE
 * Developer: Alok Panwar
 */

(function () {
  'use strict';

  // ==========================================================================
  // PROJECTS CATEGORY FILTER
  // ==========================================================================
  function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.cat-btn');
    const projectCards = document.querySelectorAll('.project-car-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ==========================================================================
  // SCROLL & ACTIVE NAVBAR TRACKING
  // ==========================================================================
  function setupScrollTriggers() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.festival-navbar');

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 200;

      // Navbar shadow on scroll
      if (navbar) {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      // Active Section Highlighter
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }

  // ==========================================================================
  // MOBILE NAVIGATION MENU
  // ==========================================================================
  function setupMobileNav() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
        });
      });
    }
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    setupProjectFilters();
    setupScrollTriggers();
    setupMobileNav();
  });

})();
