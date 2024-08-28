// tostMessage
let tostMessage = document.getElementById('tost_message');

function tostOn(){
tostMessage.classList.add('active');
setTimeout(function(){
    tostMessage.classList.remove('active');
},2000);
}

let text = document.getElementById('myText').innerHTML;
const copyContent = async () => {
try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
    tostOn();
} catch (err) {
    console.error('Failed to copy: ', err);
}
}


// kakaotalk sharing

function shareMessage() {
Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
    title: '지원과 주홍의 결혼식',
    description: '2024년 10월 13일 일요일 오후 2시\n용산가족공원 야외예식장',
    imageUrl:
        'https://jiwonjuhong.github.io/images/home.jpg',
    link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: 'https://jiwonjuhong.github.io/',
        webUrl: 'https://jiwonjuhong.github.io/',
    },
    },
    social: {
    },
    buttons: [
    {
        title: '청첩장 보기',
        link: {
        mobileWebUrl: 'https://jiwonjuhong.github.io/',
        webUrl: 'https://jiwonjuhong.github.io/',
        },
    },
    ],
});
}
