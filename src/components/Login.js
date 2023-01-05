import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//VALIDATE FUNCTION
import validate from "./validate";

//TOASTIFY
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "./toast";
//STYLES
import styles from "./signup.module.css";
//COSTUM HOOK
import useTitle from "../hook/useTitle";

function Login() {
  useTitle("Login page");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  //Change Handler
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  //Focus Handler
  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  //Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      console.log(data);
      notify("success", "ورود با موفقیت انجام شد");
    } else {
      setTouched({
        email: true,
        password: true,
      });
      notify("errors", "تمام فیلد هارا پر و اطلاعات معتبر وارد کنید");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <h2 className={styles.header}>ورود</h2>

        <div className={styles.formField}>
          <label>ایمیل : </label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>رمز عبور : </label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div className={styles.formButtons}>
          <Link to="/signup">ثبت نام</Link>
          <button type="submit" onClick={submitHandler}>
            ورود
          </button>
        </div>

        
        <ToastContainer />
      </form>
    </div>
  );
}

export default Login;
