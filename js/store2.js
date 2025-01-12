// navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const openingAnimation = document.getElementById('opening-animation');
    const mainContent = document.getElementById('main-content');
    const body = document.body;

    // 等待動畫完成後隱藏動畫容器，顯示主頁內容並將背景變為白色
    setTimeout(() => {
        openingAnimation.style.display = 'none'; // 隱藏動畫容器
        mainContent.style.display = 'block'; // 顯示主頁內容
        body.style.transition = 'background-color 1s ease'; // 添加平滑過渡
        body.style.backgroundColor = 'white'; // 將背景設為白色
    }, 5800); // 確保與動畫總時長一致
});