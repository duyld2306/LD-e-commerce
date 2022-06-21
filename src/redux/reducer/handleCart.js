const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      // Check if product is already exist
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        // Increase the quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    case "DEL_ITEM":
      const exist1 = state.find((item) => item.id === product.id);
      return state.filter((item) => item.id !== exist1.id);
    case "INCREASE_ITEM":
      return state.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    case "DECREASE_ITEM":
      const exist2 = state.find((item) => item.id === product.id);
      if (exist2.qty === 1) {
        return state.filter((item) => item.id !== exist2.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    default:
      return state;
  }
};

export default handleCart;
