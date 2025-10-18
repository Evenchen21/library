import { FunctionComponent } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import * as userService from "../services/userService";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Required"),
      password: yup
        .string()
        .min(8, "Too short! Should be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      userService
        .loginUser(values.email, values.password)
        .then((result: any) => {
          console.log("Login successful:", result.data);
          // Navigate to home page after successful login
          window.location.href = "/Home";
        })
        .catch((error: any) => {
          console.log("Login error:", error);
          alert("Login failed: " + error.message);
        });
    },
  });

  return (
    <div className="container mt-5">
      <div className="alert alert-secondary" role="alert">
        <h2 className="display-5 text-center text-secondary">
          Book Collection
        </h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center display-5 text-secondary mb-4">
                LOGIN PAGE
              </h1>
              {/* -------------------------------------------- */}
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label fw-semibold mb-2"
                  >
                    Email address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-lg"
                    autoComplete="off"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger small mt-1">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="form-label fw-semibold mb-2"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    autoComplete="off"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-danger small mt-1">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? "Logging in..." : "Login"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => (window.location.href = "/register")}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
