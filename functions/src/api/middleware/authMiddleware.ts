import { Request, Response, NextFunction } from 'express';

export function authorization(req: Request, res: Response, next: NextFunction) {
    try {
        // if (!req.headers.authorization) {
        //     throw new Error("missing token");
        // }
        // get token here and todo something.
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: 'Something went wrong.' });
    }
};
