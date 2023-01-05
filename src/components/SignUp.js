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

function SignUp() {
  useTitle("SignUp page");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touched]);

  //Change Handler
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
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
      notify("success", "ثبت نام با موفقیت انجام شد");
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("errors", "تمام فیلد هارا پر و اطلاعات معتبر وارد کنید");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <h2 className={styles.header}>ثبت نام</h2>
        <div className={styles.formField}>
          <label>نام کاربری : </label>
          <input
            className={
              errors.name && touched.name
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
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
        <div className={styles.formField}>
          <label>تایید رمز عبور : </label>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>تمامی قوانین را میپذیرم </label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">ورود</Link>
          <button type="submit" onClick={submitHandler}>
            ثبت نام
          </button>
        </div>
        
        <ToastContainer />
      </form>
    </div>
  );
}

export default SignUp;