const { User } = require("../models");

const users = [
  {
    id: 1,
    username: "dasbootwolfhaumeacow",
    email: "dasbootwolfhaumeacow@gmail.com",
    password: "dFDkk92855pAAo",
  },
  {
    id: 2,
    username: "chocolatebarvirgafox",
    email: "chocolatebarvirgafox@gmail.com",
    password: "Rkfgjkl54635AA@",
  },
  {
    id: 3,
    username: "teavividunforgiven",
    email: "teavividunforgiven@gmail.com",
    password: "GDSFGO@12329",
  },
  {
    id: 4,
    username: "reddoughnutssalacia",
    email: "reddoughnutssalacia@gmail.com",
    password: "skajml#@#778",
  }
]

const seedUsers = () => User.bulkCreate(users, {individualHooks: true});

module.exports = seedUsers;
