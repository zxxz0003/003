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










// 選取每個商品卡片並綁定點擊事件
document.querySelectorAll('.clothes > .row1 > div, .clothes > .row2 > div, .clothes > .row3 > div').forEach(item => {
    item.addEventListener('click', () => {
        // 獲取當前商品的詳細資訊
        const imgSrc = item.querySelector('img').src; // 商品圖片
        const title = item.querySelector('h2').textContent; // 商品名稱
        const price = item.querySelector('.clo-name p').textContent; // 商品價格
        const description = item.querySelector('.clo-name h1').textContent; // 商品描述

        // 填充彈窗內容
        document.getElementById('modal-img').src = imgSrc;
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-price').textContent = price;
        document.getElementById('modal-description').textContent = description;

        // 顯示彈窗
        document.getElementById('product-modal').style.display = 'flex';
    });
});

// 關閉彈窗
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('product-modal').style.display = 'none';
});
