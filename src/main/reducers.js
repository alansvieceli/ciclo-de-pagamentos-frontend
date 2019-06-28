import {combineReducers } from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({sumario: {credito: 100, debito: 45}})
})

export default rootReducer;