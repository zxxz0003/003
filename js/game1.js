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
    const battingNumbers = [
        { number: '1', name: 'First' },
        { number: '2', name: 'Second' },
        { number: '3', name: 'Third' },
        { number: '4', name: 'Fourth' },
        { number: '5', name: 'Fifth' },
        { number: '6', name: 'Sixth' },
        { number: '7', name: 'Seventh' },
        { number: '8', name: 'Eighth' },
        { number: '9', name: 'Ninth' },
    ];
    let currentIndex = 0;

    function showBattingOrder() {
        if (currentIndex < battingNumbers.length) {
            const orderElement = document.createElement('div');
            orderElement.className = 'batting-order';
            orderElement.style.animationDelay = `${currentIndex * 0.4}s`;

            // 加入數字和英文名稱
            orderElement.innerHTML = `
                <div>${battingNumbers[currentIndex].number}</div>
                <span>${battingNumbers[currentIndex].name}</span>
            `;

            battingOrderContainer.appendChild(orderElement);
            currentIndex++;
            setTimeout(showBattingOrder, 400); // 每0.4秒切換一次
        }
    }

    showBattingOrder(); // 開始顯示棒次
});