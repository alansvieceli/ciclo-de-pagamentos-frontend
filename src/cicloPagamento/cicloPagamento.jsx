import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'


class CicloPagamento extends React.Component {

    render (){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro'/>
                <Content>
                    Ciclos de Pagamento
                </Content>
            </div>
        )
    }

}

export default CicloPagamento