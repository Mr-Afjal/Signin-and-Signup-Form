const SigninText = document.querySelector(".title-text .login");
const SigninForm = document.querySelector("form.Signin");
const SigninBtn = document.querySelector("label.Signin");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  SigninForm.style.marginLeft = "-50%";
  SigninText.style.marginLeft = "-50%";
};
SigninBtn.onclick = () => {
  SigninForm.style.marginLeft = "0%";
  SigninText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};