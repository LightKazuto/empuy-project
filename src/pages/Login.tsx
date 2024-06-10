import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Loading from "../component/LoadingComponent";
import bg from "../Asset/bg.jpeg";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = {
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required to fill"),
    password: Yup.string().required("Password is required to fill"),
  });

  function onSubmit(values: any) {
    const { name, password } = values;

    try {
      if (name && password === "imyour") {
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);

        setLoading(true);
        setTimeout(() => {
          alert("Login Success");
          setLoading(false);
          navigate("/Dashboard");
        }, 2000);
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      {!loading && (
        <div className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-80">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
              <div className="text-center mb-6 p-2">
                <h1 className="text-2xl font-bold tracking-wider">Login</h1>
                <p className="pt-4">
                  Login with the password and username provided by the owner
                </p>
              </div>
              <div className="mb-4">
                <Field
                  name="name"
                  type="text"
                  placeholder="Input Your Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-6">
                <Field
                  name="password"
                  type="password"
                  placeholder="Input Your Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}
      <Loading isLoading={loading} />
    </div>
  );
}

export default Login;
