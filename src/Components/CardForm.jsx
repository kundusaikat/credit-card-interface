import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";

const CardForm = ({ formData, handleChange,handleSubmit }) => {
  
  return (
    <div className=" flex flex-col text-sm flex-[2] gap-3 p-5">
      <p>Payment Details</p>
      <div className="flex flex-col">
        <label htmlFor="cardholderName" className="text-[10px] font-bold">
          CARDHOLDER NAME
        </label>
        <div className="flex border-0 border-b  border-red-600 items-center gap-2">
          <BsFillPersonLinesFill color={"red"} />
          <input
            type="text"
            className=""
            value={formData.cardholderName}
            name="cardholderName"
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="cardNumber" className="text-[10px] font-bold">
        CARD NUMBER
      </label>
      <div className="flex border-0 border-b border-red-600 items-center gap-2">
        <AiFillCreditCard color="red" />
        <input
          type="text"
          value={formData.cardNumber}
          name="cardNumber"
          onChange={handleChange}
          className=""
        />
      </div>

      <div className="flex justify-between gap-3">
        <div className="flex flex-col">
          <label htmlFor="expiryMonth" className="text-[10px] font-bold">
            EXPIRY MONTH
          </label>
          <input
            type="text"
            className="border-0 border-b border-red-600 items-center gap-2 text-[10px] font-bold"
            value={formData.expiryMonth}
            name="expiryMonth"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="expiryYear" className="text-[10px] font-bold">
            EXPIRY YEAR
          </label>
          <input
            type="text"
            className="border-0 border-b border-red-600 items-center gap-2 text-[10px] font-bold"
            value={formData.expiryYear}
            name="expiryYear"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cvv" className="text-[10px] font-bold">
            CVV
          </label>
          <input
            type="password"
            className="border-0 border-b border-red-600 items-center gap-2 text-[10px] font-bold"
            value={formData.cvv}
            name="cvv"
            onChange={handleChange}
            maxLength={"3"}
          />
        </div>
      </div>

      <div>
        <p className="text-center">
          Payment Amount: <span className="text-red-600"> 12 300 &#8377; </span>
        </p>
      </div>
      <button
        className="text-white bg-red-600 w-[40%] py-2 px-10 rounded-lg m-auto"
        onClick={handleSubmit}
      >
        PAY
      </button>
    </div>
  );
};

export default CardForm;
