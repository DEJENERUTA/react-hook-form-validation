//react hook form
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { render } from "@testing-library/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const schema = yup.object().shape({
    fornavn: yup.string().required(),
    Efternavn: yup.string().required(),
    email: yup.string().email().required(),
    confirmEmail: yup
      .string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
      .email()
      .required(),
  });

  const emailRegEx =
    /^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/gi;

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const validation = (data) => {
    console.log(data);
    console.log(watch("fornavn"));
  };

  let [renders, setRenders] = useState(0);
  const [fornavn, setfornavn] = useState("");

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit(validation)}
        className=" flex flex-col gap-2"
      >
        {errors.fornavn?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.fornavn?.type === "minLength" && (
          <span>This field is required</span>
        )}
        <input
          {...register("fornavn", { required: true, minLength: 2 })}
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="text"
          placeholder="Fornavn "
        />
        {errors.eftenavn?.type === "minLength" && (
          <span>This field is required</span>
        )}
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="text"
          name="Efternavn"
          placeholder="Efternavn"
        />
        {/* check if the confirm email is the same as email */}
        {errors.email?.type === "minLength" && (
          <span>This field is required</span>
        )}
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: emailRegEx,
          })}
        />
        {errors.validate?.type === "validate" && (
          <span>This email is not match!</span>
        )}
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="email"
          name=" bekræftemail"
          placeholder="Bekræft email"
          {...register("validate", {
            validate: (value) => value === watch("email"),
          })}
        />
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="kodeord"
          name="kodeord"
          placeholder="Kodeord"
        />
        <div className="flex items-center gap-1">
          <input
            className=""
            type="checkbox"
            name="checkbox"
            id="checkbox"
            placeholder="jeg accepterer Zeltlands medlemvilkår, herunder at Zetland må sende mig tilbud."
          />
          <label className="" htmlFor="checkbox">
            jeg accepterer Zeltlands{" "}
            <a className="text-red-500 underline">medlemvilkår</a>, herunder at
            Zetland må sende mig tilbud.
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input
            className=""
            type="checkbox"
            name="checkbox"
            id="checkbox2"
            placeholder="Jeg accepterer at Zetland må sende mig tilbud."
          />
          <label className=" text-center" htmlFor="checkbox2">
            Jeg accepterer at Zetland må sende mig tilbud
          </label>
        </div>

        <button className="bg-green-300 p-2 m-2 rounded-sm text-white">
          Videre
        </button>
      </form>
    </div>
  );
};

export default Form;
