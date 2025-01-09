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
    const slider = document.querySelector('.slider');
    const blocks = document.querySelectorAll('.block');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 1; // 初始化顯示區塊 2

    const updateSlider = () => {
        // 每個區塊的總寬度計算包含 margin
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // 初始化時顯示區塊 2
    updateSlider();

    // 下一頁按鈕
    nextButton.addEventListener('click', () => {
        if (currentIndex < blocks.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // 循環到第一個區塊
        }
        updateSlider();
    });

    // 上一頁按鈕
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = blocks.length - 1; // 循環到最後一個區塊
        }
        updateSlider();
    });
});
