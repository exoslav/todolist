import * as api from 'types/api';
import {
    TODO_LIST_FETCH_START,
    TODO_LIST_FETCH,
    TODO_LIST_FETCH_ERROR,
    TODO_ITEM_CHECKED
} from 'store/todos';

export type TodosActions =
    todoListFetchStart |
    todoListFetch |
    todoListFetchError |
    todoItemChecked;


export type getTodoListAction = (dispatch: React.Dispatch<todoListFetchStart | todoListFetch | todoListFetchError>) => void;
export type todoItemCheckedAction = (dispatch: React.Dispatch<todoItemChecked>, id: string) => void;

interface todoListFetchStart {
    type: typeof TODO_LIST_FETCH_START;
}

interface todoListFetch {
    type: typeof TODO_LIST_FETCH;
    payload: api.TodoItem[];
}

interface todoListFetchError {
    type: typeof TODO_LIST_FETCH_ERROR;
    payload: string;
}

interface todoItemChecked {
    type: typeof TODO_ITEM_CHECKED;
    payload: string;
}
