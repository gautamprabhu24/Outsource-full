import axios from "axios";


const newRequest =  axios.create({
   baseURL:"http://localhost:8800/api/",
   withcredentials:true
});
export default newRequest;