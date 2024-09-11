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


function PictureGrid2() {
    // const [showTable, setShowTable] = useState(false);
  return (
    <>
        <div className="picture-grid">

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




        <div className="picture-grid">

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
    </>
  );
}

export default PictureGrid2;
