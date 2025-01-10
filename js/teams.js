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





/*----火球------*/ 

/*----火球------*/ 



// 取得畫布元素和上下文
const meteorCanvas = document.getElementById('meteorCanvas');
const meteorCtx = meteorCanvas.getContext('2d');
meteorCanvas.width = window.innerWidth;
meteorCanvas.height = window.innerHeight;

// 火球類
class Meteor {
    constructor(x, y, size, speed, opacity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.opacity = opacity;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.02 - 0.01;
        this.trail = [];
    }

    update() {
        this.y += this.speed;
        this.x += Math.sin(this.rotation) * 2;
        this.trail.push({ x: this.x, y: this.y });

        // 限制尾巴長度，改為 10
        if (this.trail.length > 10) {
            this.trail.shift();
        }
    }

    draw() {
        // 畫火球尾巴
        for (let i = 0; i < this.trail.length; i++) {
            const opacity = i / this.trail.length;
            meteorCtx.beginPath();
            meteorCtx.arc(this.trail[i].x, this.trail[i].y, this.size * (1 - opacity), 0, Math.PI * 2);
            meteorCtx.fillStyle = `rgba(255, ${Math.floor(150 * opacity)}, 0, ${opacity})`;
            meteorCtx.fill();
        }

        // 畫火球
        meteorCtx.beginPath();
        meteorCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        meteorCtx.fillStyle = 'rgba(255, 100, 0, 1)';
        meteorCtx.fill();
    }
}

// 火球陣列
const meteors = [];
const maxMeteors = 10; // 限制最多顯示 5 顆火球

// 創建火球
function createMeteor() {
    if (meteors.length < maxMeteors) { // 檢查目前火球數量
        const x = Math.random() * meteorCanvas.width;
        const y = -10;
        const size = Math.random() * 15 + 5;
        const speed = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.7 + 0.3;
        meteors.push(new Meteor(x, y, size, speed, opacity));
    }
}

// 動畫循環
function animateMeteors() {
    meteorCtx.clearRect(0, 0, meteorCanvas.width, meteorCanvas.height);

    // 更新並繪製所有火球
    for (let i = meteors.length - 1; i >= 0; i--) {
        const meteor = meteors[i];
        meteor.update();
        meteor.draw();

        // 當火球超出畫布或透明度為零時，從陣列中移除
        if (meteor.y > meteorCanvas.height || meteor.opacity <= 0) {
            meteors.splice(i, 1);
        }
    }

    requestAnimationFrame(animateMeteors);
}

// 每隔 300 毫秒生成火球
setInterval(createMeteor, 100);

// 初始化火球動畫
animateMeteors();
/*---------------冰-----------------------*/

const crystalCanvas = document.getElementById('crystalCanvas');
const crystalCtx = crystalCanvas.getContext('2d');
crystalCanvas.width = window.innerWidth;
crystalCanvas.height = window.innerHeight;

// 結晶類
class Crystal {
    constructor(x, y, size, speed, opacity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.opacity = opacity;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.02 - 0.01;
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        if (this.opacity > 0) {
            this.opacity -= 0.0005;
        }
    }

    draw() {
        crystalCtx.save();
        crystalCtx.translate(this.x, this.y);
        crystalCtx.rotate(this.rotation);
        crystalCtx.globalAlpha = this.opacity;

        crystalCtx.strokeStyle = `rgba(173, 216, 230, ${this.opacity})`;
        crystalCtx.lineWidth = 2;

        // 外層尖刺
        crystalCtx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = Math.cos(angle) * this.size;
            const y = Math.sin(angle) * this.size;
            crystalCtx.moveTo(0, 0);
            crystalCtx.lineTo(x, y);
        }
        crystalCtx.stroke();

        // 中間小結晶
        crystalCtx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = Math.cos(angle) * (this.size * 0.5);
            const y = Math.sin(angle) * (this.size * 0.5);
            crystalCtx.moveTo(0, 0);
            crystalCtx.lineTo(x, y);
        }
        crystalCtx.stroke();

        crystalCtx.restore();
    }
}

// 結晶陣列
const crystals = [];

// 創建結晶
function createCrystal() {
    const x = Math.random() * crystalCanvas.width;
    const y = -10;
    const size = Math.random() * 15 + 5;
    const speed = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.7 + 0.3;
    crystals.push(new Crystal(x, y, size, speed, opacity));
}

// 動畫循環
function animateCrystals() {
    crystalCtx.clearRect(0, 0, crystalCanvas.width, crystalCanvas.height);

    for (let i = crystals.length - 1; i >= 0; i--) {
        const crystal = crystals[i];
        crystal.update();
        crystal.draw();

        if (crystal.y > crystalCanvas.height || crystal.opacity <= 0) {
            crystals.splice(i, 1);
        }
    }

    requestAnimationFrame(animateCrystals);
}

// 每隔一定時間生成結晶
setInterval(createCrystal, 100);

// 初始化結晶動畫
animateCrystals();















