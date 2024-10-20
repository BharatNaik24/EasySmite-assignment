import "./products.css";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import { TbCurrencyRupee } from "react-icons/tb";
import CartModal from "../addToCartModal/addToCartModal";
import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/pagination ";
import { Form } from "react-bootstrap";

function Products({ selectProduct }) {
  const { setSelectedProduct } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [productQuantities, setProductQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isFirstMount, setIsFirstMount] = useState(true);
  const navigate = useNavigate(); // Use navigate for redirection

  const itemsPerPage = 12;

  const currentProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return selectProduct.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(selectProduct.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleQuantityChange = (productId, amount) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) + amount, 0),
    }));
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product); // Set the selected product in context
    navigate("/thankyoupage"); // Redirect to Thank You Page
  };

  useEffect(() => {
    if (isFirstMount) {
      window.scrollTo(0, 0); // Scroll to (0, 0) on first mount
      setIsFirstMount(false); // Set to false after the first mount
    } else {
      window.scrollTo(0, 500); // Scroll to (0, 500) on pagination change
    }
  }, [currentPage]);

  return (
    <div className="mainBgCon">
      <div className="products-container">
        <div className="sortByCon">
          <p>{selectProduct.length} Products</p>

          <select name="selected" className="mx-3 mt-0 p-2 selected">
            <option value="apple">SORT BY</option>
            <option value="banana">Newest First</option>
            <option value="orange">Popular</option>
            <option value="grape">Price Low to High</option>
          </select>
        </div>
        <div className="row">
          {currentProducts().map((plant) => (
            <div className="col" key={plant.id}>
              <div className="productCardContainer">
                <div className="product-card">
                  <div className="image-container">
                    <img
                      src={plant.productImage}
                      alt={plant.name}
                      className="product-image"
                    />
                  </div>
                  <button
                    className="viewProductsBtn"
                    onClick={() => handleViewProduct(plant)}
                  >
                    View Product
                  </button>
                </div>
                <div className="product-info">
                  <span className="product-name">{plant.name}</span>
                  <p className="product-maintenance">
                    <span className="product-type">
                      {plant.type} {plant.maintenance}
                    </span>
                  </p>
                  <div className="rating">
                    <img
                      src={plant.ratingStar}
                      alt={`${plant.rating} stars`}
                      className="rating-stars"
                    />
                    <span>{plant.rating}</span>
                  </div>
                  <div className="mainSpanCon">
                    <span className="spanCon">
                      <p className="original-price3">
                        <TbCurrencyRupee size={15} />
                        {plant.originalPrice}
                      </p>
                      <p className="salePrice">
                        <TbCurrencyRupee size={20} />
                        {plant.salePrice}
                      </p>
                    </span>
                  </div>
                  <div className="btnCon">
                    <div className="addToCartBtn">
                      <button
                        className="addBtnCustom"
                        onClick={() => handleQuantityChange(plant.id, -1)}
                      >
                        <FaMinus size={8} />
                      </button>
                      <p className="addCartText">
                        {productQuantities[plant.id] > 0 ? (
                          productQuantities[plant.id]
                        ) : (
                          <button
                            className="addtoCartAdvBtn"
                            onClick={() => handleAddToCart(plant)}
                          >
                            Add to Cart
                          </button>
                        )}
                      </p>
                      <button
                        className="addBtnCustom"
                        onClick={() => handleQuantityChange(plant.id, 1)}
                      >
                        <FaPlus size={8} />
                      </button>
                    </div>
                    {productQuantities[plant.id] > 0 ? (
                      <button
                        className="buyOnRent"
                        onClick={() => handleAddToCart(plant)}
                      >
                        Add to cart
                      </button>
                    ) : (
                      <button className="buyOnRent">Buy on Rent</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <CartModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={selectProduct}
      />
    </div>
  );
}

export default Products;
