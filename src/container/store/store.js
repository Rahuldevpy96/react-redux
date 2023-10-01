import { createStore } from "redux"
import BookReducer from "../reducer/BookReducer"
const store = createStore(BookReducer)

export default store;
