import { ReactElement } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch } from "../../hooks/hooks";
import { setFruit } from "../../store/fruitsSlice";

import { IFruit } from "../../types/data";

import { schema, FormData } from "../../utils/formUtils";

import InputField from "../inputField/InputField";

import "./editDetailedCard.scss";

interface ComponentProps {
  fruit: IFruit;
  onClose: () => void;
}

const EditDetailedCard = ({ fruit, onClose }: ComponentProps): ReactElement => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const res: IFruit = {
      name: data.name,
      id: fruit.id,
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

    dispatch(setFruit(res));
    onClose();
  };

  return (
    <div className="edit-detailed-card">
      <div className="edit-detailed-card__title">
        <InputField
          id="name"
          label="Name"
          value={fruit.name}
          register={register}
          errors={errors}
          clazz="edit-detailed-card"
        />
      </div>
      <div className="edit-detailed-card__info">
        <div className="edit-detailed-card__nutritions">
          <InputField
            id="calories"
            label="Calories"
            value={fruit.nutritions.calories}
            register={register}
            errors={errors}
            clazz="edit-detailed-card"
          />
          <InputField
            id="protein"
            label="Protein"
            value={fruit.nutritions.protein}
            register={register}
            errors={errors}
            clazz="edit-detailed-card"
          />
          <InputField
            id="sugar"
            label="Sugar"
            value={fruit.nutritions.sugar}
            register={register}
            errors={errors}
            clazz="edit-detailed-card"
          />
          <InputField
            id="fat"
            label="Fat"
            value={fruit.nutritions.fat}
            register={register}
            errors={errors}
            clazz="edit-detailed-card"
          />
          <InputField
            id="carbohydrates"
            label="Carbohydrates"
            value={fruit.nutritions.carbohydrates}
            register={register}
            errors={errors}
            clazz="edit-detailed-card"
          />
        </div>
        <div className="edit-detailed-card__description">
          <InputField
            id="family"
            label="Family"
            value={fruit.family}
            register={register}
            errors={errors}
            clazz="edit-detailed-card"
          />
          <InputField
            id="genus"
            label="Genus"
            value={fruit.genus}
            register={register}
            errors={errors}
            clazz="edit-detailed-card"
          />
          <InputField
            id="order"
            label="Order"
            value={fruit.order}
            register={register}
            errors={errors}
            clazz="edit-detailed-card"
          />
        </div>
      </div>
      <button
        className="btn btn__average edit-detailed-card__btn"
        onClick={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        Save
      </button>
    </div>
  );
};

export default EditDetailedCard;
