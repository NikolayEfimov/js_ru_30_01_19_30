import React, {Component} from "react";
export default class Comment extends Component {

    render() {
        const {comment} = this.props
        return (
            <div>
                <h4 onClick={this.handleClick}>{comment.user}</h4>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return (
            <div>
                <section>
                    {this.props.comment.text}
                </section>
            </div>
        )
    }

}