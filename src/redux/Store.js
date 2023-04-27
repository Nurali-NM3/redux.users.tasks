import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import usersReducer from "./reducer/usersReducer";
import tasksReducer from "./reducer/tasksReducer";

const store = createStore(combineReducers({
       user: usersReducer,
       task: tasksReducer,
}),composeWithDevTools(applyMiddleware(thunk))

)
export default store