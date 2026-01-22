// navbar.js
(function() {
    function injectNavbar() {
        const navHTML = `
        <style>
            .nav-container { 
                background: white; 
                border-bottom: 1px solid #eee; 
                display: flex; 
                justify-content: center; 
                padding: 12px 0; 
                gap: 15px; 
                position: sticky; 
                top: 0; 
                z-index: 9999; /* 최상단 노출 보장 */
                width: 100%; 
            }
            .nav-item { 
                text-decoration: none; 
                color: #666; 
                font-size: 0.95rem; 
                font-weight: 600; 
                padding: 10px 20px; 
                border-radius: 25px; 
                transition: 0.3s; 
            }
            /* 하원님의 핑크색 강조 스타일 */
            .nav-item.active { 
                background: #e91e63 !important; 
                color: white !important; 
                box-shadow: 0 4px 10px rgba(233, 30, 99, 0.2); 
            }
            .nav-item:hover:not(.active) { background: #f8f9fa; }
        </style>
        <nav class="nav-container">
            <a href="index.html" class="nav-item" id="nav-index">홈</a>
            <a href="rating.html" class="nav-item" id="nav-rating">대회평점</a>
            <a href="schedule.html" class="nav-item" id="nav-schedule">대회일정</a>
            <a href="board.html" class="nav-item" id="nav-board">커뮤니티</a>
        </nav>
        `;

        // body 시작 지점에 삽입
        document.body.insertAdjacentHTML('afterbegin', navHTML);

        // 현재 페이지 활성화 로직
        const path = window.location.pathname;
        const page = path.split("/").pop() || "index.html";

        const navMap = {
            "index.html": "nav-index",
            "rating.html": "nav-rating",
            "schedule.html": "nav-schedule",
            "board.html": "nav-board"
        };

        const activeId = navMap[page] || "nav-index";
        const activeEl = document.getElementById(activeId);
        if (activeEl) activeEl.classList.add("active");
    }

    // 문서 로드 완료 시 실행
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectNavbar);
    } else {
        injectNavbar();
    }
})();