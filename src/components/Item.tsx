import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rgba } from 'polished';

import colors from 'styles/colors';
import { capitalizeFirstLetter } from 'utils/strings';
import Circle, { StyledCircle } from 'components/Circle';
import CheckboxCircle from 'components/CheckboxCircle';

interface ItemProps {
    title: string;
    done: boolean;
    to?: string;
    categoryColor?: string;
    onCheckItem?: () => void;
}

const StyledLeftBox = styled.div`
    position: absolute;
    top: 17px;
    left: -40px;
    height: 24px;
    display: flex;
    align-self: center;
`;

const StyledItem = styled.li<{ done: boolean }>`
    position: relative;
    display: flex;
    justify-content: start;
    font-size: 18px;
    line-height: 21px;

    a {
        width: 100%;
        padding: 19px 42px 19px 0;
        border-bottom: 1px solid ${rgba(colors.app.primaryBlack, 0.1)};
        color: ${props => props.done ? colors.app.primaryGray2 : colors.app.primaryBlack};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
            padding-bottom: 18px;
            border-color: ${colors.app.primaryBlue};
            border-width: 2px;
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

const Item: React.FC<ItemProps> = ({ to, title, categoryColor, onCheckItem, done }) => (
    <StyledItem done={done}>
        {
            onCheckItem &&
            <StyledLeftBox>
                <CheckboxCircle onClick={onCheckItem} finished={done} />
            </StyledLeftBox>
        }

        {
            to &&
            <Link to={to}>
                {capitalizeFirstLetter(title)}
                {categoryColor && <Circle color={categoryColor} />}
            </Link>
        }

    </StyledItem>
)

export default memo(Item);
