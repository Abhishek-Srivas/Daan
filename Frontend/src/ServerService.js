import axios from "axios";
import { trackPromise } from "react-promise-tracker";
// export const BASE_URL = "http://localhost:8080";
export const BASE_URL = "https://daan-app.herokuapp.com/";

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

  campaigns() {
    return trackPromise(axios.get(BASE_URL + "/campaign"));
  }

  campaignDetails(id) {
    return trackPromise(axios.get(BASE_URL + "/campaign?id=" + id));
  }

  searchCampaign(city) {
    return trackPromise(axios.get(BASE_URL + "/campaign?city=" + city));
  }

  yourCampaigns(id) {
    return trackPromise(
      axios.get(BASE_URL + "/get-campaign?id=" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
    );
  }

  deleteRequest(id) {
    return trackPromise(
      axios.delete(BASE_URL + "/delete?id=" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
    );
  }
}

export default new ServerService();
