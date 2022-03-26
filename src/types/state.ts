import { Api } from 'types/api';

export declare namespace state {
	interface RootState {
		todos: TodosState;
	}

    interface TodosState {
        loading: boolean;
        list: Api.TodoItem[];
        error: string;
    }

    interface CategoriesState {
        loading: boolean;
        list: Api.CategoryItem[];
        error: string;
    }

    interface PageState {
        title: {
            text: string;
            active: boolean;
        };
    }
}