import React, { useContext } from 'react';
;
import { StoreContext } from 'store';
import { useSelectCategory } from 'hooks';
import ListItem from 'components/ListItem';

const CategoryDetailPage: React.FC = () => {
    const { state } = useContext(StoreContext);
    const category = useSelectCategory();

    const todos = state.todos.list.filter(i => i.type === category?.typeId);

    return (
        <div>
            <ul>
                {
                    todos.map(i => {
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
        </div>
    )
}

export default CategoryDetailPage;