import * as React from "react";

export default function createContext<A>(initialState: A) {
    const initialDispatcher: React.Dispatch<any> = () => initialState;
    return React.createContext<{ state: A, dispatch: React.Dispatch<any> }>({
        state: initialState,
        dispatch: initialDispatcher
    })
}