import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import { UserState, initialState, UserAction } from './reducer';

// Data Layer

const dispatch: Dispatch<UserAction> = function (userAction: UserAction): void { };

export const StateContext = createContext([initialState, dispatch]);

interface StateProviderInput {
    reducer: (state: UserState, action: UserAction) => UserState,
    initialState: UserState,
    children: JSX.Element
}

// Build a provider
export function StateProvider(stateProviderInput: StateProviderInput): JSX.Element {
    return (
        <StateContext.Provider value={useReducer(stateProviderInput.reducer, stateProviderInput.initialState)}>
            {stateProviderInput.children}
        </StateContext.Provider>
    );
}


// To use it inside a component
export function useStateValue(): any[] {
    return useContext(StateContext);
}