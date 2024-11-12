import Field from "../components/Field"
import FieldSet from "../components/FieldSet"
import {useForm} from 'react-hook-form';

const LoginForm = () => {
  const {
    register, handleSubmit
  } = useForm();

  const submitForm = (FormData) => {
    console.log(FormData);
  }

  return (
    <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(submitForm)}>
          <FieldSet label="Enter Login Details">
            <Field label="Email">
                <input
                  {...register("email")}
                    className="p-2 border border-gray-200 box-border w-[300px] rounded-md"
                    type="email" name="email" id="email"
                    placeholder="Enter Your Email">
                </input>
            </Field>
            <Field label="Password">
                <input
                  {...register("password")}
                    className="p-2 border border-gray-200 box-border w-[300px] rounded-md"
                    type="password" name="password" id="password"
                    placeholder="Enter Your Password">
                </input>
            </Field>
          </FieldSet>
          <Field>
                <button

                  className="text-md text-white cursor-pointer
                  p-1 border-rounded-lg bg-green-500">Login</button>
            </Field>
        </form>
    </div>
  )
}

export default LoginForm