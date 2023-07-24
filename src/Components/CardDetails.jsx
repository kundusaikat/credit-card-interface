import React from "react";

const CardDetails = ({ formData }) => {
  return (
    <div className="flex-[3] p-5 ">
      <div className="bg-red-600 p-5 rounded-lg text-white">
        <p>Card Details</p>
        <p>{formData.cardNumber}</p>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <p>CARD HOLDER</p>
            <p>{formData.cardholderName}</p>
          </div>
          <div className="flex flex-col">
            <p>EXPIRY</p>
            <div>
              {formData.expiryMonth && formData.expiryYear && (
                <p>
                  {formData.expiryMonth} / {formData.expiryYear}
                </p>
              )}
              {formData.expiryMonth && !formData.expiryYear && (
                <p>{formData.expiryMonth} / </p>
              )}
              {!formData.expiryMonth && formData.expiryYear && (
                <p>/ {formData.expiryYear} </p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <p>CVV</p>
            <p>{formData.cvv}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
