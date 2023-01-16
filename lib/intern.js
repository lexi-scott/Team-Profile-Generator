const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, employeeType, school) {
        super(name, id, email, employeeType)
        this.school = school;
    }

    getSchool() {
        return this.school
    };
}

test = new Intern("Lexi", 123, "lexi@lexi.com", "Intern", "UCB")
console.log(test)
module.exports = Intern