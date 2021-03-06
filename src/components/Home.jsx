import React from "react";
import "./home.css";
import Quick from "./Quick.jsx";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <img src="/image/image1.jpeg" alt="Product 1" />
          </div>
          <div className="card-footer">
            <img src="/image/eye.png" alt="Quick View" className="icons" />

            <img src="/image/heart.png" alt="Add To Wish" className="icons" />

            <img src="/image/cart.png" alt="Add To Cart" className="icons" />
          </div>
        </div>
      </div>
      <Quick />
    </div>
  );
}

export default Home;
