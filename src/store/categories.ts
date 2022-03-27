import * as state from 'types/state';
import * as categoriesTypes from 'types/reducers/categories';
import { getCategories as fetchCategories } from 'service/routes/categories';

export const initialStore = {
    list: [],
    loading: false,
    error: ''
};

export const CATEGORIES_FETCH_START = 'categories/CATEGORIES_LIST_FETCH_START';
export const CATEGORIES_FETCH = 'categories/CATEGORIES_LIST_FETCH';
export const CATEOGRIES_FETCH_ERROR = 'categories/CATEGORIES_LIST_FETCH_ERROR';

export const getCategories: categoriesTypes.getCategoriesAction = async (dispatch) => {
    dispatch({ type: CATEGORIES_FETCH_START });

    try {
        const data = await fetchCategories();
        dispatch({ type: CATEGORIES_FETCH, payload: data });
    } catch (err) {
        const error: string = err as string;
        dispatch({ type: CATEOGRIES_FETCH_ERROR, payload: error });
    }
}

export const categoriesReducer = (state: state.CategoriesState, action: categoriesTypes.CategoriesActions): state.CategoriesState => {
    switch(action.type) {
        case CATEGORIES_FETCH_START:
            return {
                ...state,
                loading: true
            };
        case CATEGORIES_FETCH:
            return {
                ...state,
                list: action.payload,
                loading: false,
                error: ''
            };
        case CATEOGRIES_FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }

}