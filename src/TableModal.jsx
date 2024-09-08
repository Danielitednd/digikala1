import React from 'react';
import './TableModal.css'; // Make sure to import the CSS
import close from './assets/close.png';

const TableModal = ({ options, onClose }) => {
  return (
    <div className="table-overlay">
      <div className="table-container">
      {/* <button className="header-button">
            <img src={bbasket} alt="Search" className="bbasket-icon" />
          </button> */}
        <button className="close-button" onClick={onClose}>
            <img src={close} alt="Close" className="close-icon" />
        </button>
        <div className="table-scroll-container">
          <table>
            <tbody>
              {options.map((option, index) => (
                <tr key={index}>
                  <td>
                    <button className="option-button">{option}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
