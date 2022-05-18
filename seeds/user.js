const { User } = require("../models");

const users = [
  {
    id: 548937598347,
    username: "dasbootwolfhaumeacow",
    email: "dasbootwolfhaumeacow@gmail.com",
    password: "dFDkk92855pAAo",
  },
  {
    id: 47894687522,
    username: "chocolatebarvirgafox",
    email: "chocolatebarvirgafox@gmail.com",
    password: "Rkfgjkl54635AA@",
  },
  {
    id: 89768965653,
    username: "teavividunforgiven",
    email: "teavividunforgiven@gmail.com",
    password: "GDSFGO@12329",
  },
  {
    id: 86746351329,
    username: "reddoughnutssalacia",
    email: "reddoughnutssalacia@gmail.com",
    password: "skajml#@#778",
  }
]

const seedUsers = () => User.bulkCreate(users);

module.exports = seedUsers;
