import React, { useState, useContext } from "react";
import "./CardData.css";
import { useCart } from "react-use-cart";

const CardData = ({ event, props }) => {
  const [showMore, setShowMore] = useState(false);
  const text = event.description;
  const { addItem } = useCart();

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <p className="prodInfo">
        {isReadMore ? text.slice(0, 10) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  return (
    <>
      {/* <div className="container"> */}
      {/* <div className="row"> */}
      <div className="col-10 col-md-4">
        <div className="card">
          <div className="card-body">
            <div className="prod">
              <div className="title">
                <h5>{event.title.slice(0, 40)}...</h5>
              </div>
              <p className="category">
                <span className="cate">Category - </span>
                {event.category}
              </p>
              <img src={event.image} alt="" />
              <div className="prodInfo">
                <span className="desc"> Description : </span>
                {showMore ? text : `${text.substring(0, 90)}`}
                <button className="btn" onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Show less" : "Show more"}
                </button>
              </div>
              <div className="price">
                <h4>Price : $ {event.price} </h4>
              </div>
              <div>
                <button
                  className="product-add-btn"
                  onClick={() => addItem(event)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default CardData;
