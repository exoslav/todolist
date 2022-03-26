import React, { useEffect, useContext, useCallback } from 'react';

import { StoreContext } from 'store';
import { changePageTitle } from 'store/page';
import { todoItemChecked } from 'store/todos';
import Item from 'components/Item';
import CategoryItem from 'components/CategoryItem';
import H2 from 'components/semantic/H2';

const pageTitle = 'Active tasks';

const BoardPage: React.FC = () => {
    const { state, dispatch } = useContext(StoreContext);

    useEffect(() => changePageTitle(dispatch, { text: pageTitle, active: true }), []);

    const checkItem = useCallback((id: string) => todoItemChecked(dispatch, id), []);

    return (
        <div>
            <ul>
                {
                    state.todos.list.map(i => {
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

            <H2>Lists</H2>

            <ul>
                {
                    state.categories.list.map(category => {
                        const total = state.todos.list.filter(todo => todo.type === category.typeId).length;
                        return (
                            total > 0 &&
                            <CategoryItem
                                key={category.id}
                                title={category.name}
                                bgColor={category.color}
                                total={total}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default BoardPage;
