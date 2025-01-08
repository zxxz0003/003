// navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});

// 點擊 g1 圖片觸發轉場動畫
document.querySelector('.transition-trigger').addEventListener('click', function (e) {
    e.preventDefault(); // 防止默認跳轉

    const overlay = document.querySelector('.transition-overlay');
    overlay.style.display = 'flex'; // 顯示轉場容器

    setTimeout(() => {
        overlay.classList.add('active'); // 啟用轉場動畫
    }, 10); // 延遲一點時間以觸發 CSS 動畫

    // 動畫結束後跳轉到目標頁面
    setTimeout(() => {
        window.location.href = this.href; // 跳轉到目標頁面
    }, 1500); // 延遲 1.5 秒，與動畫持續時間一致
});
