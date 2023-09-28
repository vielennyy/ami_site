import { HttpError } from "./errors";
import { NextFunction, Request, Response, Router } from "express";

export interface IExeptionFilter {
    catch(
        err: Error | HttpError,
        req: Request,
        res: Response,
        next: NextFunction
    ): void;
}

export interface IControllerRoute {
    path: string;
    method: keyof Pick<Router, "get" | "post" | "delete" | "patch" | "put">;
    handler: (req: Request, res: Response, next: NextFunction) => void;
    validators?: Validation;
}

// export interface Socials {
//     facebook: string;
//     instagram: string;
//     twitter: string;
// }

export type Validation = Record<string, any>;
