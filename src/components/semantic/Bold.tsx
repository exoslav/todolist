import React from 'react';
import styled from 'styled-components';

import colors from 'styles/colors';

export const StyledBold = styled.b<{ color: string }>`
    color: ${props => props.color};
    font-weight: 700;
`;

const Bold: React.FC<{ color?: string }> = ({ children, color = colors.app.primaryBlack }) => (
    <StyledBold color={color}>
        {children}
    </StyledBold>
);

export default Bold;
