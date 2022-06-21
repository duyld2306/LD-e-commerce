// For add item to cart
export const addCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

// For delete item from cart
export const delCart = (product) => {
    return {
        type: "DEL_ITEM",
        payload: product
    }
}

export const increaseCart = (product) => {
    return {
        type: "INCREASE_ITEM",
        payload: product
    }
}

export const decreaseCart = (product) => {
    return {
        type: "DECREASE_ITEM",
        payload: product
    }
}