import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import useTasksLocalStorage from "./useTasksLocalStorage.js";

const useTasks = () => {
    const {
        saveTasks,
        savedTasks,
    } = useTasksLocalStorage()

    const [tasks, setTasks] = useState(savedTasks ?? [
        {id: 'task-1', title: '1', isDone: false},
        {id: 'task-2', title: '1', isDone: true},
        {id: 'task-3', title: '1', isDone: false}
    ])

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const newTaskInputRef = useRef(null)

    const deleteAllTasks = useCallback(() => {
        const isConfirmed = confirm('Удалить все?')

        if(isConfirmed){
            setTasks([])
        }
    }, [])

    const deleteTask = useCallback((taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }, [tasks])

    const toggleTaskComplete = useCallback((taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId){
                    return {...task, isDone}
                }

                return task
            })
        )
    }, [tasks])

    const addTask = useCallback(() => {
        if (newTaskTitle.trim().length > 0){
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }

            setTasks((prevTasks) => [...prevTasks, newTask])
            setNewTaskTitle('')
            setSearchQuery('')
            newTaskInputRef.current.focus()
        }
    }, [newTaskTitle])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
        saveTasks(tasks)
    }, [])


    const filteredTasks = useMemo( () => {
        const clearSearchQuery = searchQuery.trim()

        return clearSearchQuery.length > 0
            ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
            : null
    }, [searchQuery, tasks])

    return(
        {
            tasks,
            filteredTasks,
            deleteTask,
            deleteAllTasks,
            toggleTaskComplete,

            newTaskTitle,
            setNewTaskTitle,
            searchQuery,
            setSearchQuery,
            newTaskInputRef,
            addTask,
        }
    )
}

export default useTasks