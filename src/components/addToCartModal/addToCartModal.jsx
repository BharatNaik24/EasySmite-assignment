import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./addToCartModal.css";
import "react-toastify/dist/ReactToastify.css";
import { useProduct } from "../../context/ProductContext";

function CartModal({ product, ...props }) {
  const { selectedProduct } = useProduct();
  const navigate = useNavigate();

  const handleClose = () => {
    toast.success("Item added to cart!");
    navigate("/");
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal" // Add custom class for styling
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Your Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {selectedProduct ? (
          <>
            <h1>Hey, User</h1>
            <p>
              Thank you for your interest in{" "}
              <strong>{selectedProduct.name}</strong>!
            </p>
            <p>
              <img
                src={selectedProduct.productImage}
                alt={selectedProduct.name}
                width={100}
              />
            </p>
            <p>Type: {selectedProduct.type}</p>
            <p>Maintenance: {selectedProduct.maintenance}</p>
            <div className="price-rating text-center">
              <span className="original-price">
                Original Price: ₹{selectedProduct.originalPrice}
              </span>
              <span className="sale-price3">
                Sale Price: ₹{selectedProduct.salePrice}
              </span>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <Button onClick={handleClose} className="confirmBtn">
          Confirm to Add
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default CartModal;
