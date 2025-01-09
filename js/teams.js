// navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});




/*隱藏navbar */
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // 向下滾動，隱藏導航欄
            navbar.classList.add('hidden');
        } else {
            // 向上滾動，顯示導航欄
            navbar.classList.remove('hidden');
        }
        lastScrollY = window.scrollY; // 更新滾動位置
    });
});









document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.internal-navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // 阻止默認行為
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // 平滑滾動
            }
        });
    });
});