import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import H2 from 'components/semantic/H2';
import { capitalizeFirstLetter } from 'utils/strings';
import { StoreContext } from 'store';
import CategoryItem from 'components/CategoryItem';

const StyledTitle = styled.h2`
    margin-bottom: 40px;
    padding: 19px 0;
`;
const TodoDetailPage: React.FC = () => {
    const params = useParams();
    const { state } = useContext(StoreContext);

    const todoId = params.itemId;
    const item =  state.todos.list?.find(i => i.id === todoId);
    const title = capitalizeFirstLetter(item?.title);
    const category = state.categories.list.find(category => category.typeId === item?.type);

    return (
        <div>
            <StyledTitle>{title}</StyledTitle>

            <H2 title="Category" />

            {
                category &&
                <CategoryItem
                    title={category.name}
                    bgColor={category.color}
                />
            }
        </div>
    )
}

export default TodoDetailPage;