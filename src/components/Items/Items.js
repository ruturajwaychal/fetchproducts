import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";

const Items = () => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <h2>img div</h2>
        </div>

        <div className="title">
          <h2>title</h2>
        </div>

        <div className="add-minus-quantity">
          {/* <h2>img div</h2> */}
          <IoAddOutline />
          <input type="text" />
          <FiMinus />
        </div>

        <div className="price">
          <h3>2000</h3>
        </div>

        <div className="remove-icon">
          <BsFillTrashFill />
        </div>
      </div>
    </>
  );
};

export default Items;
