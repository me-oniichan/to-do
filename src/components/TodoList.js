import { useContext } from "react"
import { todoContext } from "../context/Context"
import { REMOVE } from "../context/action.type"

const TodoList = () => {

    const { todos, dispatch}  = useContext(todoContext);
    console.log(todos);
    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <li className="list-group-item justify-content-between align-items-center" id={todo.id}>
                        {todo.value}
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                            dispatch({
                                type: REMOVE,
                                payload: todo.id
                            })
                        }}></button>
                    </li>
                ))
            }
        </ul>
    )
};

export default TodoList;