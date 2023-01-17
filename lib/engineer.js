const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role)
        this.github = github;
        this.htmlCard = () => {
            return `
            <div class="card">
            <div class="cardHeader">
              <h2>${this.name}</h2>
              <h3>${this.role}</h3>
            </div>
            <div class="cardInfo">
              <p>ID: ${this.id}</p>
              <p>Email: <a href = "mailto: ${this.email}">${this.email}</a></p>
              <p>Github: <a href = "https://github.com/${this.github}">${this.github}</a></p>
            </div>
            </div>`
        };
    }


    getGithub() {
        return this.github
    };
}

module.exports = Engineer