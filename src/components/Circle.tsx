import React from 'react';
import styled from 'styled-components';

interface CircleProps {
    color: string;
}

export const StyledCircle = styled.div<CircleProps>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const Circle: React.FC<CircleProps> = ({ color }) => {
    return (
        <StyledCircle color={color} />
    )
}

export default Circle;
