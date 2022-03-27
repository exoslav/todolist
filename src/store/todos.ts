import * as state from 'types/state';
import * as todosTypes from 'types/reducers/todos';
import { getTodoList as fetchTodoList } from 'service/routes/list';

export const initialStore = {
    list: [],
    loading: false,
    error: ''
};

export const TODO_LIST_FETCH_START = 'todos/TODO_LIST_FETCH_START';
export const TODO_LIST_FETCH = 'todos/TODO_LIST_FETCH';
export const TODO_LIST_FETCH_ERROR = 'todos/TODO_LIST_FETCH_ERROR';

export const getTodoList: todosTypes.getTodoListAction = async (dispatch) => {
    dispatch({ type: TODO_LIST_FETCH_START });

    try {
        const data = await fetchTodoList();
        dispatch({ type: TODO_LIST_FETCH, payload: data });
    } catch (err) {
        const error: string = err as string;
        dispatch({ type: TODO_LIST_FETCH_ERROR, payload: error });
    }
}

export const TODO_ITEM_CHECKED = 'todos/TODO_ITEM_CHECKED';

export const todoItemChecked: todosTypes.todoItemCheckedAction = (dispatch, id) => {
    if (!id) return;

    dispatch({ type: TODO_ITEM_CHECKED, payload: id });
}

export const todosReducer = (state: state.TodosState, action: todosTypes.TodosActions): state.TodosState => {
    switch(action.type) {
        case TODO_LIST_FETCH_START:
            return {
                ...state,
                loading: true
            };
        case TODO_LIST_FETCH:
            return {
                ...state,
                list: [...action.payload],
                loading: false,
                error: ''
            };
        case TODO_LIST_FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case TODO_ITEM_CHECKED:
            return {
                ...state,
                list: state.list.map(i => i.id === action.payload ? { ...i, done: !i.done } : i)
            };
        default:
            return state;
    }

}