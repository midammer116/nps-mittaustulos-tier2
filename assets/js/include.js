/* ============================================================
   NPS Mittaustulos - Mobile Menu & Navigation
   ============================================================ */

(function() {
  'use strict';

  // --- Mobile Menu Toggle ---
  function initMobileMenu() {
    var toggle = document.getElementById('mobileToggle');
    var nav = document.getElementById('mainNav');
    if (toggle && nav) {
      toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
        toggle.classList.toggle('active');
      });

      // Close menu when clicking a link (mobile)
      var links = nav.querySelectorAll('a');
      links.forEach(function(link) {
        link.addEventListener('click', function() {
          nav.classList.remove('open');
          toggle.classList.remove('active');
        });
      });

      // Handle dropdown toggle on mobile
      var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
      dropdownToggles.forEach(function(dropToggle) {
        dropToggle.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            var dropdown = this.closest('.dropdown');
            if (dropdown) {
              dropdown.classList.toggle('active');
            }
          }
        });
      });
    }
  }

  // --- Set Active Navigation Link ---
  function setActiveNavLink() {
    var currentPage = window.location.pathname.split('/').pop();
    var links = document.querySelectorAll('.main-nav a:not(.contact-btn)');
    links.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href && href.indexOf(currentPage) !== -1 && currentPage !== '') {
        link.classList.add('active');
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState !== 'loading') {
    initMobileMenu();
    setActiveNavLink();
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      initMobileMenu();
      setActiveNavLink();
    });
  }

})();