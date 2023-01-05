const validate = (data, type) => {
  const errors = {};

  if (!data.password.trim()) {
    errors.password = " رمز عبور الزامی میباشد";
  } else if (data.password.length < 6) {
    errors.password = "رمز عبور باید 6 رقم یا بیشتر باشد";
  } else {
    delete errors.password;
  }
  if (!data.email.trim()) {
    errors.email = "ایمیل الزامی میباشد";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }


  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "نام کاربری الزامی میباشد";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "تایید رمز عبور الزامی میباشد";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "رمز عبور مشابه نمیباشد";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "قوانین را باید بپذیرید";
    }
  }

  return errors;
};

export default validate;
