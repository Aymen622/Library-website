'use strict';

/**
 * navbar toggle in moblile
 */

const /**{NodeElement} */ $navbar = document.querySelector("[data-navbar]")
const /**{NodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

/**
 * Header scroll state
 */
const /**{NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});


/**
 * Add favorite button toggle
 */

const /**{NodeList} */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});

/**
 * TYPES OF BOOK
 */

document.addEventListener('DOMContentLoaded', () => {
    const bookTypeSelect = document.getElementById('book-type');
    const cards = document.querySelectorAll('.book-card');
  
    bookTypeSelect.addEventListener('change', () => {
      const selectedType = bookTypeSelect.value;
      filterBooks(selectedType);
    });
  
    function filterBooks(type) {
      cards.forEach(card => {
        const bookType = card.getAttribute('data-type');
        if (type === 'all' || bookType === type) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  
    // Initially display all books
    filterBooks('all');
  });
  