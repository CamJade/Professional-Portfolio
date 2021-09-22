//create vaiables to use later in code
let navBtn = document.querySelector('.nav-toggle');
let navLinks = document.querySelectorAll('.navLink');

//need an event listener for hamburger button
navBtn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})