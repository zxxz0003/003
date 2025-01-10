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







/*滾動到下面*/ 

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







document.addEventListener('DOMContentLoaded', () => {
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const overlays = document.querySelectorAll('.overlay');
    const closeButtons = document.querySelectorAll('.close-btn');

    // 打開對應的彈出視窗
    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const popupId = trigger.dataset.popup;
            const popup = document.querySelector(`.popup[data-popup="${popupId}"]`);
            const overlay = document.querySelector(`.overlay[data-popup="${popupId}"]`);

            if (popup && overlay) {
                popup.classList.remove('hidden');
                overlay.classList.remove('hidden');
            }
        });
    });

    // 點擊遮罩層關閉彈出視窗
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.add('hidden');
            const popup = document.querySelector(`.popup[data-popup="${overlay.dataset.popup}"]`);
            if (popup) popup.classList.add('hidden');
        });
    });

    // 點擊關閉按鈕關閉彈出視窗
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.parentElement;
            const popupId = popup.dataset.popup;
            const overlay = document.querySelector(`.overlay[data-popup="${popupId}"]`);

            popup.classList.add('hidden');
            if (overlay) overlay.classList.add('hidden');
        });
    });
});
