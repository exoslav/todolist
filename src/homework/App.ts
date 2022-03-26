export const AppCode = `
import React, { useState, useEffect } from "react";

import Todo from './Todo';

// "const" can be used instead of "var"
const getTodos = (): Promise<{id: string; title: string;}[]> => new Promise((resolve, reject) => {
    fetch('https://express.623b44338e9af58789408a9b.mockapi.io/list')
        .then(res => {
            if (res.status === 200) return res.json();
            return reject('Oops, something went wrong.')
        })
        .then(data => resolve(data));
});

const App = () => {
    const [state, setState] = useState<{ id: string; title: string }[]>([]);

    // Original code was creating infinite loop
    // Function was setting the state individualy for each item
    useEffect(() => {
        getTodos()
            .then(todos => setState(todos))
            // Simple error handeling
            .catch(err => alert(err))
    }, []);

    // "key" was missing when rendering in loop
    // todo items were rendered inside <div> element, <ul> is better bacause we render list
    return (
        <ul>
            {/* do no pass object as prop, but rather primitives so we can benefit from PureComponent function */}
            {state.map((todo) => <Todo key={todo.id} title={todo.title} />)}
        </ul>
    );
}

export default App;
`;