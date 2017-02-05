import React, {Component} from "react";
import Comment from "./Comment"
export default class CommentList extends Component {

    render() {
        const {commentList} = this.props
        const commentElements = commentList.map((comment)=> <li key={comment.id}>
            <Comment comment={comment}/>
        </li>)
        return <ul>
            {commentElements}
        </ul>
    }
}


