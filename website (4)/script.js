// 메뉴 토글 함수
function toggleMenu() {
    var menu = document.getElementById("menu");
    console.log(menu);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {    
        menu.style.display = "block";
    }
}

function gotoDetail(element) {
    // 클릭한 요소에서 data-name 속성 값을 가져옴
    let cardName = element.getAttribute('data-name');
    
    // URL 파라미터로 cardName 전달
    window.location.href = `detailPage.html?cardName=${encodeURIComponent(cardName)}`;
}


