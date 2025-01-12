import { ReactElement } from "react";

import { InputFieldProps } from "../../utils/formUtils";

const InputField = ({
  id,
  label,
  value,
  register,
  errors,
  clazz,
}: InputFieldProps): ReactElement => {
  return (
    <div className={`${clazz}__section`}>
      <label htmlFor={id} className={`${clazz}__label`}>
        {label}
      </label>
      <input
        id={id}
        className={`${clazz}__input`}
        defaultValue={value || value === 0 ? value : ""}
        {...register(id)}
      />
      {errors[id] && (
        <span className={`${clazz}__error`}>{errors[id].message}</span>
      )}
    </div>
  );
};

export default InputField;
