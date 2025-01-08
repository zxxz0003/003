document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.querySelector('.countdown-timer');

    // 初始時間：18 小時 25 分 30 秒
    let hours = 18;
    let minutes = 25;
    let seconds = 30;

    // 更新倒數計時
    function updateCountdown() {
        // 減少一秒
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            clearInterval(countdownInterval); // 停止倒數
            countdownElement.textContent = "時間到！"; // 顯示時間到
            return;
        }

        // 格式化時間顯示
        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        countdownElement.textContent = formattedTime;
    }

    // 每秒更新一次倒數
    const countdownInterval = setInterval(updateCountdown, 1000);

    // 初次執行以立即顯示時間
    updateCountdown();
});




// 選取左右圖片的父容器
document.querySelectorAll('.left, .right').forEach(item => {
    item.addEventListener('click', function () {
        // 添加 clicked 樣式
        this.classList.add('clicked');

        // 更新文字為「預測成功」
        const overlayText = this.querySelector('.overlay .text');
        overlayText.textContent = "預測成功";
    });
});


// navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});
