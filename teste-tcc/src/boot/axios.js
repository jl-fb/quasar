import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const axiosInstance = axios.create({
    baseURL: process.env.API,
    timeout: 6000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

export { axiosInstance }



