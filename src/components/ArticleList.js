import React, {Component, PropTypes} from "react";
import Article from "./Article";
import toggleOpenArticle from "../decorators/toggleOpenArticle";
class ArticleList extends Component {

    static propTypes = {
    //А вот сюда еще и из декоратора данные приходят
        articles: PropTypes.array.isRequired
    }

    render() {
        const {articles, openArticleId, toggleOpenArticle} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == openArticleId}
                toggleOpen={toggleOpenArticle(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.defaultProps = {
    articles: []
}

export default toggleOpenArticle(ArticleList)

