export const ADD = "add";
export const REMOVE = "remove";


export function reducer(state, action){
    switch(action.type){
        case ADD:
            return state.push(action.payload);
        case REMOVE:
            return state.filter(todo => (todo.id !== action.payload));
        default:
            return state;
    }
}