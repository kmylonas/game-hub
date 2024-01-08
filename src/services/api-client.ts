import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '13e7e73ccaff4f9b9aecc346e160f0f8'
    }
})