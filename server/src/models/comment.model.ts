import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose"
import {Types} from "mongoose"

@modelOptions({
    schemaOptions: {versionKey: false, timestamps: true},
})

export class Comment {
    @prop({id: true})
    id!: Types.ObjectId;

    @prop({ required: true })
    email!: string;

    @prop({ required: true })
    name?: string;

    @prop({ required: true })
    message!: string;

    @prop({ required: true })
    date!: string;

    @prop({ required: true, default: false })
    isAnswered!: boolean;

}

export const CommentModel = getModelForClass(Comment);