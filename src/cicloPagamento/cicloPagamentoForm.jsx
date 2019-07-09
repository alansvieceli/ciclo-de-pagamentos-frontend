import Constants from '../common/consts';
import React from 'react'
import { reduxForm, Field } from 'redux-form'

import labelAndInput from '../common/form/labelAndInput'

class CicloPagamentoForm extends React.Component {

    render(){

        const { handleSubmit } = this.props //o reduxform add isso no props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={labelAndInput} 
                        label='Nome' cols='12 4' placeholder="Informe o nome" />
                    <Field name='mes' component={labelAndInput} type='number'
                        label='Mês' cols='12 4' placeholder="Informe o mês"/>
                    <Field name='ano' component={labelAndInput} type='number'
                        label='Ano' cols='12 4' placeholder="Informe o ano"/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Subtmit</button>
                </div>
            </form>

        )
    }
}

export default reduxForm({form: Constants.ID_FORM_PAGAMENTO, destroyOnUnmount: false})(CicloPagamentoForm)

//destroyOnUnmount: nao quero q ele destrua os dados do form quando o componente for destruido