import { PiCopyrightLight } from "react-icons/pi";
import "./footer.css";

function Footer() {
  return (
    <div className="mainFooter">
      <div className="footer d-flex container-fluid w-100 justify-content-start flex-row flex-wrap">
        <div className="subscribeCon p-3 m-0">
          <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necesbus enim
          </p>
          <form className="d-flex flex-column justify-content-start">
            <input type="email" placeholder="Enter your email" />
            <button className="submitBtn" type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div className="mx-auto m-0 p-3">
          <h5>ABOUT US</h5>
          <ul className="unList">
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>
        <div className="mx-auto m-0 p-3">
          <h5>OUR SERVICES</h5>
          <ul className="unList">
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>
        <div className="mx-auto m-0 p-3">
          <h5>USEFUL LINKS</h5>
          <ul className="unList">
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>
        <div className="mx-auto m-0 p-3">
          <h5>GET IN TOUCH</h5>
          <p>
            Address: F-262, First Floor,
            <br /> Sushant Lok Phase - III,
            <br />
            Sector- 57, Gurgaon <br /> Haryana, India 122003.
          </p>
          <p>
            Call: <br />
            +91-9948257272
          </p>
          <p>
            Email: <br />
            care@chaperoneplants.com
          </p>
        </div>
        <div className="p-3">
          <h5>CHAPERONE</h5>
          <p className="titlePara">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
        </div>
        <div className="followUsCon d-flex flex-column p-3">
          <h5>Follow us on</h5>
          <div>
            <a
              href="https://www.instagram.com/nameisbharatnaik/?igshid=ZDdkNTZiNTM%3D"
              target="_blank"
            >
              <img
                src="https://i.postimg.cc/nLG1DBrF/image-84-1.png"
                alt="Instagram"
              />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src="https://i.postimg.cc/XJDdf8bb/image-85.png"
                alt="facebook"
              />
            </a>{" "}
            <a
              target="_blank"
              href="https://www.threads.net/@nameisbharatnaik?xmt=AQGzuvbHMzuNFZ-8Ormhn1gNVyF11vyM33dqG7tPXhdgqbM"
            >
              <img
                src="https://i.postimg.cc/cLmhbPy7/image-86.png"
                alt="thread"
              />
            </a>{" "}
            <a href="https://www.youtube.com/@wasakiyt8759" target="_blank">
              <img
                src="https://i.postimg.cc/C5Tb14pL/image-87.png"
                alt="Youtube"
              />
            </a>{" "}
            <a href="https://www.linkedin.com/in/bharatnaik24" target="_blank">
              <img
                src="https://i.postimg.cc/sgD7vXqS/image-88.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>{" "}
        <hr className="custom-hr" />
        <div className="p-3">
          <PiCopyrightLight />{" "}
          <span>2023, chaperone.com All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
