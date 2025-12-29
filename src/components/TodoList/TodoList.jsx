import TodoItem from "../TodoItem/TodoItem.jsx";
import {memo, useContext} from "react";
import {TasksContext} from "../../context/TasksContext.jsx";

const TodoList = (props) => {
    const { styles } = props

    const {
        tasks,
        filteredTasks,
    } = useContext(TasksContext)

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if(!hasTasks){
        return <div className={styles.emptyMessage}>Tasks are not yet</div>
    }

    if(hasTasks && isEmptyFilteredTasks){
        return <div className={styles.emptyMessage}>Tasks are found</div>
    }

    return(
        <ul className={styles.list}>
            { (filteredTasks ?? tasks).map((task) => (
                    <TodoItem
                        className = {styles.item}
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