const { User } = require('../models');

const userData = [{
        username: 'Kyla',
        password: 'kyla'

    },
    {
        username: 'Dallas',
        password: 'dallas'
    },
    {
        username: 'Carron',
        password: 'carron'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;