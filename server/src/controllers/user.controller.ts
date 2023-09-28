import express, { NextFunction, Response, Request } from "express"
import { BaseController } from "../common/abstract/base.controller";
import { userService, postService } from "../services";
import { registerBodySchema } from "../common/validation.shemmas";

export class UserController extends BaseController {

    constructor() {
        super();
        this.bindRoutes([
            {
                path: "/register",
                method: "post",
                handler: this.register,
                validators: {
                    body: registerBodySchema,
                }
            },
            {
                path: "/login",
                method: "post",
                handler: this.login,

            },
            {
                path: "/",
                method: "get",
                handler: this.getUsers,

            },
            {
                path: "/:userId/posts",
                method: "post",
                handler: this.createPost,

            },
            {
                path: "/:userId/posts",
                method: "get",
                handler: this.getPosts,
            },
        ])
    }

    register = async (req:Request, res:Response, next:NextFunction) => {
            
            // const {login, password, firstName, lastName, email} = req.body;
            
            const user = await userService.addUser(req.body);
            res.send(user);

    }

    login = async (req:Request, res:Response, next:NextFunction) => {

            const user = await userService.login(req.body);
            res.send(user);
        
    }

    getUsers = async (req:Request, res:Response, next:NextFunction) => {

        const users = await userService.getUsers();
        res.send(users);
    
}

    createPost = async (req:Request, res:Response, next:NextFunction) => {
            const date = new Date().toISOString()
            const {id, userId, topic, text, category} = req.body
            const post = await postService.addPost({id, userId, topic, text, category, date});
            res.send(post);
        
    }
    
    getPosts = async(req:Request, res:Response, next:NextFunction) => {

            // const userId = req.params.userId;
            // const { take, skip } = req.query;
            // console.log(take, skip);
            const posts = await postService.getPosts();
            res.send(posts);
        
    }

}

export const userController = new UserController();