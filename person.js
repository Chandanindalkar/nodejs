class Person {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(`hi ${this.name}`)
    }
}

module.exports = Person