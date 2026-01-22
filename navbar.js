// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <style>
        .nav-container { background: white; border-bottom: 1px solid #eee; display: flex; justify-content: center; padding: 12px 0; gap: 15px; position: sticky; top: 0; z-index: 1000; width: 100%; }
        .nav-item { text-decoration: none; color: #666; font-size: 0.95rem; font-weight: 600; padding: 10px 20px; border-radius: 25px; transition: 0.3s; }
        .nav-item.active { background: #e91e63; color: white; box-shadow: 0 4px 10px rgba(233, 30, 99, 0.2); }
        .nav-item:hover:not(.active) { background: #f8f9fa; }
    </style>
    <nav class="nav-container">
        <a href="index.html" class="nav-item" id="nav-index">홈</a>
        <a href="rating.html" class="nav-item" id="nav-rating">대회평점</a>
        <a href="schedule.html" class="nav-item" id="nav-schedule">대회일정</a>
        <a href="board.html" class="nav-item" id="nav-board">커뮤니티</a>
    </nav>
    `;

    // body 최상단에 네비게이션 바 삽입
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 현재 페이지 경로에 따라 active 클래스 자동 부여
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    if (page === "index.html" || page === "") {
        document.getElementById("nav-index").classList.add("active");
    } else if (page === "rating.html") {
        document.getElementById("nav-rating").classList.add("active");
    } else if (page === "schedule.html") {
        document.getElementById("nav-schedule").classList.add("active");
    } else if (page === "board.html") {
        document.getElementById("nav-board").classList.add("active");
    }
});