const wordList = [
    {
        es: 'Saludo',
        ko: '인사',
        section: '1'
    },{
        es: 'Hola',
        ko: '안녕하세요',
        section: '1'
    },{
        es: 'Encantado',
        ko: '반갑습니다',
        section: '1'
    },{
        es: '¿Cómo te llamas?',
        ko: '이름이 뭐에요?',
        section: '1'
    },{
        es: 'Me llamo Héctor',
        ko: '저는 엑토르 에요',
        section: '1'
    },{
        es: 'Mi nombre es Héctor',
        ko: '제 이름은 엑토르 에요',
        section: '1'
    },{
        es: 'Te veo luego',
        ko: '다음에 또 만나요',
        section: '1'
    },
    {
        es: 'Adiós (me voy)',
        ko: '안녕히 계세요',
        section: '1'
    },
    {
        es: 'Adiós (se va)',
        ko: '안녕히 가세요',
        section: '1'
    },{
        es: 'Gracias',
        ko: '감사합니다',
        section: '1'
    },{
        es: 'Lo siento',
        ko: '죄송합니다',
        section: '1'
    },{
        es: 'Ok',
        ko: '괜찮습니다',
        section: '1'
    },{
        es: 'Si',
        ko: '네',
        section: '1'
    },{
        es: 'No',
        ko: '아니요',
        section: '1'
    },{
        es: '¿Cómo estás?',
        ko: '어떻게 지내세요?',
        section: '1'
    },{
        es: 'Estoy bien',
        ko: '저는 잘 지내요',
        section: '1'
    },{
        es: 'Numeros',
        ko: '숫자',
        section: '2'
    },{
        es: '1',
        ko: '일',
        section: '2'
    },{
        es: '2',
        ko: '이',
        section: '2'
    },{
        es: '3',
        ko: '삼',
        section: '2'
    },{
        es: '4',
        ko: '사',
        section: '2'
    },{
        es: '5',
        ko: '오',
        section: '2'
    },{
        es: '6',
        ko: '육',
        section: '2'
    },{
        es: '7',
        ko: '칠',
        section: '2'
    },{
        es: '8',
        ko: '팔',
        section: '2'
    },{
        es: '9',
        ko: '구',
        section: '2'
    },{
        es: '10',
        ko: '십',
        section: '2'
    },{
        es: '11',
        ko: '십일',
        section: '2'
    },{
        es: '12',
        ko: '십이',
        section: '2'
    },{
        es: '20',
        ko: '이십',
        section: '2'
    },{
        es: '21',
        ko: '이십일',
        section: '2'
    },{
        es: '30',
        ko: '삼십',
        section: '2'
    },{
        es: '100',
        ko: '백',
        section: '2'
    },{
        es: '200',
        ko: '이백',
        section: '2'
    },{
        es: '585',
        ko: '오백팔십오',
        section: '2'
    },{
        es: '1.000',
        ko: '천',
        section: '2'
    },{
        es: '10.000',
        ko: '만',
        section: '2'
    },{
        es: '100.000',
        ko: '십만',
        section: '2'
    },{
        es: '1.000.000',
        ko: '백만',
        section: '2'
    },{
        es: '10.000.000',
        ko: '천만',
        section: '2'
    },{
        es: '100.000.000',
        ko: '억',
        section: '2'
    },{
        es: '1 (contar)',
        ko: '하나',
        section: '3'
    },{
        es: '2 (contar)',
        ko: '둘',
        section: '3'
    },{
        es: '3 (contar)',
        ko: '셋',
        section: '3'
    },{
        es: '4 (contar)',
        ko: '넷',
        section: '3'
    },{
        es: '5 (contar)',
        ko: '다섯',
        section: '3'
    },{
        es: '6 (contar)',
        ko: '여섯',
        section: '3'
    },{
        es: '7 (contar)',
        ko: '일곱',
        section: '3'
    },{
        es: '8 (contar)',
        ko: '여덟',
        section: '3'
    },{
        es: '9 (contar)',
        ko: '아홉',
        section: '3'
    },{
        es: '10 (contar)',
        ko: '열',
        section: '3'
    },{
        es: '17 (contar)',
        ko: '열일곱',
        section: '3'
    },{
        es: '20 (contar)',
        ko: '스물',
        section: '3'
    },{
        es: '30 (contar)',
        ko: '서른',
        section: '3'
    },{
        es: '40 (contar)',
        ko: '마흔',
        section: '3'
    },{
        es: '50 (contar)',
        ko: '쉰',
        section: '3'
    },{
        es: '60 (contar)',
        ko: '예순',
        section: '3'
    },{
        es: '70 (contar)',
        ko: '일흔',
        section: '3'
    },{
        es: '80 (contar)',
        ko: '여든',
        section: '3'
    },{
        es: '90 (contar)',
        ko: '아흔',
        section: '3'
    },{
        es: 'Colores',
        ko: '색깔',
        section: '4'
    },{
        es: 'Rojo',
        ko: '빨강',
        section: '4'
    },{
        es: 'Color rojo',
        ko: '빨강색',
        section: '4'
    },{
        es: 'Naranja',
        ko: '주황',
        section: '4'
    },{
        es: 'Amarillo',
        ko: '노랑',
        section: '4'
    },{
        es: 'Verde',
        ko: '초록',
        section: '4'
    },{
        es: 'Azul',
        ko: '파랑',
        section: '4'
    },{
        es: 'Azul marino',
        ko: '남색',
        section: '4'
    },{
        es: 'Morado',
        ko: '보라',
        section: '4'
    },{
        es: 'Marron',
        ko: '갈색',
        section: '4'
    },{
        es: 'Rosa',
        ko: '분홍',
        section: '4'
    },{
        es: 'Verde claro',
        ko: '연두',
        section: '4'
    },{
        es: 'Azul cielo',
        ko: '하늘색',
        section: '4'
    },{
        es: 'Negro',
        ko: '검정',
        section: '4'
    },{
        es: 'Blanco',
        ko: '하양',
        section: '4'
    },{
        es: 'Gris',
        ko: '회색',
        section: '4'
    },{
        es: 'Claro',
        ko: '밝은',
        section: '4'
    },{
        es: 'Oscuro',
        ko: '어두운',
        section: '4'
    },{
        es: 'Comida',
        ko: '음식',
        section: '5'
    },{
        es: 'Arroz',
        ko: '밥',
        section: '5'
    },{
        es: 'Sopa',
        ko: '국',
        section: '5'
    },{
        es: 'Noodles',
        ko: '국수',
        section: '5'
    },{
        es: 'Carne',
        ko: '고기',
        section: '5'
    },{
        es: 'Steak',
        ko: '스테이크',
        section: '5'
    },{
        es: 'Pescado',
        ko: '생선',
        section: '5'
    },{
        es: 'Huevo',
        ko: '계란',
        section: '5'
    },{
        es: 'Queso',
        ko: '치즈',
        section: '5'
    },{
        es: 'Fruta',
        ko: '과일',
        section: '5'
    },{
        es: 'Verdura',
        ko: '야채',
        section: '5'
    },{
        es: 'Ensalada',
        ko: '샐러드',
        section: '5'
    },{
        es: 'Pan',
        ko: '빵',
        section: '5'
    },{
        es: 'Snack',
        ko: '과자',
        section: '5'
    },{
        es: 'Tarta',
        ko: '케이크',
        section: '5'
    },{
        es: 'Agua',
        ko: '물',
        section: '5'
    },{
        es: 'Leche',
        ko: '우유',
        section: '5'
    },{
        es: 'Zumo',
        ko: '주스',
        section: '5'
    },{
        es: 'Cafe',
        ko: '커피',
        section: '5'
    },{
        es: 'Cola',
        ko: '콜라',
        section: '5'
    },{
        es: 'Licor',
        ko: '술',
        section: '5'
    },{
        es: 'Cerveza',
        ko: '맥주',
        section: '5'
    },{
        es: 'Sal',
        ko: '소금',
        section: '5'
    },{
        es: 'Azucar',
        ko: '설탕',
        section: '5'
    },{
        es: 'Delicioso',
        ko: '맛있어요',
        section: '5'
    },{
        es: 'Es picante',
        ko: '매워요',
        section: '5'
    },{
        es: 'Es dulce',
        ko: '달아요',
        section: '5'
    },{
        es: 'Es salado',
        ko: '짜요',
        section: '5'
    },{
        es: 'Es amargo',
        ko: '써요',
        section: '5'
    },{
        es: 'Es agrio',
        ko: '셔요',
        section: '5'
    },{
        es: 'Familia',
        ko: '가족',
        section: '6'
    },{
        es: 'Madre',
        ko: '엄마',
        section: '6'
    },{
        es: 'Padre',
        ko: '아빠',
        section: '6'
    },{
        es: 'Hijo',
        ko: '아들',
        section: '6'
    },{
        es: 'Hija',
        ko: '딸',
        section: '6'
    },{
        es: 'Hermano mayor de chico',
        ko: '형',
        section: '6'
    },{
        es: 'Hermano mayor de chica',
        ko: '오빠',
        section: '6'
    },{
        es: 'Hermana mayor de chico',
        ko: '누나',
        section: '6'
    },{
        es: 'Hermana mayor de chica',
        ko: '언니',
        section: '6'
    },{
        es: 'Hermano/a menor',
        ko: '동생',
        section: '6'
    }
];

