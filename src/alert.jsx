import React, { useState, useEffect } from 'react';
function PopupAlert(){
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    setShowAlert(true); // Show the alert on page load
  }, []);
  function handleClose(){
    setShowAlert(false); // Close the alert
  };
  return (
    <>
      {showAlert && (
        <div className="custom-alert">
          <div className="alert-content">
            <h2 className="alertp">حاجی به شرفت تخفیف داریم دروغ نمیگم</h2>
            <button onClick={handleClose} className="close-btn">گوه خوردی</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAlert;
