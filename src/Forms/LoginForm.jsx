/* eslint-disable no-extra-boolean-cast */
import Field from "../components/Field"
import FieldSet from "../components/FieldSet"
import {useForm} from 'react-hook-form';

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = {
      email: 'mhshohan01@gmail.com',
      password : 'asdASD123!@#'
    }

    const found = formData.email === user.email &&
     formData.password === user.password;

    if(!found){
      setError("root.random", {
        message : `User with email '${user.email}' is not found`,
        type : "random"
      })
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(submitForm)}>
          <FieldSet label="Enter Login Details">
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
                  className="text-md text-white cursor-pointer
                  p-1 border-rounded-lg bg-green-500">Login</button>
            </Field>
        </form>
    </div>
  )
}

export default LoginForm