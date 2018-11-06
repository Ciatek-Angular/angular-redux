import { ITodo } from './todo'

import { ADD_TODO,REMOVE_TODO,REMOVE_ALL_TODOS } from './actions'

export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
}

export function rootReducer(state, action){
    switch(action.type) {
        case ADD_TODO:
        action.todo.id = state.todos.length + 1
        return Object.assign({}, state, {
            todos: state.todos.concat(Object.assign({}, action.todo)),
            lastUpdate: new Date()
        })

        case REMOVE_TODO:
        return Object.assign({}, state, {
            todos: state.todos.filter( (todo) => todo.id != action.id),
            lastUpdate: new Date()
        })

        case REMOVE_ALL_TODOS:
        return Object.assign({}, state, {
            todos: [],
            lastUpdate: new Date()
        })

    }
    return state
}