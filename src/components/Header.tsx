import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import colors from 'styles/colors';
import { StoreContext } from 'store';
import { capitalizeFirstLetter } from 'utils/strings';
import H1 from 'components/semantic/H1';
import Arrow from 'components/Arrow';

const StyledHeader = styled.div<{ active: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    a {
        position: absolute;
        left: -32px;
        top: 11px;
    }

    h1 {
        color: ${props => props.active ? colors.app.primaryBlack : colors.app.primaryGray2}
    }
`;

const Header: React.FC = () => {
    const location = useLocation();
    const { state: { page: { title }} } = useContext(StoreContext);

    return useMemo(() => {
        console.log('render Header.tsx');

        const displayBackLink = location.pathname !== '/';
        const route = location.pathname.split('/')[1];
        const to = ['todo', 'category'].includes(route) ? '/board' : '/';

        return (
            <StyledHeader active={title.active}>
                {
                    displayBackLink &&
                    <Link to={to}>
                        <Arrow />
                    </Link>

                }
                <H1>{capitalizeFirstLetter(title.text)}</H1>
            </StyledHeader>
        )
    }, [title.text, title.active, location.pathname])
}

export default Header;
