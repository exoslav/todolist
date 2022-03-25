import React from 'react';
import styled from 'styled-components';

import colors from 'styles/colors';

const arrowSize = '18px';
const StyledArrow = styled.div`
    border-color: ${colors.app.primaryBlack};
    border-style: solid;
    border-width: 0 0 3px 3px;
    content: "";
    display: block;
    width: ${arrowSize};
    height: ${arrowSize};
    transform: rotate(45deg);
    cursor: pointer;
`;

const Arrow: React.FC = () => {
    return (
        <StyledArrow />
    )
}

export default Arrow;