import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { StoreContext } from 'store';
import { ExpressApi } from 'types/api';

export const useSelectCategory = (): ExpressApi.CategoryItem => {
    const categoryName = useParams().categoryName || '';
    const { state } = useContext(StoreContext);

    return state.categories.list.find(i => i.name.toLowerCase() === categoryName.toLowerCase());
}
