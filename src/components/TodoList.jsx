import TodoItem from "./TodoItem";
import {memo} from "react";

const TodoList = (props) => {
    console.log('TodoList')
    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChange,
        filteredTasks,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
    } = props

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
                        ref={task.id ===  firstIncompleteTaskId ? firstIncompleteTaskRef : null}
                        onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                        onTaskCompleteChange={onTaskCompleteChange}
                    />
            ))}
        </ul>
    )
}

export default memo(TodoList)