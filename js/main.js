// tostMessage
let tostMessage = document.getElementById('tost_message');

function tostOn(){
tostMessage.classList.add('activate');
setTimeout(function(){
    tostMessage.classList.remove('activate');
},2300);
}


const copyContent = async (name) => {
let text = document.getElementById(name).innerHTML;
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

// collapsible
function collapse(element) {
    // var before = document.getElementsByClassName("active")[0]               // 기존에 활성화된 버튼
    // if (before && document.getElementsByClassName("active")[0] != element) {  // 자신 이외에 이미 활성화된 버튼이 있으면
    //     before.nextElementSibling.style.maxHeight = null;   // 기존에 펼쳐진 내용 접고
    //     before.classList.remove("active");                  // 버튼 비활성화
    // }
    element.classList.toggle("active");         // 활성화 여부 toggle

    var content = element.nextElementSibling;
    if (content.style.maxHeight != 0) {         // 버튼 다음 요소가 펼쳐져 있으면
        content.style.maxHeight = null;         // 접기
    } else {
        content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
    }
}