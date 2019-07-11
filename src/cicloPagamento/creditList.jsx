import React from 'react'

import Grid from '../common/layout/grid'
import { Field } from 'redux-form'
class CreditList extends React.Component {

    renderRows(){
        return (
            <tr>
                <td><Field name="creditos[0].nome" component="input" /></td>
                <td><Field name="creditos[0].valor" component="input" /></td>
                <td></td>
            </tr>
        )
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