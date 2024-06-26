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
        es: '¿Como te llamas?',
        ko: '이름이 뭐에요'
    },{
        es: 'Me llamo Hector',
        ko: '저는 헥토로 이에요'
    },{
        es: 'Mi nombre es Hector',
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
    }
];

let index = 0;
let language = 'ko';

const wordElement = document.querySelector('.word');
const beforeElement = document.querySelector('.btn--before');
const nextElement = document.querySelector('.btn--next');
const koElement = document.querySelector('.btn--ko');
const esElement = document.querySelector('.btn--es');

function start() {
    beforeElement.addEventListener('click', beforeWord);
    nextElement.addEventListener('click', nextWord);
    koElement.addEventListener('click', languageKorean);
    esElement.addEventListener('click', languageSpanish);
    
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

start();