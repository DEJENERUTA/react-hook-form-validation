//react hook form
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { render } from "@testing-library/react";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validation = (data) => {
    console.log(data);
    /* e.preventDefault(); */
    console.log("formularen er sendt...");
  };

  let [renders, setRenders] = useState(0);
  const [fornavn, setfornavn] = useState("");

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit(validation)}
        className=" flex flex-col gap-2"
      >
        {errors.fornavn && <span>This field is required</span>}
        <input
          {...register("fornavn", { required: true })}
          onChange={(e) => {
            setfornavn(e.target.value);
            console.log(fornavn);
            setRenders(++renders);
            console.log(renders);
          }}
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="text"
          name="Fornavn"
          placeholder="Fornavn "
        />
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="text"
          name="Efternavn"
          placeholder="Efternavn"
        />
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="email"
          name=" bekræftemail"
          placeholder="Bekræft email"
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
