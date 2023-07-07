'use strict';

// -------------------------------
// HTML ELEMENT
// -------------------------------
const header = document.querySelector('[data-header]');
const sidebar = document.querySelector('[data-sidebar]');
const sidebarLink = document.querySelectorAll('[data-sidebar-link]');
const menuToggler = document.querySelectorAll('[data-toggler]');
const overlay = document.querySelector('[data-overlay]');


// OPEN MENU BAR WHEN YOU CLICK ON TOGGLE

for (let i = 0; i < menuToggler.length; i++) {

    menuToggler[i].addEventListener("click", ()=> {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        menuToggler[0].classList.toggle('active');
    })
    
}

// CLOSE MENU WHEN YOU CLICK MENU LINKS 
sidebarLink.forEach(link => {
    link.addEventListener('click', ()=> {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        menuToggler[0].classList.remove('active');
    })
});

window.addEventListener("scroll", ()=> {
    if (window.scrollY >= 20) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})