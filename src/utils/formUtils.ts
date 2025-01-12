import { FieldErrors, UseFormRegister } from "react-hook-form";
import * as yup from "yup";

export const numberField = () => yup.number()
    .max(10000, "The value of this field can be no more than 10000")
    .required("This field is required")
    .typeError("The value of this field can only be a number");

export const schema = yup.object({
    name: yup.string().required("This field is required"),
    family: yup.string().required("This field is required"),
    order: yup.string().required("This field is required"),
    genus: yup.string().required("This field is required"),
    calories: numberField(),
    fat: numberField(),
    sugar: numberField(),
    carbohydrates: numberField(),
    protein: numberField(),
});

export type FormData = yup.InferType<typeof schema>;

export interface InputFieldProps {
    id: keyof FormData,
    label: string,
    value?: string | number,
    register: UseFormRegister<FormData>,
    errors: FieldErrors<FormData>,
    clazz: string
}