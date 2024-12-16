import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : '7ab37ed7f568482d8eed86057b365c78'
    }
})