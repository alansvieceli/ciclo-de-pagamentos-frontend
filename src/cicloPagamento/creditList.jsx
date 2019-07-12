import React from 'react'
import { Field } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends React.Component {

    renderRows(){
        const list = this.props.list || []

        //console.log(this.props.list);

        return list.map ((item, index) => (
            <tr key={index}>
                <td><Field name={`creditos[${index}].nome`} component={Input} 
                    placeholder="Informe o nome" readOnly={this.props.readOnly} /></td>
                <td><Field name={`creditos[${index}].valor`} component={Input} 
                    placeholder="Informe o valor" readOnly={this.props.readOnly} /></td>
                <td></td>
            </tr>
        ))
    }

    render(){
        return (
            <Grid cols={this.props.cols}>
                <fieldset>Créditos</fieldset>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Grid>
        )
    }
}

export default CreditList;