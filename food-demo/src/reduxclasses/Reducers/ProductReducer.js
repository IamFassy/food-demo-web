import * as Action from '../Actions/ProductActions';

const INITIAL_STATE = {
    count: 0,
    addedItems: [],
    items: [],
    total: 0
};

export default function productReducer(state = INITIAL_STATE, action) {
    const { items, id } = action
    switch (action.type) {
        case Action.GET_PRODUCTS: {
            return {
                ...state,
                items
            }
        }
        case Action.ADD_TO_CART: {
            console.log("here");
            console.log(state.items, "state items");
            let addedItem = [...state.items]
            console.log(state.items, "state items");
            let item = addedItem.find(item => item.itemId === action.id)
            //Checking if it already exists
            let item_exist = state.addedItems.find(item => id === item.itemId)
            console.log(state.items, "state items");
            console.log(addedItem, "addedItem");
            if (item_exist) {

                item.addedQuantity += 1
                console.log(item, "item");
                return {
                    ...state,
                    total: state.total + item.price,
                    count: state.count += 1
                }
            }
            else {
                console.log("else");
                item.addedQuantity = 1;
                //calculating the total
                let newTotal = state.total + item.price;
                console.log(state.items, "item state else");
                return {
                    ...state,
                    addedItems: [...state.addedItems, item],
                    total: newTotal,
                    count: state.count += 1
                };
            }

        }
        case Action.ADD_QUANTITY: {
            let addedItem = state.items.find(item => item.itemId === action.id)
            addedItem.addedQuantity += 1
            // console.log(addedItem, "addedITem");
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                total: newTotal,
                count: state.count += 1
            }
        }
        case Action.SUBTRACT_QUANTITY: {

            let addedItem = state.items.find(item => item.itemId === action.id)
            //if the quantity == 0 then it should be removed
            if (addedItem.addedQuantity === 1) {
                addedItem.addedQuantity = 0
                let new_items = state.addedItems.filter(item => item.itemId !== action.id)
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal,
                    count: state.count -= 1
                }
            }
            else {
                addedItem.addedQuantity -= 1
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    total: newTotal,
                    count: state.count -= 1
                }
            }
        }
        default:
            return state;
    }
}
