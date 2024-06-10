import axios from "axios";

const URL = "http://localhost:4000/api/v1";

export const sendMessage = async (data) => {
try {
    return  await axios.post(`${URL}/contact`,data);
} catch (error) {
    console.log("Error while calling send message API", error);
}
}