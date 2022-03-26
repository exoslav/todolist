import React from 'react';

import * as state from 'types/state';

export const initialStore = {
    title: {
        text: '',
        active: true
    }
};

const TITLE_CHANGED = 'todos/TITLE_CHANGED';

export const changePageTitle = (dispatch: React.Dispatch<any>, opts: {[key: string]: string | boolean }) => {
    dispatch({ type: TITLE_CHANGED, payload: opts });
}

export const pageReducer = (state: state.PageState, action: state.action): state.PageState => {
    switch(action.type) {
        case TITLE_CHANGED:
            return {
                ...state,
                title: action.payload
            };
        default:
            return state;
    }

}