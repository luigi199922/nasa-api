import axios from 'axios'

const instance = axios.create({
    baseURL:'https://api.nasa.gov/'
})

export default instance