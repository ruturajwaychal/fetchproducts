import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import "./Cart.css";
import Items from "../Items/Items";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
// import history from "./history";
import { useHistory } from "react-router-dom";

const Cart = ({ event, index }) => {
  let history = useHistory();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const handleClick = () => {
    history.push("/");
  };

  // if (isEmpty) return <h2>Your Cart is Empty</h2>;
  return (
    <>
      <header>
        <div className="continue-shopping">
          <div onClick={handleClick}>
            <BiArrowBack className="arrow-icon" />
          </div>
          <h5> continue Shopping</h5>
        </div>

        <div className="cart-icon">
          <AiOutlineShoppingCart className="cart-icon-logo" />
          <p>{totalUniqueItems}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h4>Your Bag</h4>
        <p className="total-items">
          Items in Cart{" "}
          <span style={{ fontWeight: "800" }}> {totalUniqueItems} </span>
        </p>
        {/* <p className="total-items">
          Items in Cart{" "}
          <span style={{ fontWeight: "800" }}> {totalItems} </span>
        </p> */}

        {/* <div className="cart-items">
          <div className="cart-items-container">
            <Items />
            <hr /> */}

        {items.map((event, index) => {
          return (
            <>
              <div className="items-info">
                <div className="product-img">
                  <img src={event.image} alt="" />
                </div>

                <div className="title">
                  <h3>{event.title}</h3>
                </div>

                <div className="price">
                  <h4>Price : $ {event.price} </h4>
                </div>

                <div>
                  <h5>Quantity: {event.quantity} </h5>
                </div>

                <div>
                  <button
                    className="btn btn-sm ms-2 btn-primary"
                    onClick={() =>
                      updateItemQuantity(event.id, event.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-primary ms-2"
                    onClick={() =>
                      updateItemQuantity(event.id, event.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <div className="remove-icon">
                    <button
                      onClick={() => removeItem(event.id)}
                      className="btn btn-sm btn-danger ms-2"
                    >
                      <BsFillTrashFill />
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <div className="card-total">
          <h5>
            Cart Total: $ <span>{cartTotal}</span>
          </h5>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
