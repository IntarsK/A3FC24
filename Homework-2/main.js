// Level 1
let numbers = [4, 5, 6, 10, 14, 3, 2, 5, 6, 7, 99];

function sort(array, type) {
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (type === 'asc') {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            } else {
                if (array[j] < array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
    return array;
}

console.log(sort(numbers, 'asc'));
console.log(sort(numbers, 'desc'));


// Level 2

let numbers_two = [];

for (let i = 0; i <= 1000; i++) {
    numbers_two.push(generateNumber());
}

function sort(array, type) {
    array.sort(function (a, b) {
        return a - b;
    });

    if (type === 'desc') {
        array.reverse();
    }

    return array;
}

function generateNumber() {
    return Math.round(Math.random() * 1000);
}


console.log(sort(numbers_two, 'asc'));
console.log(sort(numbers_two, 'desc'));


// Level 3

let matrix = [];
function generateNumber() {
    return Math.round(Math.random() * 1000);
}

let size = 10;

for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
        matrix.push(generateNumber());
    }
}

let sum = 0;
let validIndex = [];

matrix.forEach(function (int, index) {
    // Get diagnal n + 1

    // * 0 0
    // 0 * 0
    // 0 0 *
    if (index % (size + 1) == 0) {
        sum += int;
    }

    // Gets Reverse diagnal n - 1

    // 0 0 *
    // 0 * 0
    // * 0 0 
    if (index == size || index % (size - 1) == 0) {
        sum += int;
    }
});

console.log(sum);