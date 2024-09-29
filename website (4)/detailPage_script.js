window.onload = function() {
    // URL 파라미터에서 cardName 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const cardName = urlParams.get('cardName');
    console.log(cardName);

    // 카드 정보 (예시)
    const cardInfo = {
        'identity': {
            name: '[]dentity',
            price: '₩15,000',
            artist: 'KONAMI',
            description: '[]dentity자켓을 사용한 카드입니다',
            frontImage: 'image/card2_front.png',
            backImage: 'image/card2_back.png'
        },
        'akasha': {
            name: 'akasha',
            price: '₩15,000',
            artist: 'KONAMI',
            description: 'akasha자켓을 사용한 카드입니다',
            frontImage: 'image/card3_front.png',
            backImage: 'image/card3_back.png'
        }
    };

    // 선택한 카드 정보로 페이지를 업데이트
    if (cardInfo[cardName]) {
        document.getElementById('card-name').innerText = cardInfo[cardName].name;
        document.getElementById('card-price').innerText = cardInfo[cardName].price;
        document.getElementById('card-artist').innerText = '작가: ' + cardInfo[cardName].artist;
        document.getElementById('card-description').innerText = cardInfo[cardName].description;
        document.getElementById('front-image').src = cardInfo[cardName].frontImage;
        document.getElementById('back-image').src = cardInfo[cardName].backImage;
    } else {
        document.getElementById('card-name').innerText = 'Unknown Card';
    }
};
