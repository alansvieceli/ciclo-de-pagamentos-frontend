import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './cicloPagamentoActions'

class CicloPagamentoList extends React.Component {

    componentWillMount(){
        this.props.getList();        
    }

    render(){
        console.log(this.props.list)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>                            
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.cicloPagamento.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoList)
