import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';

import colors from 'styles/colors';
import { StoreContext } from 'store';
import { StyledParagraph } from 'components/semantic/Paragraph';

const StyledErrorMessage = styled(StyledParagraph)`
    max-width: 475px;
    margin: 0 auto 30px;
    padding: 10px 20px;
    color: ${colors.base.white};
    background: ${colors.app.primaryRed};
    border-radius: 15px;
    box-shadow: 3px 2px 0px 0px #252a31;
`;

const Header: React.FC = () => {
    const { state: { todos, categories } } = useContext(StoreContext);
    const showErrorMessage = todos.error && categories.error;

    return useMemo(() => {
            console.log('render ErrorMessage.tsx');

            return showErrorMessage ? (
                <StyledErrorMessage>
                    Oops, something went wrong! Try to reload the app.
                </StyledErrorMessage>
            ) : null;
        }, [todos.error, categories.error]);
}

export default Header;