let shuffledList = [];

let index = 0;
let language = 'ko';

const wordElement = document.querySelector('.word');
const beforeElement = document.querySelector('.btn--before');
const nextElement = document.querySelector('.btn--next');
const koElement = document.querySelector('.btn--ko');
const esElement = document.querySelector('.btn--es');
const soundElement = document.querySelector('.btn--sound');
const selectElement = document.querySelector('.select');
const penElement = document.querySelector('.btn--pen');
const bookElement = document.querySelector('.btn--book');
const modalBackgroundElement = document.querySelector('.modalBackground');
const modalElement = document.querySelector('.modal');
const tableElement = document.querySelector('tbody');
const popupElement = document.querySelector('.popup');

function start() {
    beforeElement.addEventListener('click', beforeWord);
    nextElement.addEventListener('click', nextWord);
    koElement.addEventListener('click', languageKorean);
    esElement.addEventListener('click', languageSpanish);
    soundElement.addEventListener('click', converToSpeech);
    selectElement.addEventListener('change', selectSection);
    modalBackgroundElement.addEventListener('click', hideModal);
    bookElement.addEventListener('click', showModal);
    penElement.addEventListener('click', writeWord);
    tableElement.addEventListener('click', handleClickOnTable);
    modalElement.addEventListener('click', ev => ev.stopPropagation())
    
    shuffledList = [...wordList];
    shuffle(shuffledList);
    wordElement.innerHTML = shuffledList[index][language];

    restoreTableFromMemory();
}

