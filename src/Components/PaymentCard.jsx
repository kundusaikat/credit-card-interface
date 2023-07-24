import React, { useEffect, useState } from "react";
import CardDetails from "./CardDetails";
import CardForm from "./CardForm";
import { popupError, popupWarning } from "../functions/toasts";

const PaymentCard = () => {
  const initFormData = {
    cardholderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  };
  const [formData, setFormData] = useState(initFormData);
  
  const formatCardNumber = (value) => {
    // Remove all non-numeric characters
    value = value.replace(/\D/g, "");

    value = value.replace(/(\d{4})(?=\d)/g, "$1-");

    return value;
  };

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === "cardholderName") {
      
      if (value.trim() === "") {
        setFormData({
          ...formData,
          [name]: value,
        });
        return;
      }
  
     
      if (!/^[a-zA-Z .]+$/.test(value)) {
        popupWarning("Card Holder Name can only contain letters, spaces, and periods.");
        return;
      }
    }

    // cardNumber validation
    if (name === "cardNumber") {
      if (value.length > 19) {
        popupWarning("Maximum 16 digits");
        return;
      }
      if (/[^0-9-]/.test(value)) {
        popupWarning("Only numbers are accepted!");
        return;
      }
      value = formatCardNumber(value);
    }

    if (name === "expiryMonth" || name === "expiryYear" || name === "cvv") {
      if (/[^0-9]/.test(value)) {
        popupWarning("Only numbers are accepted!");
        return;
      }
    }

    if (name === "expiryMonth") {
      if (value.length > 2 && name === "expiryMonth") {
        popupWarning("Maximum 2 digits");
        return;
      }
      const month = parseInt(value, 10);
      if (month < 1 || month > 12) {
        popupWarning("Month must be between 1 and 12");
        return;
      }
    }

    if (name === "expiryYear") {
      if (value.length > 4) {
        popupWarning("Maximum 4 digits");
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {

 
    const expiryMonth = parseInt(formData.expiryMonth, 10);
    const expiryYear = parseInt(formData.expiryYear, 10);
    if (expiryMonth > 0 && expiryYear > 999) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1; // January is 0

      // Compare with the current date
      if (
        expiryYear < currentYear ||
        (expiryYear === currentYear && expiryMonth < currentMonth)
      ) {
        popupWarning(
          `Expiry must be greater than or equal to the current date ${currentMonth}/${currentYear}.`
        );
      }
    }
  }, [formData.expiryMonth, formData.expiryYear]);

  const handleSubmit = () => {
    if (!formData.cardholderName) {
      popupError("Card Holder Name Required");
      return;
    }
    if (formData.cardholderName.length < 3) {
      popupError("Card Holder Name must be greater than or equal to 3 letter");
      return;
    }
    if (!formData.cardNumber) {
      popupError("Card Number Required");
      return;
    }
    
    if (formData.cardNumber.length < 19) {
      popupError("Card Number must be of 16 digit");
      return;
    }
    if (!formData.expiryMonth) {
      popupError("Expiry Month Required");
      return;
    }
    if (!formData.expiryYear) {
      popupError("Expiry Year Required");
      return;
    }
    if (formData.cvv.length < 3) {
      popupError("CVV must be of 3 digit");
      return;
    }
    if (!formData.cvv) {
      popupError("CVV Required");
      return;
    }
  
    const expiryMonth = parseInt(formData.expiryMonth, 10);
    const expiryYear = parseInt(formData.expiryYear, 10);
  
    if (expiryMonth <= 0 || expiryYear <= 999) {
      popupError("Invalid Expiry Date");
      return;
    }
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
  
   
    if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
      popupError(
        `Expiry must be greater than or equal to the current date ${currentMonth}/${currentYear}.`
      );
      return;
    }
  
    // If all validations pass, log the formData
    console.log(formData);
  };
  
  
  

  return (
    <div className="flex">
      <CardDetails formData={formData} />
      <CardForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default PaymentCard;
