import articleModel, { IArticle } from "../models/article.model"


export const getArticlesService = async () => {
    try {
        const articles = await articleModel.find()
        return articles
    } catch (error) {
        return error
    }
}

export const getSingleArticleByIdService = async (id: string) => {
    try {
        const article = await articleModel.findById(id)
        return article
    } catch (error) {
        return error
    }
}

export const createSingleArticleService = async (article: IArticle) => {
    try {
        const articleCreated = await articleModel.create(article)
        return articleCreated
    } catch (error) {
        return error
    }
}

export const updateSingleArticleService = async (id: string, article: IArticle) => {
    try {
        const articleCreated = await articleModel.findByIdAndUpdate(id, article, {
            new: true,
            runValidators: true,
        })
        return articleCreated
    } catch (error) {
        return error
    }
}

export const deleteSingleArticleService = async (id: string) => {
    try {
        await articleModel.findByIdAndDelete(id)
    } catch (error) {
        return error
    }
}