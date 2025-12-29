import Field from "../Field/Field.jsx";
import {useContext} from "react";
import {TasksContext} from "../../context/TasksContext.jsx";

const SearchTaskForm = (props) => {
    const { styles } = props

    const {
        searchQuery,
        setSearchQuery,
    } = useContext(TasksContext)

    return(
        <form
            className={styles.form}
            onSubmit={(event) => event.preventDefault()}
        >
           <Field
                className ={styles.field}
                id = "search-task"
                label = "Search task"
                type = "search"
                value = {searchQuery}
                onInput = {(event) => setSearchQuery(event.target.value)}
           />
        </form>
    )
}

export default SearchTaskForm