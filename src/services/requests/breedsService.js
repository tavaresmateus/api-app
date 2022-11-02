import {api} from "../api/api"

const getBreeds = () =>  {
    return api.get(`breeds`)
}

export default {
    getBreeds
}