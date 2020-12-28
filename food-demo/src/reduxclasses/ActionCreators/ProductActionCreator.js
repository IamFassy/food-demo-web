import * as Action from '../Actions/ProductActions';

export function getProducts(items) {
    return {
        type: Action.GET_PRODUCTS,
        items
    };
}

export function addToCart(id) {
    return {
        type: Action.ADD_TO_CART,
        id
    };
}


export function addQuantity(id) {
    return {
        type: Action.ADD_QUANTITY,
        id
    };
}

export function subtractQuantity(id) {
    return {
        type: Action.SUBTRACT_QUANTITY,
        id
    };
}