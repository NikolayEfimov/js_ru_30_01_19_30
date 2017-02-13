import React, {Component} from "react";

export default class CommentForm extends Component {

    state = {
        commentText: '',
        user: ''
    }

    render() {
        /*почему при типе "submit"
         после отправки формы теряется
         state активной открытой статьи в ArticleList
         а при "button" - нет. Хотя setState и там и там происходит*/
        return <div>
            <form>
                <label>
                    User:
                    <input type="text"
                           name="user"
                           value={this.state.user}
                           onChange={this.userFieldHandle}
                    />
                </label>
                <label>
                    Comment:
                    <input type="text"
                           name="comment"
                           value={this.state.commentText}
                           onChange={this.commentTextHandle}
                    />
                </label>

                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
        </div>
    }

    userFieldHandle = (ev) => {
        this.setState({
            user: ev.target.value
        })
    }
    commentTextHandle = (ev) => {
        this.setState({
            commentText: ev.target.value
        })
    }

    handleSubmit = (ev)=> {
        this.setState({
            commentText: '',
            user: ''
        })
        console.log("comment send")
    }

}