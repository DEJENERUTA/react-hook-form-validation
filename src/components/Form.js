//react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const emailRegEx =
    /^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/gi;
  const schema = yup.object({
    fornavn: yup
      .string()
      .required("Fornavn er påkrævet")
      .matches(/^[aA-zZA-y -]+$/, "Fornavn må kun indeholde bogstaver")
      .min(2, "Fornavn skal være mindst 2 bogstaver langt")
      .max(20, "Fornavn må ikke være længere end 20 bogstaver"),
    efternavn: yup
      .string()
      .required("Efternavn skal udfyldes")
      .matches(/^[aA-zZA-y -]+$/, "Efternavn må kun indeholde bogstaver")
      .min(2, "Efternavn skal være mindst 2 bogstaver langt")
      .max(20, "Efternavn må ikke være længere end 20 bogstaver"),
    email: yup
      .string()
      .email("Email er påkrævet")
      .required("Email er påkrævet")
      .matches(emailRegEx, "navn@domæne.dk"),
    validate: yup
      .string()
      .required("bekræft din email")
      .oneOf([yup.ref("email")], "Email skal være ens"),
    kodeord: yup
      .string()
      .required("Kodeord er påkrævet")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Kodeord skal indeholde mindst 8 tegn, 1 stort og 1 lille bogstav, 1 tal og 1 specialtegn"
      )
      .min(8, "Kodeord skal være mindst 8 tegn langt")
      .max(20, "Kodeord må ikke være længere end 20 tegn"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    console.log(watch("fornavn"));
  };

  return (
    <div className="form mt-2">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2">
        {errors.fornavn?.message}
        <input
          {...register("fornavn")}
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="text"
          placeholder="Fornavn "
        />
        {errors.efternavn?.message}
        <input
          {...register("efternavn")}
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="text"
          placeholder="Efternavn"
        />
        {errors.email?.message}
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.validate?.message}
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="email"
          placeholder="Bekræft email"
          {...register("validate")}
        />
        {errors.kodeord?.message}
        <input
          className="border-none outline-none p-2 gap-2 bg-gray-200 rounded-md"
          type="kodeord"
          placeholder="Kodeord"
          {...register("kodeord")}
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

        <button className=" bg-green-300 p-2 m-2 rounded-sm text-white">
          Videre
        </button>
      </form>
    </div>
  );
};

export default Form;
