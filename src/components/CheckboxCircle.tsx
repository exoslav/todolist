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
    border: 2px solid ${colors.app.primaryGray2};
    background:  ${colors.base.white};
    cursor: pointer;

    &:after {
        content: "";
        display: none;
        position: absolute;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    &:hover {
        border-color: ${colors.app.primaryBlue};
        background: ${colors.app.primaryBlue};

        &:after {
            display: block;
        }
    }
`;

const CheckboxCircle: React.FC<CheckboxCircleProps> = ({ onClick = () => {} }) =>  {
    return <StyledCheckboxCircle onClick={(e) => onClick(e)} />
};

export default CheckboxCircle;
