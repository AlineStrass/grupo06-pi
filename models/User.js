//1-salvar usuario na base de dados
//2-buscar o ususario pelo email (no processo do login)
//3-buscar usuario pelo id

const fs = require('fs');

const User = {
    usuario: "./database/users.json",
    
    //salvar usuario na base de dados
    create: function (userData) {
        let allUsers = this.getUsers();
        let newUser = {
            id: this.generateID(),
            ...userData
        }

        //captura o novo usuario e salva em newuser
        allUsers.push(newUser);
        //salvar o newUser no arquivo json
        fs.writeFileSync(this.usuario, JSON.stringify(allUsers, null, ' '));

        return newUser;
    },
    
    //adicinar novo usuario sem repetir o numero do id
    generateID: function () {
        let allUsers = this.getUsers();
        let lastUser = allUsers.pop();

        if(lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    getUsers: function() {
        return JSON.parse(fs.readFileSync(this.usuario, 'utf-8'))
    },

    findUserById: function(id) {
        let allUsers = this.getUsers();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findUserByField: function(field, value) {
        console.log('entrou')
        let allUsers = this.getUsers();
        let userFound = allUsers.find(oneUser => oneUser[field] === value);
        console.log(userFound)
        return userFound;

    }

}

module.exports = User;