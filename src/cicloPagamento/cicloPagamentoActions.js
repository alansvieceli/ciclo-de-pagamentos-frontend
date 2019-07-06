import Constants from '../common/consts';
import axios from 'axios'
import { toastr } from 'react-redux-toastr'

export function getList(){
    const request = axios.get(`${Constants.BASE_URL}`)
    return {
        type: Constants.PAGAMENTOS_GET,
        payload: request
    }
}

export function create(values){
    axios.post(`${Constants.BASE_URL}`, values)
        .then(resp => {
            toastr.success("Sucessos", "Operação Realizada com Sucessos.")
        })
        .catch(e => {
            e.response.data.errors.forEach(err => {
                toastr.error("Erro", err)
            });
        })
    return {
        type: 'TEMP'
    }

}