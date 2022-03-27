import React, { useEffect, useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from 'styled-components';

import { StoreContext } from 'store';
import { changePageTitle } from 'store/page';
import { AppCode } from 'homework/App';
import { indexCode } from 'homework/index';
import { TodoCode } from 'homework/Todo';
import H2 from 'components/semantic/H2';

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
    font-family: monospace;
`;

const pageTitle = 'Homework';

const CodePage: React.FC = () => {
    const { dispatch } = useContext(StoreContext);

    useEffect(() => changePageTitle(dispatch, { text: pageTitle, active: true }), []);

    return (
        <div>
            <H2>App.tsx</H2>
            <StyledSyntaxHighlighter language="javascript" style={docco}>
                {AppCode}
            </StyledSyntaxHighlighter>

            <H2>index.tsx</H2>
            <StyledSyntaxHighlighter language="javascript" style={docco}>
                {indexCode}
            </StyledSyntaxHighlighter>

            <H2>Todo.tsx</H2>
            <StyledSyntaxHighlighter language="javascript" style={docco}>
                {TodoCode}
            </StyledSyntaxHighlighter>
        </div>
      );
}

export default CodePage;
