document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".opening-image");
    const mainContent = document.getElementById("main-content");
    const openingAnimation = document.getElementById("opening-animation");
    const vectors = document.querySelectorAll(".vector, .vector2, .vector3, .vector4, .vector5, .vector6, .vector7, .vector8, .vector9, .vector10");

    let delay = 0;

    // 依序讓每張圖片淡入淡出
    images.forEach((image) => {
        image.style.animationDelay = `${delay}s`;
        delay += 0.5; // 每張圖片延遲1.5秒
    });

    // 等待所有動畫結束後切換到主頁
    const totalAnimationTime = delay; // 總動畫時間
    setTimeout(() => {
        openingAnimation.style.display = "none"; // 隱藏開場動畫
        mainContent.style.display = "block"; // 顯示主頁內容

        // 延遲啟動放射線動畫
        vectors.forEach(vector => {
            vector.style.animationPlayState = "running";
        });
    }, totalAnimationTime * 1000); // 轉換為毫秒
});



document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a"); // 獲取所有導航連結
    const player = document.getElementById("player"); // 獲取 player 圖片

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // 防止預設跳轉行為

            const href = this.getAttribute("href"); // 獲取目標頁面 URL

            // 顯示動畫
            player.style.display = "block";
            player.style.animation = "none"; // 停止舊動畫
            void player.offsetWidth; // 觸發重新渲染（重啟動畫）
            player.style.animation = "player-swing 2s ease-in-out forwards"; // 加入轉場動畫

            // 動畫結束後跳轉頁面
            setTimeout(() => {
                window.location.href = href; // 跳轉到目標頁面
            }, 2000); // 等待動畫結束（2秒後跳轉）
        });
    });
});











