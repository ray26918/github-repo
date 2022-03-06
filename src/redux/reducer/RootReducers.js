import { combineReducers } from "redux";
import UserReposReducer from "./UserReposReducer";

const rootReducer = combineReducers({
    userRepos: UserReposReducer,
})

export default rootReducer;