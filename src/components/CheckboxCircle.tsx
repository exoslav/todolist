import React from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';

const StyledCheckboxCircle = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background:  ${colors.base.white};
    border: 2px solid ${colors.app.primaryGray2};
`;

const CheckboxCircle: React.FC = () =>  <StyledCheckboxCircle />;

export default CheckboxCircle;
