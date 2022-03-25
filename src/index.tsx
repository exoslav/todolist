import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'components/App';

const root = document.getElementById('root');
const rootEl: JSX.Element = <App />;

ReactDOM.render(rootEl, root);
