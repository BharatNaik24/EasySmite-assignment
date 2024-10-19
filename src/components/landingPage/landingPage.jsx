import { useState } from "react";

import "./landinPage.css";
import LandingPageSlider from "../landingPageSlider/landingPageSlider";

function LandingPage() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="container-fluid">
      <div className="loremButtons">
        <button
          onClick={() => setIsTrue(false)}
          style={{
            backgroundColor: !isTrue ? "#165314" : "transparent",
            color: !isTrue ? "white" : "black",
            marginRight: "10px",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "3px",
            paddingBottom: "3px",
          }}
        >
          Plants
        </button>
        <button
          onClick={() => setIsTrue(true)}
          style={{
            backgroundColor: isTrue ? "#165314" : "transparent",
            color: isTrue ? "white" : "black",
            marginRight: "10px",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "3px",
            paddingBottom: "3px",
          }}
        >
          Pots
        </button>
      </div>
      <div>
        <p className="loremPara container-fluid">
          {isTrue
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veniam soluta sint ratione saepe voluptatibus possimus dolor ipsum dignissimos, id unde libero quidem at delectus nulla porro quia perferendis aspernatur molestias expedita. Quis totam corporis adipisci tenetur nobis id consequuntur magni excepturi ullam optio? Tenetur ut quia alias asperiores suscipit voluptatum aut dolores ex ab obcaecati, accusantium eius ullam dolor."
            : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus voluptatem harum quia ipsam commodi adipisci odio explicabo praesentium nesciunt consectetur doloribus delectus provident voluptate nemo, pariatur consequatur animi maxime laborum aliquid, eos omnis? Iusto nulla nisi autem molestiae maxime nesciunt soluta repellat laudantium neque, provident maiores asperiores quaerat corrupti? Dignissimos."}
        </p>
      </div>
      {/* nursery Part */}
      <div className="container-fluid">
        <h4 className="nurseryHeading">
          <strong>Nursery</strong>
        </h4>
        <div>
          {/* slidersSlick */}
          <LandingPageSlider />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
