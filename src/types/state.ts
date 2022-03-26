import * as Api from 'types/api';

export interface RootState {
    todos: TodosState;
    categories: CategoriesState;
    page: PageState;
}
export interface TodosState {
    loading: boolean;
    list: Api.TodoItem[];
    error: string;
}

export interface CategoriesState {
    loading: boolean;
    list: Api.CategoryItem[];
    error: string;
}

export interface PageState {
    title: {
        text: string;
        active: boolean;
    };
}

export interface action {
    type: string;
    payload: any;
}
