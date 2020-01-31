"use strict";

function sayNumber() {
    let guessNum = prompt("Угадай число от 1 до 100", "");

  function getNum(num) {
  
    if (guessNum === null) {
      return alert('Игра окончена!');
    } else if(!Number(guessNum) || guessNum === '') {
      alert('Введите число!');
      sayNumber(num);
    } else if(guessNum > num) {
      alert('Загаданное число меньше.');
      sayNumber(num);
    } else if(guessNum < num) {
      alert('Загаданное число больше.');
      sayNumber(num);
    } else if(+guessNum === num) {
      alert('Поздравляю! Вы угадали!)');
    }
  }
  console.dir(getNum);
return getNum(50);
}

sayNumber();