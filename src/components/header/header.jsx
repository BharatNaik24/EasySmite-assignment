import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="pt-0">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="maincon">
          <Navbar.Brand href="#home" className="logoCon">
            <img
              src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"
              alt="webLogo"
              className="logoImg"
            />
            <span
              className="mx-3 logoHeading"
              style={{
                color: "#165314",
              }}
            >
              Chaperone
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                href="#home"
                onClick={() => handleLinkClick("home")}
                className={activeLink === "home" ? "active-link" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#plants-pots"
                onClick={() => handleLinkClick("plants-pots")}
                className={activeLink === "plants-pots" ? "active-link" : ""}
              >
                Plants & Pots
              </Nav.Link>
              <NavDropdown title="Action" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => handleLinkClick("action/3.1")}
                  className={activeLink === "faqs" ? "active-link" : ""}
                >
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => handleLinkClick("action/3.2")}
                  className={activeLink === "faqs" ? "active-link" : ""}
                >
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={() => handleLinkClick("action/3.3")}
                  className={activeLink === "faqs" ? "active-link" : ""}
                >
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => handleLinkClick("action/3.4")}
                  className={activeLink === "faqs" ? "active-link" : ""}
                >
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => handleLinkClick("action/3.1")}
                  className={activeLink === "faqs" ? "active-link" : ""}
                >
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => handleLinkClick("action/3.2")}
                  className={activeLink === "faqs" ? "active-link" : ""}
                >
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={() => handleLinkClick("action/3.3")}
                  className={activeLink === "faqs" ? "active-link" : ""}
                >
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => handleLinkClick("action/3.4")}
                  className={activeLink === "faqs" ? "active-link" : ""}
                >
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="#blogs"
                onClick={() => handleLinkClick("blogs")}
                className={activeLink === "blogs" ? "active-link" : ""}
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                href="#our-story"
                onClick={() => handleLinkClick("our-story")}
                className={activeLink === "our-story" ? "active-link" : ""}
              >
                Our Story
              </Nav.Link>
              <Nav.Link
                href="#faqs"
                onClick={() => handleLinkClick("faqs")}
                className={activeLink === "faqs" ? "active-link" : ""}
              >
                FAQs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="profileAndCart">
                <img
                  src="https://i.postimg.cc/wvJk95V6/account-profile.png"
                  alt="profile"
                  style={{
                    width: "30px",
                    marginBottom: "5px",
                  }}
                />
                <strong
                  style={{
                    fontSize: "12px",
                  }}
                >
                  My Profile
                </strong>
              </Nav.Link>
              <Nav.Link href="#memes" className="profileAndCart">
                <span className="count">3</span>
                <img
                  src="https://i.postimg.cc/SQZ1xdLr/image-2-1.png"
                  alt="cart"
                  style={{
                    width: "35px",
                    marginBottom: "5px",
                  }}
                />
                <strong
                  style={{
                    fontSize: "12px",
                    marginTop: "-5px",
                    fontWeight: "bold",
                  }}
                >
                  Cart
                </strong>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="searchCon">
        <button className="buttonIcons">
          <CiSearch className="searchIcon" size={25} />
        </button>
        <input
          type="text"
          onChange={(e) => e.target.value}
          className="inputs"
          placeholder="Search Plant"
        />

        <button
          className="buttonIcons"
          style={{
            position: "relative",
            left: "-30px",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__"
            alt=""
            style={{
              width: "auto",
              height: "30px",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
