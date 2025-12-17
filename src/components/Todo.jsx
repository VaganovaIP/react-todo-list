import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
    const tasks = [
        {id: 'task-1', title: '1', isDone: false},
        {id: 'task-2', title: '1', isDone: true},
        {id: 'task-3', title: '1', isDone: false}
    ]

    const deleteAllTasks = () => {
        return 0
    }

    const deleteTask = (taskId) => {
        console.log('Delete task')
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log('Toggle task')
    }

    return(
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
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