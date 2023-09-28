// import { Pagination } from '../common/types-and-interfaces'
import { Types } from 'mongoose';
import { CommentModel, Comment, User, UserModel } from '../models';
import { HttpError } from '../common/errors';


export class CommentService {
    
    async addComment(
        params: object,
        ): Promise<Comment> {
            return CommentModel.create(params);
        }

        async getComments(
        ): Promise<Comment[]> {
            // const user: User | null = await UserModel.findById(id); 
            const posts: Comment[] | null = await CommentModel.find();
            if (posts) {
                return posts;
            } else {
                throw new HttpError(404, "Post was not found");
            }
        }

        async deleteComment(
            commentId: string,
        ): Promise<void | null> {
            const comment: Comment | null = await CommentModel.findById(commentId);
            if (comment){
                await CommentModel.findByIdAndDelete(commentId)
            }
            else {
                throw new HttpError(404, "Post is not found");
            }
        }

    async editComment(commentId: string): Promise<Comment | null> {
        const comment: Comment | null = await CommentModel.findById(commentId);
        if (comment){
            const updatedComment: Comment | null= await CommentModel.findByIdAndUpdate(commentId,
                { isAnswered: !comment.isAnswered },
                { new: true } // returns the updated document
            );
            return updatedComment;
        }
        else {
            throw new HttpError(404, "Post is not found");
        } 
    }
}

export const commentService = new CommentService();