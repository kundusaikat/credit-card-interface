import React, { useState } from "react";
import CardDetails from "./CardDetails";
import CardForm from "./CardForm";

const PaymentCard = () => {
  const initFormData = {
    cardholderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  };
  const [formData, setFormData] = useState(initFormData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="flex">
      <CardDetails  formData={formData}/>
      <CardForm formData={formData} handleChange={handleChange} />
    </div>
  );
};

export default PaymentCard;
