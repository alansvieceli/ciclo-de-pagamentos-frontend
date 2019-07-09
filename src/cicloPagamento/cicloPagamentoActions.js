import Constants from '../common/consts';
import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

export function getList(){
    const request = axios.get(`${Constants.BASE_URL}`)
    return {
        type: Constants.PAGAMENTOS_GET,
        payload: request
    }
}

export function create(values){

    return dispatch => {

        axios.post(`${Constants.BASE_URL}`, values)
        .then(resp => {
            toastr.success("Sucessos", "Operação Realizada com Sucessos.")
            dispatch([ //<-- redux multi
                resetForm(Constants.ID_FORM_PAGAMENTO),
                getList(),
                selectTab('tabList'),
                showTabs('tabList', 'tabCreate')
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(err => {
                toastr.error("Erro", err)
            });
        })

    }
}

export function update(value) {

}

export function showUpdate(cicloPagamento){
    //redux-multi...retorna um array de action
    return [
        showTabs("tabUpdate"),
        selectTab("tabUpdate")
    ]
}