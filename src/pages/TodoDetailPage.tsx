import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import colors from 'styles/colors';
import { StoreContext } from 'store';
import { changePageTitle } from 'store/page';
import H2 from 'components/semantic/H2';
import CategoryItem from 'components/CategoryItem';
import { StyledParagraph } from 'components/semantic/Paragraph';

const StyledDescription = styled(StyledParagraph)<{ active: boolean }>`
    margin-bottom: 35px;
    padding: 19px 0;
    color: ${props => props.active ? colors.app.primaryBlack : colors.app.primaryGray2}
`;

const TodoDetailPage: React.FC = () => {
    const params = useParams();
    const { state, dispatch } = useContext(StoreContext);

    const item =  state.todos.list?.find(i => i.id === params.itemId);
    const title: string = item?.title || '';
    const description = item?.description;
    const category = state.categories.list.find(category => category.typeId === item?.type);
    const total = state.todos.list.filter(todo => todo.type === category?.typeId).length;

    useEffect(() => changePageTitle(dispatch, { text: title, active: !item?.done }), [item]);

    return (
        <div>
            <StyledDescription active={!item?.done}>
                {description}
            </StyledDescription>

            <H2>Category</H2>

            {
                category &&
                <CategoryItem
                    title={category.name}
                    bgColor={category.color}
                    total={total}
                />
            }
        </div>
    )
}

export default TodoDetailPage;