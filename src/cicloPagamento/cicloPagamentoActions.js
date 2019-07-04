import Constants from '../common/consts';
import axios from 'axios'

export function getList(){
    const request = axios.get(`${Constants.BASE_URL}`)
    return {
        type: Constants.PAGAMENTOS_GET,
        payload: request
    }
}

export function create(values){
    axios.post(`${Constants.BASE_URL}`, values)
    return {
        type: 'TEMP'
    }

}