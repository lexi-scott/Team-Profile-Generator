const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, employeeType, office) {
        super(name, id, email, employeeType)
        this.office = office;
    }

    getOffice() {
        return this.office
    };
}

module.exports = Manager