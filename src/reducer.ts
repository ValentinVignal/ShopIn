import { ProductInterface } from './Product';
import PopoverAnimationDefault from 'material-ui/Popover/PopoverAnimationDefault';

export interface UserState {
    basket: Array<ProductInterface>,
}

export const initialState: UserState = {
    basket: []
}

export function getBasketTotal(basket: Array<ProductInterface>) {
    return basket?.reduce(function (amount, item) { return item.price + amount; }, 0);
}

export interface UserAction {
    type: string,
    item?: ProductInterface,
    id?: string
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
                basket: newBasket
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
        default: {
            return state;
        }
    }
}

export default reducer;