import React from 'react';

import * as state from 'types/state';
import {
    getTodoList as fetchTodoList
} from 'service/routes/list';

export const initialStore = {
    list: [],
    loading: false,
    error: ''
};

const TODO_LIST_FETCH_START = 'todos/TODO_LIST_FETCH_START';
const TODO_LIST_FETCH = 'todos/TODO_LIST_FETCH';
const TODO_LIST_FETCH_ERROR = 'todos/TODO_LIST_FETCH_ERROR';

export const getTodoList = async (dispatch: React.Dispatch<any>) => {
    dispatch({ type: TODO_LIST_FETCH_START });

    try {
        const data = await fetchTodoList();
        dispatch({ type: TODO_LIST_FETCH, payload: data });
    } catch (err) {
        console.log('Error')
        dispatch({ type: TODO_LIST_FETCH_ERROR, payload: err });
    }
}

const TODO_ITEM_CHECKED = 'todos/TODO_ITEM_CHECKED';

export const todoItemChecked = (dispatch: React.Dispatch<any>, id: string) => {
    if (!id) return;

    dispatch({ type: TODO_ITEM_CHECKED, payload: id });
}

export const todosReducer = (state: state.TodosState, action: state.action): state.TodosState => {
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