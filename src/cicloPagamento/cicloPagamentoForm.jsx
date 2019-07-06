import Constants from '../common/consts';
import React from 'react'
import { reduxForm, Field } from 'redux-form'

class CicloPagamentoForm extends React.Component {

    render(){

        const { handleSubmit } = this.props //o reduxform add isso no props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component='input' />
                    <Field name='mes' component='input' />
                    <Field name='ano' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Subtmit</button>
                </div>
            </form>

        )
    }
}

export default reduxForm({form: Constants.ID_FORM_PAGAMENTO})(CicloPagamentoForm)