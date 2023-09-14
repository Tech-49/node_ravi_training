const customers = [
    { id: 1, name: "mark", contact: "9978524896" },
    { id: 2, name: "ravi", contact: "9685458785" },
    { id: 3, name: "mahi", contact: "9899569854" },
    { id: 4, name: "hardik", contact: "8484569854" },
    { id: 5, name: "john", contact: "968722647" }
];

let customerId = 4;
const index = customers.findIndex(customer => customer.id === customerId);
console.log(index)