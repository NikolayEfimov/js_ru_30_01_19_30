import React, {Component} from "react";
import CommentList from "./CommentList";
export default class Article extends Component {
    state = {
        isOpen: false,
        showComment: false
    }

    render() {
        const {article} = this.props
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}

            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        let showCommentValue = (!this.state.showComment ? "Show" : "Hide").concat(" comments")
        return (
            <div>
                <section>
                    {this.props.article.text}
                </section>
                {this.isCommentsExist() ?
                    <div>
                        <input type="button" value={showCommentValue} onClick={this.handleCommentButtonClick}/>
                        {this.state.showComment ?
                            <CommentList commentList={this.props.article.comments}>
                            </CommentList> : null}
                    </div> : null}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleCommentButtonClick = (ev)=> {
        this.setState({showComment: !this.state.showComment})
    }
    isCommentsExist(){
        return typeof this.props.article.comments !== "undefined"
    }
}