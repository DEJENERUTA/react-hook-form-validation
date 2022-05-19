//update the value of the cardInfo in the formContext

import React, { useState, useContext } from "react";
import { formContext } from "../context/Context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { getValue } from "@testing-library/user-event/dist/utils";

const schema = yup.object({
  cardNumber: yup.number().required("Kortnummer er påkrævet"),

  cardHolderName: yup
    .string()
    .required("Kortejerens navn skal udfyldes")
    .matches(/^[aA-zZA-y -]+$/, "Kortejerens navn må kun indeholde bogstaver")
    .min(2, "Kortejerens navn skal være mindst 2 bogstaver langt")
    .max(20, "Kortejerens navn må ikke være længere end 20 bogstaver"),
  cardExpirationDate: yup
    .string()
    .required("Kortets udløbsdato skal udfyldes")
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
      "Kortets udløbsdato skal være gyldigt"
    ),
  cardCVC: yup.number().required("Kortets CVC skal udfyldes"),
});

const CreditCard = () => {
  const { cardInfo, setCardInfo } = useContext(formContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="creadit-card mt-2 w-1/2 ">
      <h2>Credit Card</h2>
      <p>You full fill the following informations</p>

      <ul className="mb-2">
        <li>Navn: {cardInfo.fornavn}</li>
        <li>Efternavn: {cardInfo.efternavn}</li>
        <li>Email: {cardInfo.email}</li>
      </ul>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group flex">
          <div className="mr-4">
            {errors.cardNumber?.message}
            <input
              {...register("cardNumber")}
              className="appearance-none border-none outline-none p-2 mb-2 bg-gray-200 rounded-md"
              type="number"
              placeholder="Card Number"
            />
            {errors.cardHolderName?.message}
            <input
              {...register("cardHolderName")}
              className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
              type="text"
              placeholder="Card Holder Name"
            />
          </div>
          <div>
            {errors.cardExpirationDate?.message}
            <input
              {...register("cardExpirationDate")}
              className="border-none outline-none p-2 mb-2 gap-2 bg-gray-200 rounded-md"
              type="text"
              placeholder="Card Expired Date"
            />
            {errors.cardCVC?.message}
            <input
              {...register("cardCVC")}
              className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
              type="number"
              placeholder="CVC"
            />
          </div>
        </div>
        <button
          className=" bg-green-300 p-2 m-2 rounded-sm text-white w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreditCard;
