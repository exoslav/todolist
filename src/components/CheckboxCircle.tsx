import React from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';

export type CheckboxCircleProps = {
    onClick?: (e?: React.MouseEvent) => void;
};

const StyledCheckboxCircle = styled.button<CheckboxCircleProps>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background:  ${colors.base.white};
    border: 2px solid ${colors.app.primaryGray2};
    cursor: pointer;

    &:hover {
        border-color: ${colors.app.primaryBlue}
    }
`;

const CheckboxCircle: React.FC<CheckboxCircleProps> = ({ onClick = () => {} }) =>  {
    return <StyledCheckboxCircle onClick={(e) => onClick(e)} />
};

export default CheckboxCircle;
