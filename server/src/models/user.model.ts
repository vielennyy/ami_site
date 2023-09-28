import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose"
import {Types} from "mongoose"
// import { Socials } from "../common/types-and-interfaces";

@modelOptions({
    schemaOptions: {versionKey: false, timestamps: true},
})

export class User {
    @prop({id: true})
    id!: Types.ObjectId;

    @prop({ required: true })
    login!: string;

    @prop({ required: true} )
    password!: string;

    @prop({ required: false, default: true })
    isAdmin?: boolean;

    @prop({ required: true })
    email!: string;

    // @prop({ required: false })
    // avatar?: string;

    @prop({ required: false })
    firstName!: string;

    @prop({ required: false })
    lastName!: string;

    // @prop({ required:false, type: Object })
    // socials?: Socials;

    // @prop({ required: true })
    // age!: number;

    // @prop({ required: false, type: () => [String] })
    // interests?: string[];

    // @prop({ required: true })
    // address1!: string;

    // @prop({ required: false })
    // address2?: string;

    // @prop({ required: true })
    // postIndex!: string;
}

export const UserModel = getModelForClass(User);