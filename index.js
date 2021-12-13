//Task 1
// масив зі 105 елементів
//задача у тому, щоб розбити цей масив на масиви по 10 елементів у кожному
let numbers = [];
for (let i = 1; i <= 105; i++) {
    numbers.push(i)
}
let chunkSize = 10;
function divideArray(array, size){
    let result = [];
    while (array.length) {
        result.push(array.splice(0, size));
    }
    size = 0;
    return result;
}
let result = divideArray(numbers, chunkSize);
console.log(result);

// If else
// Task 2
let num = prompt('');
if (num > 1) {
    alert('1')
} else if (num == 0) {
    alert('0')
} else {
    alert('-1')
}
//Task 3
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let result = (a + b < 4) ?  'Мало' : 'Много';


//Task 4
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';

//Operands 
//Task 5

if (age >= 14 && age <= 90);

//Task 6
if (!(age >= 14 && age <= 90));

//Task 7
if (age < 14 || age > 90);


true || false
true && false

1 && [] || 1 || false
[] || 1 || false

true && 'false' = 'false'
1 && [] = []
!![] = true
const nullish = null;
const zero = 0;
const emptyStr = '';
let empty;

function checkVal(val) {
	if (val) {
		return 'Exists';
	}

	return 'Not exists';
}

checkVal(zero); // 'Not exists'
checkVal(emptyStr); // 'Not exists'
checkVal(nullish); // 'Not exists'

function checkVal(val) {
	return val ?? 'Not Exists';
}

const obj = { a: 10};

obj.b?