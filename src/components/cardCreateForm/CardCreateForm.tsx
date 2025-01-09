import { ReactElement } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

import { useAppDispatch } from "../../hooks/hooks";
import { fruitsAdd } from "../../store/fruitsSlice";
import { IFruit } from "../../types/data";

import "./cardCreateForm.scss"
import { nanoid } from "nanoid";

const schema = yup.object({
    name: yup.string()
        .required("This field is required"),
    family: yup.string()
        .required("This field is required"),
    order: yup.string()
        .required("This field is required"),
    genus: yup.string()
        .required("This field is required"),
    calories: yup.number()
        .max(10000, "The value of this field can be no more than 10000")
        .required("This field is reasdasdquired")
        .typeError("The value of this field can only be a number"),
    fat: yup.number()
        .max(10000, "The value of this field can be no more than 10000")
        .required("This field is required")
        .typeError("The value of this field can only be a number"),
    sugar: yup.number()
        .max(10000, "The value of this field can be no more than 10000")
        .required("This field is required")
        .typeError("The value of this field can only be a number"),
    carbohydrates: yup.number()
        .max(10000, "The value of this field can be no more than 10000")
        .required("This field is required")
        .typeError("The value of this field can only be a number"),
    protein: yup.number()
        .max(10000, "The value of this field can be no more than 10000")
        .required("This field is required")
        .typeError("The value of this field can only be a number"),
})
type FormData = yup.InferType<typeof schema>;

const CardCreateForm = (): ReactElement => {

    const dispatch = useAppDispatch();

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>({
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<FormData> = data => {
        reset()

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
                protein: data.protein
            }
        }
        
        dispatch(fruitsAdd(res))
    };

return (
        <div className="create-form">
            <h2 className="create-form__title">Create your own fruit</h2>
            <form className="create-form__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="create-form__section">
                    <label htmlFor="name" className="create-form__label">Name:</label>
                    <input 
                        id="name" 
                        className="create-form__input"
                        {...register("name")} />
                    {errors.name && <span className="create-form__error">{errors.name?.message}</span>}
                </div>
                <div className="create-form__information">
                    <div className="create-form__section">
                        <label htmlFor="family" className="create-form__label">Family:</label>
                        <input 
                            id="family" 
                            className="create-form__input"
                            {...register("family")} />
                        {errors.family && <span className="create-form__error">{errors.family?.message}</span>}
                    </div>
                    <div className="create-form__section">
                        <label htmlFor="order" className="create-form__label">Order:</label>
                        <input 
                            id="order" 
                            className="create-form__input"
                            {...register("order")} />
                        {errors.order && <span className="create-form__error">{errors.order?.message}</span>}
                    </div>
                    <div className="create-form__section">
                        <label htmlFor="genus" className="create-form__label">Genus:</label>
                        <input 
                            id="genus" 
                            className="create-form__input"
                            {...register("genus")} />
                        {errors.genus && <span className="create-form__error">{errors.genus?.message}</span>}
                    </div>
                </div>
                <div className="create-form__section">
                    <label htmlFor="calories" className="create-form__label">Calories:</label>
                    <input 
                        id="calories" 
                        className="create-form__input"
                        {...register("calories")} />
                    {errors.calories && <span className="create-form__error">{errors.calories?.message}</span>}
                </div>
                <div className="create-form__section">
                    <label htmlFor="fat" className="create-form__label">Fat:</label>
                    <input 
                        id="fat" 
                        className="create-form__input"
                        {...register("fat")} />
                    {errors.fat && <span className="create-form__error">{errors.fat?.message}</span>}
                </div>
                <div className="create-form__section">
                    <label htmlFor="sugar" className="create-form__label">Sugar:</label>
                    <input 
                        id="sugar" 
                        className="create-form__input"
                        {...register("sugar")} />
                    {errors.sugar && <span className="create-form__error">{errors.sugar?.message}</span>}
                </div>
                <div className="create-form__section">
                    <label htmlFor="carbohydrates" className="create-form__label">Carbohydrates:</label>
                    <input 
                        id="carbohydrates" 
                        className="create-form__input"
                        {...register("carbohydrates")} />
                    {errors.carbohydrates && <span className="create-form__error">{errors.carbohydrates?.message}</span>}
                </div>
                <div className="create-form__section">

Кристина, [09.01.2025 16:16]
<label htmlFor="protein" className="create-form__label">Protein:</label>
                    <input 
                        id="protein" 
                        className="create-form__input"
                        {...register("protein")} />
                    {errors.protein && <span className="create-form__error">{errors.protein?.message}</span>}
                </div>
                <button 
                    type="submit" 
                    className="create-form__submit"
                    disabled={!isValid}>Send</button>
            </form>
        </div>
    )
}

export default CardCreateForm;
