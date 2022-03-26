import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Reset } from 'styled-reset';

import * as pages from 'pages';
import { StoreProvider } from 'store';
import GlobalStyles from 'styles/Globals';
import Root from 'components/Root';
import ProgressBar from 'components/ProgressBar';

const App: React.FC = () => {
    return (
        <StoreProvider>
            <Reset />
            <GlobalStyles />
            <ProgressBar />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route index element={<pages.WelcomePage />} />
                        <Route path="board" element={<pages.BoardPage />} />
                        <Route path="todo/:itemId" element={<pages.TodoDetailPage />} />
                        <Route path="category/:categoryName" element={<pages.CategoryDetailPage />} />
                        <Route path="code" element={<pages.CodePage />} />
                        <Route path="*" element={<pages.NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;