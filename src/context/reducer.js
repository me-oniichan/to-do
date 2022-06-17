export const ADD = "add";
export const REMOVE = "remove";


const reducer = (state, action)=> {
    switch(action.type){
        case ADD:
            return [...state, action.payload]
        case REMOVE:
            state.filter(todo => (todo.id !== action.payload));
            return [...state]
        default:
            return state;
    }
}
export default reducer;