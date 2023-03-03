let a: number;
a = 2;

// a = "hello" // error

interface User {
    name: string;
    age: number; 
}

let user: User = {
    name: 'User 1',
    age: 20
}

// console.log(user.address); // error

/*
    int sum (int a, int b) {
        return a + b;
    }
*/

function summa(n1: number, n2: number): number {
    return n1 + n2;
}

console.log(summa(2, 3));

// console.log(summa('2', 5)); 


function greeting(fname, lname = 'asd') {
    console.log(`Hi ${fname} ${lname}.`);
}

function sayHi(user: User) {
    console.log(`Hi ${user.name}!`);
}

greeting('KBTU', 'SITE')

sayHi(user)
sayHi({name: 'Bekarys', age: 19})


