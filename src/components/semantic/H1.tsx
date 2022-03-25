import React from 'react';
import styled from 'styled-components';

interface H1Props {
    title: string;
}

const StyledH1 = styled.h1`
    font-size: 32px;
    line-height: 41px;
    font-weight: 700;
`;

const H1: React.FC<H1Props> = ({ title }) => (
    <StyledH1>
        {title}
    </StyledH1>
);

export default H1;
