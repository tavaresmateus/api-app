import axios from "axios";

export const api = axios.create({
    baseURL:"https://api.TheDogAPI.com/v1/",
    headers:{
        'Content-Type': 'application/json',
        'x-api-key': 'live_CwbHPcrzEeYUUBGqItLCwfMUQe0NgV5kjwmQunmINSAamQf7CkVecBj9n4BCTq74'
    }
})