const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, role, office) {
        super(name, id, email, role)
        this.office = office;
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
              <p>Office: ${this.office}</p>
            </div>
            </div>`
        };
    }

    getOffice() {
        return this.office
    };
}

module.exports = Manager