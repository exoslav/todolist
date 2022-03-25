import React from 'react';

import { StoreContext } from 'store';
import ListItem from 'components/ListItem';
import CategoryItem from 'components/CategoryItem';
import H2 from 'components/semantic/H2';

const BoardPage: React.FC = () => {
    const { state } = React.useContext(StoreContext);

    return (
        <div>
            <ul>
                {
                    state.todos.list.map(i => {
                        const categoryColor = state.categories.list.find(categoryItem => i.type === categoryItem.typeId)?.color;
                        return (
                            <ListItem
                                key={i.id}
                                id={i.id}
                                title={i.title}
                                categoryColor={categoryColor}
                            />
                        )
                    })
                }
            </ul>

            <H2 title="Lists" />

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
