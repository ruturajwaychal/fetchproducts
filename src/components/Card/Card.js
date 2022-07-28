import React, { useEffect, useState } from "react";
import CardData from "../CardData/CardData";
import "./Card.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import TablePagination from "@material-ui/core/TablePagination";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Card = ({ cartItems }) => {
  const [product, setProduct] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateCartItemQuantity,
    removeItem,
  } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((resp) => {
      setProduct(resp.data);
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!product) {
    return null;
  }
  return (
    <div>
      {loading ? (
        <ClipLoader loading={loading} size={35} />
      ) : (
        <>
          <h2 className="heading">Shop Kart</h2>
          <div>
            <form className="d-flex mt-2 search-bar">
              <input
                type="search"
                className="form-control me-2 search-input"
                placeholder="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

              <div className="cart-icon">
                <Link to="/cart-items">
                  <AiOutlineShoppingCart className="cart-icon-logo" />
                  <p>{totalUniqueItems}</p>
                  {/* <p>{cartItems.length === 0 ? "" : cartItems.length}</p> */}
                </Link>
              </div>
            </form>
          </div>

          <div className="container-fluid">
            <div className="row text-center">
              {product
                .filter((event) => {
                  if (search === "") {
                    return event;
                  } else if (
                    event.title.toLowerCase().includes(search.toLowerCase()) ||
                    event.category
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    event.description
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return event;
                  }
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((event, index) => {
                  return <CardData key={index} event={event} />;
                })}
            </div>
          </div>

          <TablePagination
            rowsPerPageOptions={[3, 6, 9, 12, 15, 18, 21]}
            component="div"
            count={product.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className="pagination"
          />
        </>
      )}
    </div>
  );
};

export default Card;
