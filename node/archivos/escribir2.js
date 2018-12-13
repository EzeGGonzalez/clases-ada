const fs = require('fs');

let users = [
  { name: "user1", phone: "123" },
  { name: "user2", phone: "123" },
  { name: "user3", phone: "123" }
]

fs.writeFileSync('users.json', JSON.stringify(users));