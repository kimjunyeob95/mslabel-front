import { instance } from "@/app/util/instance";

export const handleLogin = async (callback: ()=> void) => {
  try {
    const response = await instance.post("token/create", {
      user_id: "tester123",
      password: "1234",
    });

    if (response) {
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      
      callback();
    }
  } catch (error) {
    localStorage.removeItem("token");
    console.log(error, "login error");
  }
};