import Task from '../models/task.js'

export async function createTask(req, res) {
    const {
        name,
        done,
        project_id
    } = req.body

    try {
        let newTask = await Task.create({
            name,
            done,
            project_id
        }, {
            fields: ['name', 'done', 'project_id']
        })
        if (newTask) {
            return res.json({
                message: 'Task created successfully',
                data: newTask
            })
        }

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export async function getTasks(req, res){
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'project_id', 'name', 'done' ],
            order: [
                ['id', 'DESC']
            ]
        })
        res.json({
            data: tasks
        })
    } catch (e) {
        console.log(e)
    }
}

export async function getOneTask(req, res){
    const { id } = req.params
    try {
        const task = await Task.findOne({
            where: {
                id
            }
        })
        return res.json({
            data: task
        })
    } catch (e) {
        console.log(e)
    }
}

export async function deleteTask(req, res){
    const { id } = req.params
    try {
        const deleteRowCount = await Task.destroy({
            where: {
                id
            }
        })
        return res.json({
            message: 'Task deleted succesfully',
            count: deleteRowCount
        })
    } catch (e) {
        console.log(e)
    }
}

export async function updateTask(req, res) {
    const { id } = req.params
    const {
        project_id,
        name,
        done
    } = req.body
    
    const tasks = await Task.findAll({
        attributes: ['id', 'project_id', 'name', 'done'],
        where:{
            id
        }
    })

    if(tasks.length > 0) {
        tasks.forEach(async task => {
            await task.update({
                name,
                done,
                project_id
            })
        })
    }

    return res.json({
        message: 'Task updated successfully',
        data: tasks
    })
}

export async function getTasksByProject(req, res){
    const { project_id } = req.params

    const tasks = await Task.findAll({
        attributes: ['id', 'project_id', 'name', 'done'],
        where: {
            project_id
        }
    })

    res.json({
        tasks
    })
}