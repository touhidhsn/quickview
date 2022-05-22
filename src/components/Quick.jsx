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
      </div>
    </div>
  )
}

export default Quick;