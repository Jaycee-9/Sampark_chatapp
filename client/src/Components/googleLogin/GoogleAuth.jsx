import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { userLogin } from "../../service/api";
import { useNavigate } from "react-router-dom";

import Footer from "../footer/footer";

function GoogleAuth() {
  const navigate = useNavigate();
  const handleLoginSuccess = async (res) => {
    const loginCredential = res.credential;
    const decode = jwtDecode(loginCredential);
    const userData = await userLogin(decode);
    localStorage.setItem("user", JSON.stringify(userData.data));
    navigate("/");
  };
  const handleError = (res) => {
    console.log("Login failed.", res);
  };
  return (
    <div className="bg-slate-700 w-full h-[100vh] p-8">
      <div className="max-w-[800px]  flex mx-auto relative top-20 rounded-3xl shadow-2xl max-lg:top-0 max-lg:flex-col max-lg:py-9">
        <img
          src="/loginPage/sampark_1.jpg"
          alt="login-image"
          className=" rounded-l-3xl w-[400px] max-lg:mx-auto max-lg:rounded-3xl max-sm:w-[75%]"
        />

        <div className="max-w-[400px] mx-auto h-auto my-auto p-4 relative bg-white rounded-lg max-lg:mt-[70px]">
          <h1 className="absolute right-[45px] bottom-24 text-3xl text-white max-lg:text-xl max-lg:right-[63px]">
            Sampark
          </h1>
          <GoogleLogin onSuccess={handleLoginSuccess} onError={handleError} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GoogleAuth;
