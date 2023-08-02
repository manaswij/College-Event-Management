import React from 'react';
import './Cat.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';

const images = [img1, img2, img3, img4, img5, img6];


export default function Cat() {
  return (
    <div>
      <h1 className='header'>Categories</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 bg-black text-white cursor-pointer">
        {images.map((img, index) => (
          <div key={index} className="col">
            <div className="card h-100 bg-black cursor-pointer">
              <img src={img} className="card-img-top image" alt={`${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
