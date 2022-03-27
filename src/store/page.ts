import * as state from 'types/state';
import * as pageTypes from 'types/reducers/page';

export const initialStore = {
    title: {
        text: '',
        active: true
    }
};

export const TITLE_CHANGED = 'todos/TITLE_CHANGED';

export const changePageTitle: pageTypes.changePageTitleAction = (dispatch, opts) => {
    dispatch({ type: TITLE_CHANGED, payload: opts });
}

export const pageReducer = (state: state.PageState, action: pageTypes.PageActions): state.PageState => {
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