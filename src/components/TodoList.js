import { useContext } from "react"
import { todoContext } from "../context/Context"
import { REMOVE } from "../context/reducer"

const TodoList = () => {

    const { dispatch, todos}  = useContext(todoContext);
    console.log(todos);
    // return <div>{todos}</div>;
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