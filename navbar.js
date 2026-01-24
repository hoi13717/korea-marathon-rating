/**
 * 🏃 RunStandard 공통 네비게이션 바
 * 홈, 대회, 대회순위(준비중), 커뮤니티 구성
 */

const drawNavbar = () => {
    const navbarHTML = `
    <nav style="
        background: white; 
        padding: 15px 0; 
        box-shadow: 0 2px 10px rgba(0,0,0,0.05); 
        position: sticky; 
        top: 0; 
        z-index: 1000;
        font-family: 'Pretendard', sans-serif;">
        <div style="max-width: 800px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 0 20px;">
            
            <a href="index.html" style="text-decoration: none; display: flex; align-items: center; gap: 8px;">
                <span style="color: #e91e63; font-size: 1.4rem; font-weight: 900; letter-spacing: -1px;">🏃 RunStandard</span>
            </a>

            <div style="display: flex; gap: 20px; align-items: center;">
                <a href="index.html" class="nav-item">홈</a>
                <a href="races.html" class="nav-item">대회</a>
                
                <div style="position: relative; cursor: default; color: #ccc; font-size: 0.95rem; font-weight: 700;">
                    대회순위
                    <span style="
                        position: absolute; 
                        top: -10px; 
                        right: -15px; 
                        background: #eee; 
                        color: #999; 
                        font-size: 0.6rem; 
                        padding: 2px 5px; 
                        border-radius: 4px;
                        white-space: nowrap;">Soon</span>
                </div>
                
                <a href="board.html" class="nav-item">커뮤니티</a>
            </div>
        </div>
    </nav>

    <style>
        .nav-item {
            text-decoration: none;
            color: #444;
            font-size: 0.95rem;
            font-weight: 700;
            transition: 0.2s;
        }
        .nav-item:hover {
            color: #e91e63;
        }
        /* 현재 페이지 활성화 표시 로직 (파일명 기준) */
        .nav-active {
            color: #e91e63 !important;
            border-bottom: 2px solid #e91e63;
            padding-bottom: 2px;
        }
    </style>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // 현재 페이지 강조 로직
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('nav-active');
        }
    });
};

// 페이지 로드 시 네비게이션 바 그리기
window.addEventListener('DOMContentLoaded', drawNavbar);