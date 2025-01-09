// navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const eventList = document.getElementById("eventList");
    const events = document.querySelectorAll(".event");
    const eventHeight = events[0].offsetHeight; // 單個事件高度

    // 克隆第一個事件，讓輪播無縫
    const firstEventClone = events[0].cloneNode(true);
    eventList.appendChild(firstEventClone);

    let currentIndex = 0;

    setInterval(() => {
        currentIndex++;
        eventList.style.transition = "transform 0.6s ease-in-out";
        eventList.style.transform = `translateY(-${currentIndex * eventHeight}px)`;

        // 重置到第一個
        if (currentIndex === events.length) {
            setTimeout(() => {
                eventList.style.transition = "none";
                eventList.style.transform = "translateY(0)";
                currentIndex = 0;
            }, 600); // 過渡時間 0.6 秒
        }
    }, 2000); // 每2秒切換一次
});
