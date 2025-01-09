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
    const battingOrderContainer = document.getElementById('battingOrder');

    // 定義兩組棒次
    const battingGroups = [
        {
            numbers: [
                { number: '一', name: 'James' },
                { number: '二', name: 'Michael' },
                { number: '三', name: 'William' },
                { number: '四', name: 'Ethan' },
                { number: '五', name: 'Alexander' },
                { number: '六', name: 'Daniel' },
                { number: '七', name: 'Matthew' },
                { number: '八', name: 'Andrew' },
                { number: '九', name: 'Christopher' },
            ],
            color: '#DA7D2C', // 第一組顏色
        },
        {
            numbers: [
                { number: '一', name: 'John' },
                { number: '二', name: 'David' },
                { number: '三', name: 'Ryan' },
                { number: '四', name: 'Chris' },
                { number: '五', name: 'Luke' },
                { number: '六', name: 'Mark' },
                { number: '七', name: 'Jason' },
                { number: '八', name: 'Tom' },
                { number: '九', name: 'Steve' },
            ],
            color: '#15539B', // 第二組顏色
        },
    ];

    // 顯示一組棒次動畫
    function showBattingOrder(group, callback) {
        const { numbers, color } = group;
        let currentIndex = 0;

        function displayNext() {
            if (currentIndex < numbers.length) {
                const orderElement = document.createElement('div');
                orderElement.className = 'batting-order';
                orderElement.style.backgroundColor = color; // 設定背景顏色
                orderElement.style.animationDelay = `${currentIndex * 0.4}s`;

                // 設定內容
                orderElement.innerHTML = `
                    <div>${numbers[currentIndex].number}棒</div>
                    <span>${numbers[currentIndex].name}</span>
                `;

                battingOrderContainer.appendChild(orderElement);
                currentIndex++;

                // 顯示下一個棒次
                setTimeout(displayNext, 200);
            } else {
                // 當前組結束後執行回呼
                if (callback) callback();
            }
        }

        displayNext();
    }

    // 開始顯示第一組，計算完整動畫時間後再顯示第二組
    const firstGroupDuration = battingGroups[0].numbers.length * 400; // 每棒 400ms
    showBattingOrder(battingGroups[0], () => {
        // 延遲第一組動畫時間 + 額外延遲時間
        setTimeout(() => {
            showBattingOrder(battingGroups[1]);
        }, firstGroupDuration + 100); // 第一組完成後延遲 1 秒
    });
});
