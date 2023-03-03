var a;
a = 2;
var user = {
    name: 'User 1',
    age: 20
};
// console.log(user.address); // error
/*
    int sum (int a, int b) {
        return a + b;
    }
*/
function summa(n1, n2) {
    return n1 + n2;
}
console.log(summa(2, 3));
// console.log(summa('2', 5)); 
function greeting(fname, lname) {
    if (lname === void 0) { lname = 'asd'; }
    console.log("Hi ".concat(fname, " ").concat(lname, "."));
}
function sayHi(user) {
    console.log("Hi ".concat(user.name, "!"));
}
greeting('KBTU', 'SITE');
sayHi(user);
sayHi({ name: 'Bekarys', age: 19 });
