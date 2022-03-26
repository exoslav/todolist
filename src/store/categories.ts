import * as state from 'types/state';
import { getCategories as fetchCategories } from 'service/domain/categories';

export const initialStore = {
    list: [],
    loading: false,
    error: ''
};

const CATEGORIES_FETCH_START = 'categories/CATEGORIES_LIST_FETCH_START';
const CATEGORIES_FETCH = 'categories/CATEGORIES_LIST_FETCH';
const CATEOGRIES_FETCH_ERROR = 'categories/CATEGORIES_LIST_FETCH_ERROR';

export const getCategories = async (dispatch: any) => {
    dispatch({ type: CATEGORIES_FETCH_START });

    try {
        const res = await fetchCategories();
        const data = await res.json();
        dispatch({ type: CATEGORIES_FETCH, payload: data });
    } catch (err) {
        dispatch({ type: CATEOGRIES_FETCH_ERROR, payload: err });
    }
}

export const categoriesReducer = (state: state.CategoriesState, action: any): state.CategoriesState => {
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
                loading: false
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