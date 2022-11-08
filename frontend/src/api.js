import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/** Yodlr API Class
 * 
 * Static class tying together methods used to get/send to the API
 */

class YodlrApi {

    static async request(endpoint, data={}, method="get"){
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get") ? data : {};

        try {
            return (await axios({url, method, data, params})).data
        }catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    //Individual API routes

    //Get all users

    static async getUsers(){
        let response = await this.request(`users`);
        return response;
    }

    //Register new user
    static async register(data){
        let response = await this.request(`users`, data, "post");
        return response;
    }
}

export default YodlrApi;