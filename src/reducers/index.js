import landLordsReducer from './landLordsReducer';
import { combineReducers } from 'redux'

export default combineReducers({
    landlords: landLordsReducer
})
