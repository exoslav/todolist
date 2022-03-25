import { ExpressApi } from 'types/api';

export declare namespace state {
	export interface RootState {
		todos: TodosState;
	}

    export interface TodosState {
        loading: boolean;
        list: ExpressApi.TodoItem[];
        error: string;
    }

    export interface CategoriesState {
        loading: boolean;
        list: ExpressApi.CategoryItem[];
        error: string;
    }
}