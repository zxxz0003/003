// script.js
document.addEventListener("DOMContentLoaded", () => {
    const player = document.querySelector(".player");

    player.addEventListener("animationend", () => {
        player.style.animation = "player-swing-resume 1s ease-in-out forwards";
    });
});
