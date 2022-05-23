import React from 'react';
import './quick.css';

function Quick() {
  return (
    <div className='main-container'>
      <div className="card-quick">
        <div className="card-row">
          <div className="card-images">
            <div className="card-top">
                <img src="/image/image1.jpeg" alt="" />
            </div>
            <div className="card-bottom">
              <img src="/image/image1.jpeg" alt="" />
              <img src="/image/image2.jpeg" alt="" />
              <img src="/image/image3.jpeg" alt="" />
              <img src="/image/image4.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="first-div div">
            <h2 className='title'>Product 1</h2>
            <p className='category'>Nice shoe</p>
          </div>
          <div className="second-div div">
            <span className='price'>$80.00</span>
            <div className="colors">
              <div className="color grey"></div>
              <div className="color red"></div>
              <div className="color black"></div>
            </div>
            <div className="sizes">
              <div className="size s">S</div>
              <div className="size m">M</div>
              <div className="size l">L</div>
              <div className="size xl">XL</div>
            </div>
            <div className="quantity">1</div>
          </div>
          <div className="third-div div">
             <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="fourth-div div">
            <button className='cart'>Add To Cart</button>
            <button className='wish'>Add To Wish </button>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Quick;