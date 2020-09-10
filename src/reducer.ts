import { ProductInterface } from './Product';

export interface UserState {
    basket: Array<any>,
}

export const initialState: UserState = {
    basket: []
}

export interface UserAction {
    type: string,
    item: ProductInterface
}

function reducer(state: UserState = initialState, action: UserAction): UserState {
    switch (action.type) {
        case 'ADD_TO_BASKET': {
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        }
        case 'REMOVE_FROM_BASKET': {
            // TODO: Do it 
            return state;
        }
        default: {
            return state;
        }
    }
}

export default reducer;