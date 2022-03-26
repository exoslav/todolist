import React, { useEffect, useContext, useCallback } from 'react';

import { StoreContext } from 'store';
import { changePageTitle } from 'store/page';
import { todoItemChecked } from 'store/todos';
import { useSelectCategory } from 'hooks';
import Item from 'components/Item';

const CategoryDetailPage: React.FC = () => {
    const { state, dispatch } = useContext(StoreContext);
    const category = useSelectCategory();

    useEffect(() => changePageTitle(dispatch, { text: category?.name || '', active: true }), [category])

    const todos = state.todos.list.filter(i => i.type === category?.typeId);
    const checkItem = useCallback((id: string) => todoItemChecked(dispatch, id), []);

    return (
        <div>
            <ul>
                {
                    todos.map(i => {
                        const categoryColor = state.categories.list.find(categoryItem => i.type === categoryItem.typeId)?.color;

                        return (
                            <Item
                                key={i.id}
                                id={i.id}
                                to={`/todo/${i.id}`}
                                title={i.title}
                                done={i.done}
                                categoryColor={categoryColor}
                                onCheckItem={checkItem}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CategoryDetailPage;