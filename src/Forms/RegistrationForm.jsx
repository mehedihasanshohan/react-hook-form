/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */

import Field from "../components/Field"
import FieldSet from "../components/FieldSet"
import {useForm} from 'react-hook-form';


const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

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