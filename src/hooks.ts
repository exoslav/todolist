import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import * as Api from 'types/api';
import { StoreContext } from 'store';

export const useSelectCategory = (): Api.CategoryItem => {
    const categoryName = useParams().categoryName || '';
    const { state } = useContext(StoreContext);

    return state.categories.list.find(i => i.name.toLowerCase() === categoryName.toLowerCase());
}
