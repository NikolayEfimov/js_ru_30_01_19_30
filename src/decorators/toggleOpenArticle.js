import React from "react";

export default (Component)=> class WrappedComponent extends Component {

    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        //много лишних условий
        this.state.openArticleId == null ||
        (this.state.openArticleId != null && this.state.openArticleId != openArticleId) ?
            this.setState({openArticleId: openArticleId}) :
            this.setState({openArticleId: null})
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
    }
}
