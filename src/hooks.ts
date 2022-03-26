import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { StoreContext } from 'store';
import { Api } from 'types/api';

export const useSelectCategory = (): Api.CategoryItem => {
    const categoryName = useParams().categoryName || '';
    const { state } = useContext(StoreContext);

    return state.categories.list.find(i => i.name.toLowerCase() === categoryName.toLowerCase());
}
