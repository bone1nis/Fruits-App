import { ReactElement } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nanoid } from "nanoid";

import { useAppDispatch } from "../../hooks/hooks";
import { fruitsAdd } from "../../store/fruitsSlice";

import { schema, FormData } from "../../utils/formUtils";
import { IFruit } from "../../types/data";

import InputField from "../inputField/InputField";

import "./cardCreateForm.scss";

const CardCreateForm = (): ReactElement => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    reset();

    const res: IFruit = {
      name: data.name,
      id: nanoid(),
      family: data.family,
      order: data.order,
      genus: data.genus,
      nutritions: {
        calories: data.calories,
        fat: data.fat,
        sugar: data.sugar,
        carbohydrates: data.carbohydrates,
        protein: data.protein,
      },
    };

    dispatch(fruitsAdd(res));
  };

  return (
    <div className="create-form">
      <h2 className="create-form__title">Create your own fruit</h2>
      <form className="create-form__form" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id={"name"}
          label={"Name:"}
          register={register}
          errors={errors}
          clazz="create-form"
        />
        <div className="create-form__information">
          <InputField
            id={"family"}
            label={"Family:"}
            register={register}
            errors={errors}
            clazz="create-form"
          />
          <InputField
            id={"order"}
            label={"Order:"}
            register={register}
            errors={errors}
            clazz="create-form"
          />
          <InputField
            id={"genus"}
            label={"Genus:"}
            register={register}
            errors={errors}
            clazz="create-form"
          />
        </div>
        <InputField
          id={"calories"}
          label={"Calories:"}
          register={register}
          errors={errors}
          clazz="create-form"
        />
        <InputField
          id={"fat"}
          label={"Fat:"}
          register={register}
          errors={errors}
          clazz="create-form"
        />
        <InputField
          id={"sugar"}
          label={"Sugar:"}
          register={register}
          errors={errors}
          clazz="create-form"
        />
        <InputField
          id={"carbohydrates"}
          label={"Carbohydrates:"}
          register={register}
          errors={errors}
          clazz="create-form"
        />
        <InputField
          id={"protein"}
          label={"Protein:"}
          register={register}
          errors={errors}
          clazz="create-form"
        />
        <button
          type="submit"
          className="btn create-form__submit"
          disabled={!isValid}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default CardCreateForm;
