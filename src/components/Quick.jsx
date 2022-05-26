import React from "react";
import "./quick.css";
import { useState } from "react";

function Quick() {
  //for change image
  const [selectedImage, setSelectedImage] = useState("");

  //for active class on div selected
  const active = { boxShadow: "0 0 10px #000000" };
  const inActive = {};

  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };

  return (
    <div className="main-container">
      <div className="card-quick">
        <div className="card-row">
          <div className="card-images">
            <div className="card-top">
              <img src={selectedImage || "/image/image1.jpeg"} alt="" />
            </div>
            <div className="card-bottom">
              <img
                src="/image/image1.jpeg"
                onClick={() => setSelectedImage("/image/image1.jpeg")}
                alt=""
              />
              <img
                src="/image/image2.jpeg"
                onClick={() => setSelectedImage("/image/image2.jpeg")}
                alt=""
              />
              <img
                src="/image/image3.jpeg"
                onClick={() => setSelectedImage("/image/image3.jpeg")}
                alt=""
              />
              <img
                src="/image/image4.jpeg"
                onClick={() => setSelectedImage("/image/image4.jpeg")}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="first-div div">
            <h2 className="title">Product 1</h2>
            <p className="category">Nice shoe</p>
          </div>
          <div className="second-div div">
            <span className="price">Price: $80.00</span>
            <div className="colors">
              <div
                className="color grey "
                style={selected === 1 ? active : inActive}
                onClick={handleClick(1)}
              ></div>
              <div
                className="color red "
                style={selected === 2 ? active : inActive}
                onClick={handleClick(2)}
              ></div>
              <div
                className="color black "
                style={selected === 3 ? active : inActive}
                onClick={handleClick(3)}
              ></div>
            </div>
            <div className="sizes">
              <div className="size s" >S</div>
              <div className="size m" >M</div>
              <div className="size l" >L</div>
              <div className="size xl" >XL</div>
            </div>
            <div className="quantity">1</div>
          </div>
          <div className="third-div div">
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className="fourth-div div">
            <button className="cart">Add To Cart</button>
            <button className="wish">Add To Wish </button>
          </div>
        </div>
      </div>
      <a className="back" href="/">
        Back
      </a>
    </div>
  );
}

export default Quick;
