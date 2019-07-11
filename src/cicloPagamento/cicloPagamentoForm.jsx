import Constants from '../common/consts';
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './cicloPagamentoActions'
import labelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'

class CicloPagamentoForm extends React.Component {

    render(){

        const { handleSubmit, readOnly } = this.props //o reduxform add isso no props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder="Informe o nome" />
                    <Field name='mes' component={labelAndInput} readOnly={readOnly} type='number'
                        label='Mês' cols='12 4' placeholder="Informe o mês"/>
                    <Field name='ano' component={labelAndInput} readOnly={readOnly} type='number'
                        label='Ano' cols='12 4' placeholder="Informe o ano"/>
                    <CreditList cols="12 6" readOnly={readOnly}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>

        )
    }
}

CicloPagamentoForm = reduxForm({form: Constants.ID_FORM_PAGAMENTO, destroyOnUnmount: false})(CicloPagamentoForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(CicloPagamentoForm) 

//destroyOnUnmount: nao quero q ele destrua os dados do form quando o componente for destruido