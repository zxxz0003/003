// navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});








// 選取每個商品卡片並綁定點擊事件
document.querySelectorAll('.clothes > .row1 > div, .clothes > .row2 > div, .clothes > .row3 > div').forEach(item => {
    item.addEventListener('click', () => {
        // 獲取當前商品的詳細資訊
        const imgSrc = item.querySelector('img').src; // 商品圖片
        const title = item.querySelector('h2').textContent; // 商品名稱
        const price = item.querySelector('p').textContent; // 商品價格

        // 填充彈窗內容
        document.getElementById('modal-img').src = imgSrc;
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-price').textContent = price;

        // 顯示彈窗
        document.getElementById('product-modal').style.display = 'flex';
    });
});

// 關閉彈窗
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('product-modal').style.display = 'none';
});
