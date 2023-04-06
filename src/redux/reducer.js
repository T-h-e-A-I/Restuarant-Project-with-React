
import { combineReducers } from 'redux'
import axios from "axios"
let initstate = {
    dishes: null,
    comments: null,
    selected_dish: null,
    modal: false
}
export let dishReducer = (dishState = null, action) => {
    if (action.type == "dishLoad") {
        dishState = action.payload;

    }
    return dishState;
}
export let commentReducer = (commentState = null, action) => {
    if (action.type == "commentLoad") {
        commentState = action.payload;
    }
    if (action.type == "ADD_COMMENT") {
        console.log(action.payload);
        axios.post("http://localhost:3001/comment", action.payload).then(response => console.log(response)).catch(error => console.log(error));
        return commentState.concat(action.payload);
    }
    return commentState;
}
export let modalReducer = (modalstate = initstate.modal, action) => {
    if (action.type === "toggle") {

        console.log(modalstate)
        return !modalstate
    } if (action.type === "select") {
        console.log("in modal select")
        return !modalstate
    }
    return modalstate
}
let selected_dish_reducer = (selected_dish_state = initstate.selected_dish, action) => {
    if (action.type === "select") {
        selected_dish_state = action.payload.item;
    }
    return selected_dish_state
}
export
    const reducers = combineReducers({
        dish: dishReducer,
        comment: commentReducer,
        modal: modalReducer,
        dishSelection: selected_dish_reducer
    })
export default reducers;