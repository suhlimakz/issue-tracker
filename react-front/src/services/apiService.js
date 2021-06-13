const axios = require("axios");

const baseUrl = "http://raspberry:9001";

async function loginUser(email, password) {
  try {
    const { data } = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    });

    return data;
    
  } catch (error) {
    console.log(error);
  }
}

export default {
  loginUser
};
