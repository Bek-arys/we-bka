function greet(name: string | null | undefined ) {
    if (name)
        console.log(name.toUpperCase());
    else 
        console.log('Hola!');
}
greet('Bekarys')
greet(null)
greet(undefined)

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null: { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());
