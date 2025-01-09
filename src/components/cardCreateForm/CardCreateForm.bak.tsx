import { ReactElement } from "react";

import { FieldErrors, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { nanoid } from "nanoid";

import { useAppDispatch } from "../../hooks/hooks";
import { fruitsAdd } from "../../store/fruitsSlice";
import { IFruit } from "../../types/data";

import "./cardCreateForm.scss"

type FormData = yup.InferType<typeof schema>;

interface InputFieldProps {
    id: string,
    label: string,
    register: UseFormRegister<FormData>,
    errors: FieldErrors<FormData>
}

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
    }

    return (
        <div className="create-form">
            <h2 className="create-form__title">Create your own fruit</h2>
            <form className="create-form__form" onSubmit={handleSubmit(onSubmit)}>
                <InputField id={"name"} label={"Name:"} register={register} errors={errors}/>
                <div className="create-form__information">
                    <InputField id={"family"} label={"Family:"} register={register} errors={errors}/>
                    <InputField id={"order"} label={"Order:"} register={register} errors={errors}/>
                    <InputField id={"genus"} label={"Genus:"} register={register} errors={errors}/>
                </div>
                <InputField id={"calories"} label={"Calories:"} register={register} errors={errors}/>
                <InputField id={"fat"} label={"Fat:"} register={register} errors={errors}/>
                <InputField id={"sugar"} label={"Sugar:"} register={register} errors={errors}/>
                <InputField id={"carbohydrates"} label={"Carbohydrates:"} register={register} errors={errors}/>
                <InputField id={"protein"} label={"Protein:"} register={register} errors={errors}/>
                <button 
                    type="submit" 
                    className="create-form__submit"
                    disabled={!isValid}>Send</button>
            </form>
        </div>
    )
}

const InputField = ({ id, label, register, errors }: InputFieldProps): ReactElement => {
    return (
        <div className="create-form__section">
            <label htmlFor="protein" className="create-form__label">{label}</label>
            <input 
                id={id}
                className="create-form__input"
                {...register(id)} />
            {errors[id] && <span className="create-form__error">{errors[id].message}</span>}
        </div>
    )
}

export default CardCreateForm;