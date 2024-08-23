const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');
const navbarListWrapper = document.querySelector('.navbar-list-wrapper');

navbarShowBtn.addEventListener('click', () => {
    navbarListWrapper.classList.add('show');
});

navbarHideBtn.addEventListener('click', () => {
    navbarListWrapper.classList.remove('show');
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true, // Animation repeat
});

sr.reveal(`.header-intro, .section__detail-container, .container`);
sr.reveal(`.navbar-hide-btn, .instagram__flex, .data-table, .portfolio__grid, .portfolio__container2, .cards`, {delay: 600, scale: .5});
sr.reveal(`.portfolio__container1`, {delay: 1000, interval: 100});
sr.reveal(`.home__leaf`, {delay: 1200});
sr.reveal(`.home__tomato-1, .home__tomato-2`, {delay: 1400, interval: 100});
sr.reveal(`.footer, .portfolio__container h1, .portfolio__container p, ..portfolio__container1, .header1`, {interval: 100});