function beforeWord() {
    index = (index === 0) ? 0 : index - 1;
    wordElement.innerHTML = shuffledList[index][language];
}

function nextWord() {
    index = (index === shuffledList.length - 1) ? shuffledList.length - 1 : index + 1;
    wordElement.innerHTML = shuffledList[index][language];
}

function languageKorean() {
    language = 'ko';
    wordElement.innerHTML = shuffledList[index][language];
}

function languageSpanish() {
    language = 'es';
    wordElement.innerHTML = shuffledList[index][language];
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
    //msg.lang = language === 'ko' ? 'ko-KR' : 'es-ES';
    msg.lang = 'ko-KR';
    msg.rate = 0.5;
    msg.text = shuffledList[index]['ko'];
    window.speechSynthesis.speak(msg);
}

function selectSection(ev) {
    const section = ev.target.value;
    if(section) {
        shuffledList = wordList.filter(word => word.section === section);
    } else {
        shuffledList = [...wordList];
    }
    shuffle(shuffledList);
    index = 0;
    wordElement.innerHTML = shuffledList[index][language];
}

function hideModal() {
    modalBackgroundElement.classList.add('hidden');
    saveTableOnMemory();
}

function showModal() {
    if(!tableElement.innerHTML.trim()) return;
    modalBackgroundElement.classList.remove('hidden');
    saveTableOnMemory();
}

function writeWord() {
    const row = `
            <tr>
                <td><strong>${shuffledList[index]['ko']}</strong></td>
                <td>${shuffledList[index]['es']}</td>
                <td class="delete">❌</td>
            </tr>
        `;
    if(tableElement.innerHTML.includes(row)) return;
    tableElement.insertAdjacentHTML("beforeend", row);
    popupElement.classList.remove('hidden');
    setTimeout(() => popupElement.classList.add('hidden'), 1000);
}

function handleClickOnTable(ev) {
    const deleteButton = ev.target.closest('.delete');
    if(!deleteButton) return;
    deleteButton.closest('tr').remove();
    if(!tableElement.innerHTML.trim()) hideModal();
}

function saveTableOnMemory() {
    localStorage.setItem('table', tableElement.innerHTML);
}

function restoreTableFromMemory() {
    tableElement.innerHTML = localStorage.getItem('table');
}

start();