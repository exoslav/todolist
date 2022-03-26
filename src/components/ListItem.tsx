import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rgba } from 'polished';

import colors from 'styles/colors';
import { capitalizeFirstLetter } from 'utils/strings';
import Circle, { StyledCircle } from 'components/Circle';
import CheckboxCircle from 'components/CheckboxCircle';

interface ListItemProps {
    id: string;
    title: string;
    categoryColor: string;
    done: boolean;
    onCheckItem: (args: any) => void;
}

const StyledLeftBox = styled.div`
    position: absolute;
    top: 17px;
    left: -40px;
    align-self: center;
`;

const StyledListItem = styled.li<{ done: boolean }>`
    position: relative;
    display: flex;
    justify-content: start;
    font-size: 18px;
    line-height: 21px;

    a {
        width: 100%;
        padding: 19px 42px 19px 0;
        border-bottom: 1px solid ${rgba(colors.app.primaryBlack, 0.1)};
        color: ${props => !props.done ? colors.app.primaryBlack : colors.app.primaryGray2};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
            border-color: ${colors.app.primaryBlue};
        }
    }

    ${StyledCircle} {
        position: absolute;
        top: 0;
        right: 15px;
        bottom: 0;
        margin: auto;
    }
`;

const ListItem: React.FC<ListItemProps> = ({ id, title, categoryColor, onCheckItem, done }) => (
    <StyledListItem done={done}>
        <StyledLeftBox>
            <CheckboxCircle onClick={onCheckItem} />
        </StyledLeftBox>

        <Link to={`/todo/${id}`}>
            {capitalizeFirstLetter(title)}
            <Circle color={categoryColor} />
        </Link>

    </StyledListItem>
)

export default memo(ListItem);
