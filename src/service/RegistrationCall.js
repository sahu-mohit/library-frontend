import axios from 'axios'
const BASE_URL = "http://localhost:8081/";

export default class RegistrationCall{
  static doRegistration(data){
    return axios.post(BASE_URL+"registration",data)
  }
}
// new RegistrationCall();
