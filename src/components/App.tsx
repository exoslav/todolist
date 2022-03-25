import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { Reset } from 'styled-reset';

import BoardPage from 'pages/BoardPage';
import TodoDetailPage from 'pages/TodoDetailPage';
import CategoryDetailPage from 'pages/CategoryDetailPage';
import NotFoundPage from 'pages/NotFoundPage';
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
                    <Route path="/" element={<Navigate to="/board" replace />} />
                    <Route path="/" element={<Root />}>
                        <Route path="board" element={<BoardPage />} />
                        <Route path="todo/:itemId" element={<TodoDetailPage />} />
                        <Route path="category/:categoryName" element={<CategoryDetailPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;