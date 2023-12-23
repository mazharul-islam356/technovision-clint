import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://technovision-server-a8eebum5a-mazharul-islams-projects.vercel.app/'
})

const useAxios = () => {

return axiosPublic

};

export default useAxios;