import { Request, Response } from "express";

class IndexController {
    public index(req: Request, res: Response) {
        res.render('index', { title: "Welcome to Block App" });
    }
}

const indexController = new IndexController();
export default indexController;