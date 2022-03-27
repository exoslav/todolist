import { TITLE_CHANGED } from 'store/page';

export type PageActions = changePageTitle;

export type changePageTitleAction = (dispatch: React.Dispatch<changePageTitle>, opts: changePageTitlePayload) => void;

type changePageTitlePayload = {
    text: string;
    active: boolean;
}

interface changePageTitle {
    type: typeof TITLE_CHANGED;
    payload: changePageTitlePayload;
}
