import LandingIntro from "./LandingIntro";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ModalLayout from "../../containers/ModalLayout";
import { useLogin } from "../../app/custom-hooks/login/useLogin";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import HelperText from "../../components/Typography/HelperText";
import { useState } from "react";
import { GiHospitalCross } from "react-icons/gi";
function Login() {
  const { isOpen } = useSelector((state) => state.modal);
  const { login, isLoading, isSuccess, error } = useLogin();
  const [isNewUser, setIsNewUser] = useState(false);
  console.log(isNewUser);
  const showSignup = () => {
    setIsNewUser(!isNewUser);
  };
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submitForm = async (data) => {
    // await login(data);
    window.location.href = "/app/dashboard";
    localStorage.setItem("access_token", "dummyToken");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#005BA5]">
      <>{isOpen && <ModalLayout />}</>
      <div className="card mx-auto w-full max-w-2xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2 text-center flex items-center justify-center">
              <GiHospitalCross className="text-yellow-600 text-3xl" />{" "}
              {"HealthRecord"}
            </h2>
            <form
              onSubmit={handleSubmit(submitForm)}
              className="flex flex-col items-center"
            >
              <div className="form-control w-full max-w-xs">
                <InputText
                  name="email"
                  labelTitle="Email"
                  containerStyle="mt-4"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  }}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <InputText
                  name="password"
                  type="password"
                  labelTitle="Password"
                  containerStyle="mt-4"
                  control={control}
                  rules={{
                    required: "Password is required",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn mt-6 btn-sm btn-primary bg-[#014878] w-full max-w-xs rounded-lg"
              >
                Login
              </button>

              <ErrorText styleClass="mt-6">{error?.data?.message}</ErrorText>
            </form>
          </div>
          <div className="">
            <LandingIntro />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
