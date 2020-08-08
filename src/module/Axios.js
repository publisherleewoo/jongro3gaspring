import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:5000/",
});

export const register = async (data) => {
    return await instance.post("users/join", data);
};
