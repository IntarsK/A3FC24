// Level 1
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function devide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Expected outcome and their results
console.log(add(10, 10))        // 20
console.log(add(5, 5))          // 10

console.log(sub(10, 10))        // 0
console.log(sub(5, 1))          // 4

console.log(devide(10, 10))     // 1
console.log(devide(5, 3))       // 1.6666666666666667

console.log(multiply(10, 10))   // 100
console.log(multiply(5, 1))     // 5


// Level 2

function validate(a, b) {

    let isValid = typeof a == 'number' && typeof b == 'number';

    if (isValid){
        return isValid;
    }
    
    console.log('Arguemnts are invalid');

    return isValid;
}

function add(a, b) {

    if (validate(a,b)){
        return a + b;
    }
}

function sub(a, b) {

    if (validate(a,b)){
        return a - b;
    }
}

function devide(a, b) {

    if (validate(a,b)){
        return a / b;
    }
}

function multiply(a, b) {

    if (validate(a,b)){
        return a * b;
    }
}

// Expected outcome and their results
console.log(add(10, 10))        // 20
console.log(add(5, 5))          // 10

console.log(sub(10, 10))        // 0
console.log(sub(5, 1))          // 4

console.log(devide(10, 10))     // 1
console.log(devide(5, 3))       // 1.6666666666666667

console.log(multiply(10, 10))   // 100
console.log(multiply(5, 1))     // 5

console.log(add('a', 'b'))      // Arguemnts are invalid