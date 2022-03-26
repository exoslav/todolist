import React, { useReducer, createContext } from 'react';
import { initialStore as todosInitialStore, todosReducer } from 'store/todos';
import { initialStore as categoriesInitialStore, categoriesReducer } from 'store/categories';
import { initialStore as pageInitialStore, pageReducer } from 'store/page';

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

export const StoreContext = createContext({ state: initalStore, dispatch: () => {} } as any);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, initalStore);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}
