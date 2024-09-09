import React, { useState } from 'react';
import './butPics.css';
import digijet from './assets/digijet.png';
import bazgasht from './assets/bazgasht.png';
import vam from './assets/Vam.png';
import takhfif from './assets/takhfif.png';
import poshak from './assets/Poshak.png';
import lavazem from './assets/Lavazem.png';
import Daneshjoo from './assets/Daneshjoo.png';
import Lapjoo from './assets/Lapjoo.png';
import portakh from './assets/portakh.png';
import close from './assets/close.png';


function PictureGrid() {
    const [showTable, setShowTable] = useState(false);
  return (
    <div className="picture-grid">
      <div className="grid-item">
        <button className="picture-button">
          <button className="Dots" onClick={() => setShowTable(true)}>...</button>
          <p className="picture-caption">بیشتر</p>
        </button>
      </div>

      


      
      {showTable && (
        <div className="table-overlay" onClick={() => setShowTable(false)}>
          <div className="table-container" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowTable(false)}>
                <img src={close} alt="Close" className="close-icon" />
            </button>
            <div className="picture-grid">
                <div className="grid-item">
                <button className="picture-button">
            <img src={portakh} alt="portakh" className="grid-image" />
                    <p className="picture-caption">portakh</p>
                    </button>
                </div>

                <div className="grid-item">
                    <button className="picture-button">
                    <img src={Lapjoo} alt="Lapjoo" className="grid-image" />
                    <p className="picture-caption">Lapjoo</p>
                    </button>
                </div>

                <div className="grid-item">
                    <button className="picture-button">
                    <img src={Daneshjoo} alt="Daneshjoo" className="grid-image" />
                    <p className="picture-caption">Daneshjoo</p>
                    </button>
                </div>

                <div className="grid-item">
                    <button className="picture-button">
                    <img src={lavazem} alt="Lavazem" className="grid-image" />
                    <p className="picture-caption">Lavazem</p>
                    </button>
                </div>

                <div className="grid-item">
                    <button className="picture-button">
                    <img src={poshak} alt="Poshak" className="grid-image" />
                    <p className="picture-caption">Poshak</p>
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
                        <p className="picture-caption">دیجی کالا <br/> جت</p>
                    </button>
                </div>
                        </div>
                </div>
            </div>
        )}









      <div className="grid-item">
        <button className="picture-button">
          <img src={portakh} alt="portakh" className="grid-image" />
          <p className="picture-caption">سوپرمارکت <br/> پرتخفیف</p>
        </button>
      </div>

      <div className="grid-item">
        <button className="picture-button">
          <img src={Lapjoo} alt="Lapjoo" className="grid-image" />
          <p className="picture-caption">لپتاپ <br/> دانشجویی</p>
        </button>
      </div>

      <div className="grid-item">
        <button className="picture-button">
          <img src={Daneshjoo} alt="Daneshjoo" className="grid-image" />
          <p className="picture-caption">لوازم <br/> دانشجویی</p>
        </button>
      </div>

      <div className="grid-item">
        <button className="picture-button">
          <img src={lavazem} alt="Lavazem" className="grid-image" />
          <p className="picture-caption">پرفروش های <br/> لوازم تحریر</p>
        </button>
      </div>

      <div className="grid-item">
        <button className="picture-button">
          <img src={poshak} alt="Poshak" className="grid-image" />
          <p className="picture-caption">پرفروش های<br/> پوشاک</p>
        </button>
      </div>

      <div className="grid-item">
        <button className="picture-button">
          <img src={bazgasht} alt="Bazgasht" className="grid-image" />
          <p className="picture-caption">بازگشت به<br/> مدرسه</p>
        </button>
      </div>
      
      <div className="grid-item">
        <button className="picture-button">
          <img src={takhfif} alt="Takhfif" className="grid-image" />
          <p className="picture-caption">تخفیف <br/> پلاس</p>
        </button>
      </div>
      
      <div className="grid-item">
        <button className="picture-button">
          <img src={vam} alt="Vam" className="grid-image" />
          <p className="picture-caption">دریافت <br/> وام</p>
        </button>
      </div>

      <div className="grid-item">
        <button className="picture-button">
          <img src={digijet} alt="Digijet" className="grid-image" />
          <p className="picture-caption">دیجی کالا <br/> جت</p>
        </button>
      </div>
    </div>
  );
}

export default PictureGrid;
