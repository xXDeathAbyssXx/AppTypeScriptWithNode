import { Request, Response } from 'express';
import mongoose from 'mongoose';
import BlockModelDB from '../models/block';

class BlocksController {

    public async index(req: Request, res: Response) {
        const Blocks = await BlockModelDB.find({}).lean();
        res.render('blocks/index', {
            title: 'Blocks',
            Blocks
        })
    }

    public renderFormBlock(req: Request, res: Response) {
        res.render('blocks/add', {
            title: 'Add A Block'
        });
    }

    public async saveBlock(req: Request, res: Response) {
        const { title, name, id } = req.body;
        const newReg = new BlockModelDB({ title, name, id });
        await newReg.save();
        res.redirect('/blocks');
    }

}

export const blocksController = new BlocksController();