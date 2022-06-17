import { ADD, REMOVE } from "./action.type";

const reducer = (state, action)=> {
    switch(action.type){
        case ADD:
            return [...state, action.payload]
        case REMOVE:
            return state.filter(todo => (todo.id !== action.payload));
           
        default:
            return state;
    }
}
export default reducer;