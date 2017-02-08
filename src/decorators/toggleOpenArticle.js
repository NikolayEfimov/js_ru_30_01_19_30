import React from "react";

export default (Component)=> class WrappedComponent extends Component {

    state = {
        openArticleId: null,
        prevArticleId:null
    }

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        //хотел сохранять предыдущее состояние и если повторяется возвращать null
        //но пока не работает
        this.state.prevArticleId != openArticleId ?
            this.setState({prevArticleId:this.state.openArticleId,openArticleId:openArticleId}):
            this.setState({null})
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
    }
}