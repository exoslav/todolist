import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-size: 32px;
    line-height: 41px;
    font-weight: 700;
`;

const H1: React.FC = ({ children }) => (
    <StyledH1>
        {children}
    </StyledH1>
);

export default H1;
