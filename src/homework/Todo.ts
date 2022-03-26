export const TodoCode = `
import React, { useMemo } from "react";

// 1. PureComonent
// PureComponent does its own check if props where changed (shallow equal check). We dont need to implement "shouldComponentUpdate" lifecycle in that case.
export class PureComponentTodo extends React.PureComponent<{ title: string;}> {
    // todo item is <li> now
    // we dont need click event "handleOnClick" at all, we will use <a> instead
    render() {
        return (
            <li>
                <a href="/detail">
                    {this.props.title}
                </a>
            </li>
        );
    }
}

// 2. Functional component with useMemo
export const Todo: React.FC<{ title: string;}> = ({ title }) => {
    return useMemo(() => {
        return (
            <li>
                <a href="/detail">
                    {title}
                </a>
            </li>
        );
    }, [title]);
}
`;
