function toggleMenu() {
    const nav = document.querySelector('.header__nav');
    const menuIcon = document.querySelector('.menu-icon');
    const crossIcon = document.querySelector('.cross');

    nav.classList.toggle('open'); 

    if (nav.classList.contains('open')) {
        menuIcon.style.display = 'none';  
        crossIcon.style.display = 'block';  
    } else {
        menuIcon.style.display = 'block'; 
        crossIcon.style.display = 'none'; 
    }
}