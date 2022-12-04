import { Request, Response } from "express";
import { deleteSingleArticleService, getArticlesService, getSingleArticleByIdService, updateSingleArticleService } from "../services/article.servies";


// @desc      Get articles
// @route     GET /api/civilities
// @access    Public
export async function getArticlesController(req: Request, res: Response) {
    try {
        const articles = await getArticlesService();
        return res.status(200).json({ success: true, data: articles })
    } catch (error) {
        return res.status(400).json({ success: true, data: error })
    }
}

// @desc      Get article
// @route     GET /api/article/:articleId
// @access    Public
export async function getArticleController(req: Request, res: Response) {
    try {
        const article = await getSingleArticleByIdService(req.params.articleId);
        if (!article) {
            return res.status(404).json({ success: false, data: "article not found" })
        }
        return res.status(200).json({ success: true, data: article })
    } catch (error) {
        return res.status(400).json({ success: true, data: error })
    }
}

// @desc      Update article
// @route     PUT /api/article/:articleId
// @access    Public
export async function updateArticleController(req: Request, res: Response) {
    try {
        await updateSingleArticleService(req.params.articleId, req.body);
        return res.status(200).json({ success: true, data: "article updated successfully" })
    } catch (error) {
        return res.status(400).json({ success: true, data: error })
    }
}

// @desc      Update article
// @route     PUT /api/article/:articleId
// @access    Public
export async function deleteArticleController(req: Request, res: Response) {
    try {
        await deleteSingleArticleService(req.params.articleId);
        return res.status(200).json({ success: true, data: "article deleted successfully" })
    } catch (error) {
        return res.status(400).json({ success: true, data: error })
    }
}