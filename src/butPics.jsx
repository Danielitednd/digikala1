import React from 'react';
import './butPics.css';
import digijet from './assets/digijet.png';
import bazgasht from './assets/bazgasht.png';
import vam from './assets/Vam.png';
import takhfif from './assets/takhfif.png';

function PictureGrid() {
  return (
    <div className="picture-grid">
      <div className="grid-item">
        <button className="picture-button">
          <button className="Dots">...</button>
          <p className="picture-caption">Digijet</p>
        </button>
      </div>

      <div className="grid-item">
        <button className="picture-button">
          <img src={bazgasht} alt="Bazgasht" className="grid-image" />
          <p className="picture-caption">Bazgasht</p>
        </button>
      </div>
      
      <div className="grid-item">
        <button className="picture-button">
          <img src={takhfif} alt="Takhfif" className="grid-image" />
          <p className="picture-caption">Takhfif</p>
        </button>
      </div>
      
      <div className="grid-item">
        <button className="picture-button">
          <img src={vam} alt="Vam" className="grid-image" />
          <p className="picture-caption">Vam</p>
        </button>
      </div>

      <div className="grid-item">
        <button className="picture-button">
          <img src={digijet} alt="Digijet" className="grid-image" />
          <p className="picture-caption">Digijet</p>
        </button>
      </div>
    </div>
  );
}

export default PictureGrid;
