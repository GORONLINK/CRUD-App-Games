import { Request, Response } from 'express';

class IndexController{
    public index (req: Request, res: Response) {
        res.json({text: 'La API está en api/games'});
    }
}

export const indexController = new IndexController();