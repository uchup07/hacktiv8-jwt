const userData = __dirname + '/../../data/users.json';
const fs = require('fs');

class User {

    allUsers() {
        let data = fs.readFileSync(userData);
        let users = JSON.parse(data);
        return users;
    }

    saveUser(data) {
        let lastData = this.allUsers();
        let lastID = Math.max(...lastData.map(dt => dt.id));

        let newData = {
            "id": lastID + 1,
            "username": data.username,
            "email": data.email,
            "password": data.password
        }

        lastData.push(newData);

        let stringifyData = JSON.stringify(lastData);
        fs.writeFileSync(userData, stringifyData);
        
        // let user = JSON.parse(stringifyData);
        return newData;

    }

    updateUser(id, data) {
        let users = this.allUsers();
        let userUpdate;
        users.find(item => {
            if(item.id === Number(id)) {
                userUpdate = {
                    "username": ((data.username !== undefined) ? data.username : item.username),
                    "email": ((data.email !== undefined) ? data.email : item.email),
                    "password": ((data.password !== undefined) ? data.password : item.password)
                };
                item.username = userUpdate.username;
                item.email = userUpdate.email;
                item.password = userUpdate.password;
            }
        });
        
        users = JSON.stringify(users);
        fs.writeFileSync(userData, users);

        return userUpdate;

    }

    deleteUser(id) {
        let users = this.allUsers();
        let totalUser = users.length;
        users = users.filter(user => user.id != id);

        users = JSON.stringify(users);
        fs.writeFileSync(userData, users);

        let newData = JSON.parse(users);

        return newData;

    }
}

module.exports = User;