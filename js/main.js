// 스크롤 이벤트 리스너
window.addEventListener('scroll', () => {
    // 스크롤 위치가400px 이상일 때 위로 가기 버튼을 보이게 함
    if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById('btn-back-to-top').style.display = 'block';
    } else {
        document.getElementById('btn-back-to-top').style.display = 'none';
    }
});

  // 클릭 시 페이지 맨 위로 스크롤 (애니메이션 효과 추가)
function backToTop() {
    const position =
    document.documentElement.scrollTop || document.body.scrollTop;
    if (position) {
        window.requestAnimationFrame(() => {
        window.scrollTo(0, position - position / 10);
        backToTop();
    });
    }
}

const closeBtn = document.querySelector(".closeBtn");
const m_menu = document.querySelector(".m_menu");
const m_menuIcon = document.querySelector(".m_header_inner i");

closeBtn.addEventListener('click', ()=>{
    m_menu.style.display = 'none';
    document.documentElement.style.overflow = ''; 
    document.body.style.overflow = '';
});
m_menuIcon.addEventListener('click', ()=>{
    m_menu.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
});

