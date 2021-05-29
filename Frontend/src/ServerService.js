import axios from "axios";
import { trackPromise } from "react-promise-tracker";
export const BASE_URL = "http://localhost:8080";
// export const BASE_URL = "https://chiranjeev.herokuapp.com";

class ServerService {
  ngoSignup(data) {
    return trackPromise(axios.post(BASE_URL + "/signup", data));
  }

  otpVerify(data) {
    return trackPromise(axios.post(BASE_URL + "/otp-verify", data));
  }

  ngoLogin(data) {
    return trackPromise(axios.post(BASE_URL + "/login", data));
  }
}

export default new ServerService();
