// Mini-project 1: Tic-tac-toe

// Переменные:
var message = document.querySelector('#message'); // сообщение для игроков
var btn = document.querySelector('#restart');     // кнопка "Начать сначала"
var cells = document.querySelectorAll('.cell');   // ячейки
var xWins = document.getElementById('х-wins');    // побед Х
var wins0 = document.getElementById('0-wins');    // побед 0
var draw = document.getElementById('draw');       // ничьи
var resultX = 0;
var result0 = 0;
var resultDraws = 0;

// Победные индексы
var index = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Кнопка "Начать сначала"
btn.addEventListener('click', function changePlayer() {
    if (message.innerHTML == 'Ход игрока: Х') {
        message.innerHTML = 'Ход игрока: 0'
    } else {
        message.innerHTML = 'Ход игрока: Х'
    }

    for (let cell of cells) {
        cell.innerHTML = '';
        cell.removeAttribute('style')
    }

})

// Сама игра
function game() {

    // Смена хода
    if (message.innerHTML == 'Ход игрока: Х') {
        this.innerHTML = 'X';
        message.innerHTML = 'Ход игрока: 0';
    } else {
        if (message.innerHTML == 'Ход игрока: 0') {
            this.innerHTML = '0';
            message.innerHTML = 'Ход игрока: Х';
        }
    }
    
    // Победа игрока Х
    for (i=0; i < index.length; i++) {
        var arr = index[i];
        if (cells[arr[0]].innerHTML == cells[arr[1]].innerHTML && cells[arr[1]].innerHTML == cells[arr[2]].innerHTML && cells[arr[0]].innerHTML == 'X') {
            message.innerHTML = 'Победа игрока: Х';
            cells[arr[0]].style.cssText = 'background-color: rgb(30, 240, 30);';
            cells[arr[1]].style.cssText = 'background-color: rgb(30, 240, 30);';
            cells[arr[2]].style.cssText = 'background-color: rgb(30, 240, 30);';
            resultX += 1;
            xWins.innerHTML = 'Побед игрока Х: ' + resultX;
        }
    }

    // Победа игрока 0
    for (i=0; i < index.length; i++) {
        var arr = index[i];
        if (cells[arr[0]].innerHTML == cells[arr[1]].innerHTML && cells[arr[1]].innerHTML == cells[arr[2]].innerHTML && cells[arr[0]].innerHTML == '0') {
            message.innerHTML = 'Победа игрока: 0';
            cells[arr[0]].style.cssText = 'background-color: rgb(30, 240, 30);';
            cells[arr[1]].style.cssText = 'background-color: rgb(30, 240, 30);';
            cells[arr[2]].style.cssText = 'background-color: rgb(30, 240, 30);';
            result0 += 1;
            wins0.innerHTML = 'Побед игрока 0: ' + result0;
        }
    }

    // Ничья
    if (cells[0].innerHTML != '' && cells[1].innerHTML != '' && cells[2].innerHTML != '' && cells[3].innerHTML != '' &&
    cells[4].innerHTML != '' && cells[5].innerHTML != '' && cells[6].innerHTML != '' && cells[7].innerHTML != '' && 
    cells[8].innerHTML != '') {
        message.innerHTML = 'Ничья';
        resultDraws += 1;
        draw.innerHTML = 'Ничьи: ' + resultDraws;
    }    
}

// Привязка игры к ячейкам
for (let cell of cells) {
    cell.addEventListener('click', game);
}
