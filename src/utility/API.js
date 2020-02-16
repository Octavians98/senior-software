import axios from "axios";
import {endpoints} from '../Endpoints'

class API {

    static getEmployee() {
        return axios.get(process.env.REACT_APP_API_LINK + endpoints.EMPLOYEES)
    }
    static addEmployee(data){
        return(
            axios.post(process.env.REACT_APP_API_LINK + endpoints.CREATE, data)
        )
    }
    static updateEmployee(id, data){
        return(
            axios.put(process.env.REACT_APP_API_LINK + endpoints.UPDATE + id, data)
        )
    }
    static deleteEmployee(id){
        return(
            axios.delete(process.env.REACT_APP_API_LINK + endpoints.DELETE + id)
        )
    }
}

export default API
