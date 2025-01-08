
// navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});



//下頁
document.addEventListener('DOMContentLoaded', () => {
    const table1 = document.getElementById('table1');
    const table2 = document.getElementById('table2');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    let currentPage = 1;

    const showTable = (page) => {
        if (page === 1) {
            table1.classList.remove('hidden');
            table2.classList.add('hidden');
            prevPageButton.disabled = true;
            nextPageButton.disabled = false;
        } else if (page === 2) {
            table1.classList.add('hidden');
            table2.classList.remove('hidden');
            prevPageButton.disabled = false;
            nextPageButton.disabled = true;
        }
    };

    // 點擊上一頁
    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showTable(currentPage);
        }
    });

    // 點擊下一頁
    nextPageButton.addEventListener('click', () => {
        if (currentPage < 2) {
            currentPage++;
            showTable(currentPage);
        }
    });

    // 初始化顯示第一頁
    showTable(currentPage);
});

