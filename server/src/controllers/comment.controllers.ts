import express, { NextFunction, Response, Request } from "express"
import { BaseController } from "../common/abstract/base.controller";
import { commentService } from "../services";

export class CommentController extends BaseController {

    constructor() {
        super();
        this.bindRoutes([
            {
                path: "/add",
                method: "post",
                handler: this.createComment,
            },
            {
                path: "/",
                method: "get",
                handler: this.getComment,
            },
            {
                path: "/:commentId",
                method: "delete",
                handler: this.deleteComment,
            },
            {
                path: "/:commentId",
                method: "patch",
                handler: this.editComment,
            },
        ])
    }
    createComment = async (req:Request, res:Response, next:NextFunction) => {
        const date = new Date().toISOString()
        const {email, name, message} = req.body
        // res.send({email, name, message});
        const comment = await commentService.addComment({email, name, message, date});
        res.send(comment);
    
}

    getComment = async(req:Request, res:Response, next:NextFunction) => {

        // const userId = req.params.userId;
        // const { take, skip } = req.query;
        // console.log(take, skip);
        const posts = await commentService.getComments();
        res.send(posts);
    
}

    deleteComment = async (req:Request, res:Response, next:NextFunction) => {

            const commentId = req.params.commentId;
            const comment = await commentService.deleteComment(commentId);
            res.send(`Comment ${commentId} is deleted`);
        
    }

    editComment = async (req:Request, res:Response, next:NextFunction) => {
            const commentId = req.params.commentId;
            const {theme, text, category, date} = req.body;
            const comment = await commentService.editComment(commentId);
            res.send(comment);
        
    }
    
}

export const commentController = new CommentController();