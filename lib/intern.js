const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role)
        this.school = school;
        this.htmlCard = () => {
            return`
            <div class="card">
            <div class="cardHeader">
              <h2>${this.name}</h2>
              <h3>${this.role}</h3>
            </div>
            <div class="cardInfo">
              <p>ID: ${this.id}</p>
              <p>Email: <a href = "mailto: ${this.email}">${this.email}</a></p>
              <p>School: ${this.school}</p>
            </div>
            </div>`
        };
    }

    getSchool() {
        return this.school
    };
}

module.exports = Intern