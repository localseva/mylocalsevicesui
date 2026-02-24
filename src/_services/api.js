import axios from "axios";

const api=axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL ||"http://localhost:8080/api", 
    headers:{
        "Content-Type":"application/json",
    },
    withCredentials:false, // change to true only if backend uses cookies

});


//Request interceptor automatically attach the token to every request

api.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem("token");

        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (error)=>Promise.reject(error)
);

//Response Interceptor Global error handling

api.interceptors.response.use(
    (response)=> response,
    (error)=>{
        //If token expired or invalid
        if(error.response?.status===401){
            console.warn("Unauthorized - Redirecting to login");

            localStorage.removeItem("token");

        // Optional Redirecting
            window.location.href="./login"
        }

        return Promise=reject(error)
    }

);

export default api;
