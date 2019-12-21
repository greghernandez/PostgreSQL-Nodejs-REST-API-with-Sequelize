import { Sequelize } from 'sequelize'
import { sequelize } from '../config/database'
import { Task } from './Task'

export const Project = sequelize.define('project', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
})

Project.hasMany(Task, { foreignKey: 'projectId', sourceKey: 'id' })
Task.belongsTo(Project, { foreignKey: 'projectId', targetKey: 'id' })

export default Project