//Task 1
// масив зі 105 елементів
//задача у тому, щоб розбити цей масив на масиви по 10 елементів у кожному
let numbers = [];
for (let i = 1; i <= 105; i++) {
    numbers.push(i)
}
let chunkSize = 10;
let result = [];
for (let j = 0; j <numbers.length; j += chunkSize) {
    result.push(numbers.slice(j, j + chunkSize));
}

console.log(result);

//Task 2
//Напишите if..else, соответствующий следующему switch:
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }
if (browser == 'Edge') {
    alert( "You've got the Edge!" );
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
     alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}

//Task 3
// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
         alert('Вы ввели число 1');
         break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

//Task 4
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

//Task 5
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min (a, b){
    if(a > b) {
      console.log(b)
    } else if (a < b){
      console.log(a)
    } else {
      console.log(a)
    }
}

//Task 6
//Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


//Task 7 
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); 
//Task 8
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );

//Task 9
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("вася") );
//Task 10
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );
//Task 11
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
  alert( sumTo(100) );
//Task 11
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  alert( factorial(5) ); 
//Task 12
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
function sum(a) {
    return function(b) {
      return a + b; 
    };
}
