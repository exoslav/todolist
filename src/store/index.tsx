import React, { useReducer, createContext } from 'react';

import * as state from 'types/state';
import { TodosActions } from 'types/reducers/todos';
import { CategoriesActions } from 'types/reducers/categories';
import { PageActions } from 'types/reducers/page';
import { initialStore as todosInitialStore, todosReducer } from 'store/todos';
import { initialStore as categoriesInitialStore, categoriesReducer } from 'store/categories';
import { initialStore as pageInitialStore, pageReducer } from 'store/page';

export type AllActions = TodosActions | CategoriesActions | PageActions;

const combineReducers = (slices) => (state, action) => {
    return (
        Object.keys(slices)
        .reduce((acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }), state)
    )
}

const reducers = combineReducers({
    todos: todosReducer,
    categories: categoriesReducer,
    page: pageReducer
});

const initalStore = {
    todos: todosInitialStore,
    categories: categoriesInitialStore,
    page: pageInitialStore
};

export const StoreContext = createContext<{ state: state.RootState; dispatch: React.Dispatch<AllActions> }>(
    { state: initalStore, dispatch: () => {} }
);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, initalStore);

    return (
        <StoreContext.Provider value={{ state, dispatch } as { state: state.RootState; dispatch: React.Dispatch<AllActions> }}>
            {children}
        </StoreContext.Provider>
    );
}
