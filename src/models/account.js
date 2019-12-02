import { Sequelize } from 'sequelize'
import { sequelize } from '../config/database'

const Account = sequelize.define('account', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    accounttype: {
        type: Sequelize.INTEGER
    },
    userid: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
})

export default Account
