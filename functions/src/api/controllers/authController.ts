import { Request, Response } from 'express';
// import { adminService } from '../service';

// const db = adminService.firestore();

export async function me(req: Request, res: Response) {
    try {
        // const post = await db.collection('posts').doc("qUtaGFSdMr3QY0oxMeRU").get();
        // console.log(post);
        res.status(200).json({ success: true, message: "It's me!" });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Something went wrong.' });
    }
}