import { FunctionComponent } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import * as userService from "../services/userService";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .min(2, "Too short! Should be at least 2/3 characters")
        .required("Required"),
      email: yup
        .string()
        .email("Invalid email , @example.com needed.")
        .required("Required"),
      password: yup
        .string()
        .min(8, "Too short! Should be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      userService
        .registerUser(values)
        .then((result: any) => {
          window.location.href = "/Home";
        })
        .catch((error: any) => {
          alert("Registration failed: " + error.message);
        });
    },
  });

  return (
    <div className="container mt-5">
      <div className="alert alert-secondary" role="alert">
        <h2 className="display-5 text-center text-secondary">
          📚 Book Collection
        </h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center display-5 text-secondary mb-4">
                Register{" "}
              </h1>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="form-label fw-semibold mb-2"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control form-control-lg"
                    autoComplete="off"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your full name"
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <div className="text-danger small mt-1">
                      {formik.errors.fullName}
                    </div>
                  )}
                </div>
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
                <div className="d-grid gap-2 mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? "Registering..." : "Register"}
                  </button>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Back to Login Page
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

export default Register;
