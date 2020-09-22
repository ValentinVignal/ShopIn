import { ProductInterface } from './Product';
import PopoverAnimationDefault from 'material-ui/Popover/PopoverAnimationDefault';
import { stat } from 'fs';

export interface UserState {
    basket: Array<ProductInterface>,
    user: any
}

export const initialState: UserState = {
    basket: [],
    user: null
}

export function getBasketTotal(basket: Array<ProductInterface>) {
    return basket?.reduce(function (amount, item) { return item.price + amount; }, 0);
}

export interface UserAction {
    type: string,
    item?: ProductInterface,
    id?: string,
    user?: any
}

function reducer(state: UserState = initialState, action: UserAction): UserState {
    switch (action.type) {
        case 'ADD_TO_BASKET': {
            const newBasket = [...state.basket];
            if (action.item) {
                newBasket.push(action.item);
            }
            return {
                ...state,
                basket: newBasket,
            };
        }
        case 'REMOVE_FROM_BASKET': {
            const newBasket = [...state.basket];

            if (action.id) {
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
                if (index >= 0) {
                    newBasket.splice(index, 1);
                } else {
                    console.warn(`Could not remove product (id ${action.id})`);
                }
            }
            return {
                ...state,
                basket: newBasket
            };
        }
        case 'EMPTY_BASKET': {
            return {
                ...state,
                basket: []
            };
        }
        case 'SET_USER': {
            return {
                ...state,
                user: action.user
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;