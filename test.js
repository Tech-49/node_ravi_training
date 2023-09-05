const users = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Hardik" }
];

function getSingleCustomer() {
    return users[0];
}

// Request
const result = getSingleCustomer();
console.log(result)