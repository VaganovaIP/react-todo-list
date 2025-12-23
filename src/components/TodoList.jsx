import TodoItem from "./TodoItem";
import {memo, useContext} from "react";
import {TasksContext} from "../context/TasksContext.jsx";

const TodoList = () => {
    const {
        tasks,
        filteredTasks,
    } = useContext(TasksContext)

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if(!hasTasks){
        return <div className="todo__empty-message">Tasks are not yet</div>
    }

    if(hasTasks && isEmptyFilteredTasks){
        return <div className="todo__empty-message">Tasks are found</div>
    }

    return(
        <ul className="todo__list">
            { (filteredTasks ?? tasks).map((task) => (
                    <TodoItem
                        className = "todo__item"
                        key = {task.id}
                        id = {task.id}
                        title ={task.title}
                        isDone ={task.isDone}
                    />
            ))}
        </ul>
    )
}

export default memo(TodoList)