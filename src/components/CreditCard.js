import React, { useState, useContext } from "react";
import formContext from "../context/Context";

const CreditCard = () => {
  const { cardInfo, setCardInfo } = useContext(formContext);
  console.log(cardInfo);

  /* const [card, setCard] = useState({
    cardNumber: "",
    cardHolder: "",
    cardExpiry: "",
    cardCvc: "",
  }); */

  /* const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(card); */
  };

  /*  <div className="form mt-2">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
import React, { useState } from "react";
const CreditCard = () => {
  const [card, setCard] = useState({
    cardNumber: "",
    cardName: "",
    cardDate: "",
    cardCVC: "",
  });

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(card);
  };
 */
  return (
    <div className="creadit-card mt-2 w-1/2 ">
      <h2>CreditCard</h2>
      <p>you full fill the following informations</p>
      <ul>
        <li>navn: {cardInfo.fornavn}</li>
        <li>Efternavn: {cardInfo.efternavn}</li>
        <li>Email: {cardInfo.email}</li>
      </ul>
      <form className=" flex" onSubmit={handleSubmit}>
        <div className="">
          <input
            className="border-none outline-none p-2 mb-2 bg-gray-200 rounded-md"
            type="text"
            name="cardNumber"
            placeholder="Card Number"
          />
          <input
            className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
            type="text"
            name="cardName"
            placeholder="Card Name"
          />
        </div>
        <div>
          <input
            className="border-none outline-none p-2 mb-2 gap-2 bg-gray-200 rounded-md"
            type="text"
            name="cardDate"
            placeholder="Card Date"
          />
          <input
            className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
            type="text"
            name="cardCVC"
            placeholder="Card CVC"
          />
        </div>
      </form>
      <button
        className=" bg-green-300 p-2 m-2 rounded-sm text-white w-full"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default CreditCard;
