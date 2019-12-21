import { Sequelize } from 'sequelize'
import { sequelize } from '../config/database'

export const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    project_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})

export default Task