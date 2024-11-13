/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */

import Field from "../components/Field"
import FieldSet from "../components/FieldSet"
import {useForm, useFieldArray} from 'react-hook-form';


const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control
  } = useForm();

  const {fields, append, remove} = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  }

  return (
    <>
       <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(submitForm)}>
          <FieldSet label="Enter Your Details">
          <Field label="Full Name" error={errors.fname}>
                <input
                    {...register("fname", {
                      required: "Your Name is required."})}
                    className={`p-2 border border-gray-200 box-border w-[300px] rounded-md
                      ${!!errors.fname? "border-red-500" : "border-green-200"}`}
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Enter Your Full Name">
                </input>
            </Field>
          <Field label="Age" error={errors.age}>
                <input
                    {...register("age", {
                    max : {
                      value: 100,
                      message: "Age must be between 0 to 100"
                    },
                      required: "Age is required."})}
                    className={`p-2 border border-gray-200 box-border w-[300px] rounded-md
                      ${!!errors.age? "border-red-500" : "border-green-200"}`}
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Enter Your Age">
                </input>
            </Field>
            <Field label="Email" error={errors.email}>
                <input
                    {...register("email", {
                      required: "Email is required."})}
                    className={`p-2 border border-gray-200 box-border w-[300px] rounded-md
                      ${!!errors.email? "border-red-500" : "border-green-200"}`}
                    type="email" name="email" id="email"
                    placeholder="Enter Your Email">
                </input>
            </Field>
            <Field label="Password" error={errors.password}>
                <input
                     {...register("password", {
                      required: "Password is required.",
                      minLength:{
                        value:8,
                        message: "Your passsword must be at least 8 characters"
                      },
                      // pattern: {
                      //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      //   message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
                      // },
                     })}

                    className={`p-2 border border-gray-200 box-border w-[300px] rounded-md
                      ${!!errors.password? "border-red-500" : "border-green-200"}`}
                    type="password" name="password" id="password"
                    placeholder="Enter Your Password">
                </input>
            </Field>

          </FieldSet>

          <FieldSet label="Enter Socials Handles">
            {
              fields.map((field, index) => {
                return (
                  <div
                      className="flex justify-between items-center w-max"
                      key={field.id}>
                           <Field label="Social Name">
                            <input
                                className="p-2 border box-border w-full rounded-md"
                                {...register(`socials[${index}].name`)}
                                type="text"
                                name={`socials[${index}].name`}
                                id={`socials[${index}].name`}
                                placeholder="Enter Your Social Platform">
                            </input>
                         </Field>
                           <Field label="Social URL">
                            <input
                                className="p-2 border box-border w-full rounded-md"
                                {...register(`socials[${index}].url`)}
                                type="text"
                                name={`socials[${index}].url`}
                                id={`socials[${index}].url`}
                                placeholder="Enter Your Social URL">
                            </input>
                         </Field>
                         <button
                          className="mt-8 mr-2 text-2xl"
                          onClick={() => remove(index)}>
                            &#8722;
                         </button>
                  </div>
                )
              })
            }
              <button
                className="mt-8 text-md text-white cursor-pointer
                  border rounded-lg bg-gray-500 p-1 m-auto"
                onClick={() => append({name: "", url: ""})}
                >Add a Social Handle</button>
          </FieldSet>

          <div>{errors?.root?.random?.message}</div>
          <Field>
                <button
                  type="submit"
                  className="text-md m-auto text-white cursor-pointer
                  p-1 rounded-lg bg-green-500">Register</button>
            </Field>
        </form>
    </div>
    </>
  )
}

export default RegistrationForm