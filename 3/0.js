// 获取元素
const startBtn = document.getElementById("start-btn");
const ball = document.getElementById("ball");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const timeLeftDisplay = document.getElementById("time-left");
const bat = document.getElementById("bat");

let score = 0;
let gameTime = 60; // 游戏总时长 60 秒
let ballPositionX = 300; // 弹珠的X轴位置
let ballPositionY = -30; // 弹珠的初始Y轴位置
let ballSpeedY = 0; // 弹珠的Y轴速度（向下）
let gravity = 0.5; // 重力（控制下落速度）
let ballHit = false; // 球是否被击打
let gameInterval, timeInterval, isGameRunning = false;

// 函数：更新剩余时间
function updateTime() {
    gameTime--;
    timeLeftDisplay.textContent = gameTime;
    if (gameTime <= 0) {
        clearInterval(timeInterval);
        clearInterval(gameInterval);
        alert("游戏结束！您的得分是：" + score);
        isGameRunning = false;
        startBtn.textContent = "重新开始";
    }
}

// 函数：开始游戏
function startGame() {
    if (isGameRunning) return; // 防止重复点击
    isGameRunning = true;
    score = 0;
    gameTime = 60;
    ballPositionX = 300;
    ballPositionY = -30;
    ballSpeedY = 0;
    ballHit = false;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = gameTime;
    startBtn.textContent = "游戏中...";

    // 启动时间倒计时
    timeInterval = setInterval(updateTime, 1000);

    // 启动游戏循环
    gameInterval = setInterval(gameLoop, 10);
}

// 游戏循环：更新弹珠的位置
function gameLoop() {
    // 应用重力
    ballSpeedY += gravity;

    // 更新弹珠的Y坐标
    ballPositionY += ballSpeedY;
    ball.style.top = ballPositionY + "px";
    ball.style.left = ballPositionX + "px";

    // 反弹逻辑：碰到底部时弹起
    if (ballPositionY >= gameArea.offsetHeight - ball.offsetHeight) {
        ballPositionY = gameArea.offsetHeight - ball.offsetHeight; // 保证球不穿透底部
        ballSpeedY = -ballSpeedY * 0.8; // 反弹，并减缓速度
    }

    // 如果球掉出屏幕，重置位置
    if (ballPositionY > gameArea.offsetHeight) {
        ballPositionY = -30; // 重新放回顶部
        ballSpeedY = 0; // 重置速度
    }
}

// 监听鼠标点击来控制击球
bat.addEventListener("click", function() {
    if (ballPositionY >= gameArea.offsetHeight - ball.offsetHeight) {
        score++; // 每次击球得分
        scoreDisplay.textContent = score;

        // 模拟球被击中后反弹
        ballSpeedY = -10; // 向上反弹
    }
});

// 按钮点击开始游戏
startBtn.addEventListener("click", function() {
    if (!isGameRunning) {
        startGame();
    } else {
        // 游戏已经在进行中，点击重新开始
        location.reload();
    }
});
