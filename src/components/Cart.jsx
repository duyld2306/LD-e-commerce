import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cartSlice from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const handleClose = (item) => {
    dispatch(cartSlice.actions.deleteItem(item));
  };

  const handleMinus = (item) => {
    dispatch(cartSlice.actions.decreaseItem(item));
  };

  const handleAdd = (item) => {
    dispatch(cartSlice.actions.increaseItem(item));
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
            to="/checkout"
          >
            Proceed to checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {cartItems.length === 0 && emptyCart()}
      {cartItems.length !== 0 &&
        cartItems.map((cartItem) => {
          return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
              <div className="container py-4">
                <button
                  className="btn-close float-end"
                  onClick={() => handleClose(cartItem)}
                  aria-label="Close"
                ></button>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img
                      src={cartItem.image}
                      alt={cartItem.title}
                      height="200px"
                      width="180px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{cartItem.title}</h3>
                    <p className="lead fw-bold">
                      {cartItem.qty} x ${cartItem.price} = $
                      {cartItem.qty * cartItem.price}
                    </p>
                    <button
                      className="btn btn-outline-dark me-4"
                      onClick={() => handleMinus(cartItem)}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      className="btn btn-outline-dark me-4"
                      onClick={() => handleAdd(cartItem)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {cartItems.length !== 0 && button()}
    </>
  );
};

export default Cart;
