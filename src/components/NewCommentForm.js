import React, {Component, PropTypes} from "react";
import {generateComment} from "../AC/index";
import {connect} from "react-redux";
class NewCommentForm extends Component {
    static propTypes = {}

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.generateComment(this.state.text, this.state.user)
        //пока не понял как запустить обновление
        //по идее же перерисовка должна быть после каждого обновления
        //и если state возвращаем в reducer новый
        // то должен быть rerendering. но пока нет
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange={this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange={this.handleChange('user')}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default connect(null, {generateComment})(NewCommentForm)