import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

import styled from 'styled-components';
import colors from 'styles/colors';

interface CategoryItemProps {
    bgColor: string;
    title: string;
    total: number;
}

const setFont = props => props.$useLightFont ? colors.base.white : colors.app.primaryBlack;

const StyledCategoryItem = styled(Link)<{ $bgColor: string; $useLightFont: boolean; }>`
    display: block;
    padding: 12px 16px 13px 16px;
    border-radius: 10px;
    margin-bottom: 8px;
    background: ${props => props.$bgColor};
    width: 100%;
    text-align: left;

    &:hover {
        background: ${props => darken(0.05, props.$bgColor)}
    }

    p {
        font-size: 19px;
        line-height: 23px;
        color: ${props => setFont(props)};
        font-weight: 500;
    }

    span {
        font-size: 14px;
        line-height: 17px;
        color: ${props => setFont(props)};
        font-weight: 300;
    }
`;

const CategoryItem: React.FC<CategoryItemProps> = ({ title, bgColor, total }) => {
    const label = total === 1 ? 'task' : 'tasks';
    const useLightFont = [
        colors.app.primaryGreen,
        colors.app.primaryRed,
        colors.app.primaryPurple,
        colors.app.primaryBlue,
        colors.app.primaryBlack
    ].includes(bgColor);

    return (
        <StyledCategoryItem
            to={`/category/${title.toLowerCase()}`}
            $bgColor={bgColor}
            $useLightFont={useLightFont}
        >
            <p>{title}</p>
            {total && <span>{total} {label}</span>}
        </StyledCategoryItem>
    )
}

export default memo(CategoryItem);
