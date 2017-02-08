import React from "react";

export default (Component)=> class WrappedComponent extends Component {

    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()

        this.state.openArticleId == null ||
        (this.state.openArticleId != null && this.state.openArticleId != openArticleId) ?
            this.setState({openArticleId: openArticleId}) :
            this.setState({openArticleId: null})
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
    }
}