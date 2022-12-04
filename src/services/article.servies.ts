import articleModel, { IArticle } from "../models/article.model"


export const getArticlesService = async () => {
    const articles = await articleModel.find()
    return articles
}

export const getSingleArticleByIdService = async (id: string) => {
    const article = await articleModel.findById(id)
    return article

}

export const createSingleArticleService = async (article: IArticle) => {
    const articleCreated = await articleModel.create(article)
    return articleCreated
}

export const updateSingleArticleService = async (id: string, article: IArticle) => {
    const articleCreated = await articleModel.findByIdAndUpdate(id, article, {
        new: true,
        runValidators: true,
    })
    return articleCreated

}

export const deleteSingleArticleService = async (id: string) => {
    await articleModel.findByIdAndDelete(id)
    return "article deleted successfully"
}