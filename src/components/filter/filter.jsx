import React, { useState } from "react";
import "./filter.css"; // Ensure you have the CSS styles
import { IoIosAdd } from "react-icons/io";

function Filter() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filterOptions = [
    {
      title: "Type of Plants",
      options: ["Succulents", "Ferns", "Cacti", "Flowers"],
    },
    {
      title: "Price",
      options: ["Under $10", "$10 - $20", "$20 - $50", "Above $50"],
    },
    { title: "Nursery", options: ["Local Nursery", "Online Store"] },
    { title: "Ideal Plants Location", options: ["Home", "Office", "Balcony"] },
    { title: "Indoor/Outdoor", options: ["Indoor", "Outdoor"] },
    { title: "Maintenance", options: ["Low", "Medium", "High"] },
    { title: "Plant Size", options: ["Small", "Medium", "Large"] },
    { title: "Water Schedule", options: ["Daily", "Weekly", "Monthly"] },
    { title: "Color", options: ["Green", "Yellow", "Red", "Purple", "White"] },
    { title: "Seasonal", options: ["Spring", "Summer", "Fall", "Winter"] },
    {
      title: "Light Efficient",
      options: ["Low Light", "Medium Light", "Bright Light"],
    },
  ];

  return (
    <div className="filter-container">
      <div className="filter-header">
        <p>Filter</p>
        <button className="clear-button">CLEAR ALL</button>
      </div>
      <div className="accordion">
        {filterOptions.map((filter, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              <p>{filter.title}</p>
              <button className="expandButton">
                <IoIosAdd />
              </button>
            </div>

            {activeIndex === index && (
              <div className="accordion-body">
                <ul className="filter-options">
                  {filter.options.map((option, idx) => (
                    <li key={idx}>
                      <label>
                        <input type="checkbox" className="checkbox" />
                        <span>{option}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
