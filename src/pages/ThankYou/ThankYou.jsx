import { useProduct } from "../../context/ProductContext";

import { MdAttachEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css";
import { useEffect } from "react";

function ThankYou() {
  const { selectedProduct } = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {selectedProduct ? (
        <div className="thankYouPageBg">
          <h1>
            Thank you for your interest in{" "}
            <span className="interestProduct">{selectedProduct.name}!</span>
          </h1>
          <p>
            Your interest has be noted. Soon our team will reach out to you with
            further details.
          </p>
          <div>
            <MdAttachEmail size={50} />
            <span>
              An Attached Email has be sent to your registered mail, <br />{" "}
              Please check for more details of this product or <br />
              you can wait for our team to reach you.
            </span>
          </div>
          <h1 className="mt-3">Happy Planting...</h1>
          <button className="continueShoppingBtn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="thankYouPageBg">
          <p>No product selected.</p>
        </div>
      )}
    </div>
  );
}

export default ThankYou;
