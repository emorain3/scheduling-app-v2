import timeWindowReducer from "./timeWindowReducer";
import dateReducer from "./dateReducer";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    timeWindowReducer,
    dateReducer
  })

  export default allReducers;