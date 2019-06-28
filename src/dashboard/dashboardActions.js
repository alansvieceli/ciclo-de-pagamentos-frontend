import Constants from '../common/consts';

import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getSummary(){
    const request = axios.get(`${BASE_URL}/ciclo-de-pagamentos/sumario`)
    return {
        type: Constants.PAGAMENTOS_SUMARIO_GET,
        payload: request
    }
}