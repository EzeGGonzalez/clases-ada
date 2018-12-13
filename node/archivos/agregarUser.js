const fs = require('fs');

let newUser = {
  name: "user4",
  phone: "1234567"
}

let users = fs.readFileSync('users.json');
users = JSON.parse(users);

if (!users.find(u => u.name === newUser.name)) {
  users.push(newUser);
}

fs.writeFileSync('users.json', JSON.stringify(users));