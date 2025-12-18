import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
    const [tasks, setTasks] = useState([
        {id: 'task-1', title: '1', isDone: false},
        {id: 'task-2', title: '1', isDone: true},
        {id: 'task-3', title: '1', isDone: false}
    ])

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const deleteAllTasks = () => {
        const isConfirmed = confirm('Удалить все?')

        if(isConfirmed){
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }

    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId){
                    return {...task, isDone}
                }

                return task
            })
        )
    }

    const filterTasks = (query) => {
        console.log('Search')
    }

    const addTask = () => {
       if (newTaskTitle.trim().length > 0){
           const newTask = {
               id: crypto?.randomUUID() ?? Date.now().toString(),
               title: newTaskTitle,
               isDone: false
           }

           setTasks([...tasks, newTask])
           setNewTaskTitle('')
       }
    }

    return(
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />
            <SearchTaskForm onSearchInput={filterTasks}/>
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({isDone}) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo