import { state } from 'types/state';
import {
    getTodoList as fetchTodoList,
    getTodoDetail as fetchTodoDetail
} from 'service/domain/list';

export const initialStore = {
    list: [],
    loading: false,
    error: ''
};

const TODO_LIST_FETCH_START = 'todos/TODO_LIST_FETCH_START';
const TODO_LIST_FETCH = 'todos/TODO_LIST_FETCH';
const TODO_LIST_FETCH_ERROR = 'todos/TODO_LIST_FETCH_ERROR';

export const getTodoList = async (dispatch: any) => {
    dispatch({ type: TODO_LIST_FETCH_START });

    try {
        const res = await fetchTodoList();
        const data = await res.json();
        dispatch({ type: TODO_LIST_FETCH, payload: data });
    } catch (err) {
        dispatch({ type: TODO_LIST_FETCH_ERROR, payload: err });
    }
}

const TODO_DETAIL_FETCH_START = 'todos/TODO_DETAIL_FETCH_START';
const TODO_DETAIL_FETCH = 'todos/TODO_DETAIL_FETCH';
const TODO_DETAIL_FETCH_ERROR = 'todos/TODO_DETAIL_FETCH_ERROR';

export const getTodoDetail = async (dispatch: any, itemId: string | undefined) => {
    if (!itemId) return;

    dispatch({ type: TODO_DETAIL_FETCH_START });

    try {
        const res = await fetchTodoDetail(itemId);
        const data = await res.json();
        dispatch({ type: TODO_DETAIL_FETCH, payload: data });
    } catch (err) {
        dispatch({ type: TODO_DETAIL_FETCH_ERROR, payload: err });
    }
}

export const todosReducer = (state: state.TodosState, action: any): state.TodosState => {
    switch(action.type) {
        case TODO_LIST_FETCH_START:
        case TODO_DETAIL_FETCH_START:
            return {
                ...state,
                loading: true
            };
        case TODO_LIST_FETCH:
        case TODO_DETAIL_FETCH:
            return {
                ...state,
                list: action.type === TODO_LIST_FETCH
                    ? [...action.payload]
                    : [action.payload],
                loading: false
            };
        case TODO_LIST_FETCH_ERROR:
        case TODO_DETAIL_FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }

}