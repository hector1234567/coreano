const wordList = [
    {
        es: 'Saludo',
        ko: '인사'
    },{
        es: 'Hola',
        ko: '안녕하세요'
    },{
        es: 'Encantado',
        ko: '반갑습니다'
    },{
        es: '¿Cómo te llamas?',
        ko: '이름이 뭐에요?'
    },{
        es: 'Me llamo Héctor',
        ko: '저는 헥토로 이에요'
    },{
        es: 'Mi nombre es Héctor',
        ko: '제 이름은 헥토로 이에요'
    },{
        es: 'Te veo luego',
        ko: '다음에 또 만나요'
    },
    {
        es: 'Adiós (me voy)',
        ko: '안녕히 겨세요'
    },
    {
        es: 'Adiós (se va)',
        ko: '안녕히 가세요'
    },{
        es: 'Gracias',
        ko: '감사합니다'
    },{
        es: 'Lo siento',
        ko: '죄송합니다'
    },{
        es: 'Ok',
        ko: '괜잖 습니다'
    },{
        es: 'Si',
        ko: '네'
    },{
        es: 'No',
        ko: '아니요'
    },{
        es: '¿Cómo estás?',
        ko: '어똥게 지내세요?'
    },{
        es: 'Estoy bien',
        ko: '저는 잘 지내요'
    },{
        es: 'Numeros',
        ko: '숫자'
    },{
        es: '1',
        ko: '일'
    },{
        es: '2',
        ko: '이'
    },{
        es: '3',
        ko: '삼'
    },{
        es: '4',
        ko: '사'
    },{
        es: '5',
        ko: '오'
    },{
        es: '6',
        ko: '육'
    },{
        es: '7',
        ko: '칠'
    },{
        es: '8',
        ko: '팔'
    },{
        es: '9',
        ko: '구'
    },{
        es: '10',
        ko: '십'
    },{
        es: '11',
        ko: '십 일'
    },{
        es: '12',
        ko: '십 이'
    },{
        es: '20',
        ko: '이 십'
    },{
        es: '21',
        ko: '이 십 일'
    },{
        es: '30',
        ko: '삼 십'
    },{
        es: '100',
        ko: '백'
    },{
        es: '200',
        ko: '이 박'
    },{
        es: '585',
        ko: '오 백 팔 십 오'
    },{
        es: '1.000',
        ko: '천'
    },{
        es: '10.000',
        ko: '만'
    },{
        es: '100.000',
        ko: '십 만'
    },{
        es: '1.000.000',
        ko: '백 만'
    },{
        es: '10.000.000',
        ko: '천 만'
    },{
        es: '100.000.000',
        ko: '억'
    },{
            es: '1 (contar)',
        ko: '하 나'
    },{
        es: '2 (contar)',
        ko: '둘'
    },{
        es: '3 (contar)',
        ko: '셋'
    },{
        es: '4 (contar)',
        ko: '넷'
    },{
        es: '5 (contar)',
        ko: '다 섯'
    },{
        es: '6 (contar)',
        ko: '여 삿'
    },{
        es: '7 (contar)',
        ko: '일 곱'
    },{
        es: '8 (contar)',
        ko: '여 덟'
    },{
        es: '9 (contar)',
        ko: '아 홉'
    },{
        es: '10 (contar)',
        ko: '열'
    },{
        es: '17 (contar)',
        ko: '열 일 곱'
    },{
        es: '20 (contar)',
        ko: '스물'
    },{
        es: '30 (contar)',
        ko: '서른'
    },{
        es: '40 (contar)',
        ko: '마흔'
    },{
        es: '50 (contar)',
        ko: '쇤'
    },{
        es: '60 (contar)',
        ko: '여순'
    },{
        es: '70 (contar)',
        ko: '일흔'
    },{
        es: '80 (contar)',
        ko: '여든'
    },{
        es: '90 (contar)',
        ko: '아흔'
    },{
        es: 'Colores',
        ko: '색깔'
    },{
        es: 'Rojo',
        ko: '빨강'
    },{
        es: 'Color rojo',
        ko: '빨강 색'
    }
];

let index = 0;
let language = 'ko';

const wordElement = document.querySelector('.word');
const beforeElement = document.querySelector('.btn--before');
const nextElement = document.querySelector('.btn--next');
const koElement = document.querySelector('.btn--ko');
const esElement = document.querySelector('.btn--es');
const soundElement = document.querySelector('.btn--sound');

function start() {
    beforeElement.addEventListener('click', beforeWord);
    nextElement.addEventListener('click', nextWord);
    koElement.addEventListener('click', languageKorean);
    esElement.addEventListener('click', languageSpanish);
    soundElement.addEventListener('click', converToSpeech);
    
    shuffle(wordList);
    wordElement.innerHTML = wordList[index][language];
}

function beforeWord() {
    index = (index === 0) ? 0 : index - 1;
    wordElement.innerHTML = wordList[index][language];
}

function nextWord() {
    index = (index === wordList.length - 1) ? wordList.length - 1 : index + 1;
    wordElement.innerHTML = wordList[index][language];
}

function languageKorean() {
    language = 'ko';
    wordElement.innerHTML = wordList[index][language];
}

function languageSpanish() {
    language = 'es';
    wordElement.innerHTML = wordList[index][language];
}

function shuffle(array) {
    let currentIndex = array.length;
    
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function converToSpeech() {
    const msg = new SpeechSynthesisUtterance();
    msg.lang = language === 'ko' ? 'ko-KR' : 'es-ES'
    msg.text = wordList[index][language];
    window.speechSynthesis.speak(msg);
}

start();