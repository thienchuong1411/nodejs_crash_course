/*
// create new fix obj
const person = {
    name: "chuong nguyen",
    age: 36
}

// export obj person
module.exports = person;
*/

// create new Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

module.exports = Person;