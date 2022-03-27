import * as api from 'types/api';
import {
    CATEGORIES_FETCH_START,
    CATEGORIES_FETCH,
    CATEOGRIES_FETCH_ERROR
} from 'store/categories';

export type CategoriesActions =
    categoriesFetchStart |
    categoriesFetch |
    categoriesFetchError;

export type getCategoriesAction = (categories: React.Dispatch<categoriesFetchStart | categoriesFetch | categoriesFetchError>) => void;

interface categoriesFetchStart {
    type: typeof CATEGORIES_FETCH_START;
}
interface categoriesFetch {
    type: typeof CATEGORIES_FETCH;
    payload: api.CategoryItem[];
}

interface categoriesFetchError {
    type: typeof CATEOGRIES_FETCH_ERROR;
    payload: string;
}
