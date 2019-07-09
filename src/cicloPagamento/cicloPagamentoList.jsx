import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate } from './cicloPagamentoActions'

class CicloPagamentoList extends React.Component {

    componentWillMount(){
        this.props.getList();        
    }

    renderRows(){
        const list = this.props.list || [];

        return list.map ( obj => (
            <tr key={obj._id}>
                <td>{obj.nome}</td>
                <td>{obj.mes}</td>
                <td>{obj.ano}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(obj)} >
                        <i className="fa fa-pencil" />
                    </button>
                </td>
            </tr>
        ));
    }

    render(){        
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>  
                            <th>Ações</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.cicloPagamento.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoList)
