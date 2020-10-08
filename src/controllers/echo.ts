import { Request, Response } from 'express';

export function echo(req: Request, res: Response) {
    //res.json(req.query);
    res.send('echo controller를 통해서 나오는 문구');
}