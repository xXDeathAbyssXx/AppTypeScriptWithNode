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

    public renderFormBlockDelete(req: Request, res: Response) {
        res.render('blocks/delete', {
            title: 'Delete A Block'
        });
    }

    public async saveBlock(req: Request, res: Response) {
        const { title, name, id } = req.body;
        const newReg = new BlockModelDB({ title, name, id });
        await newReg.save();
        res.redirect('/blocks');
    }

    public async removeBlock(req: Request, res: Response) {
        let rmall = req.body;
        if (rmall.deleteall === "false") {
            let b = rmall.deleteall;
            if (b === "false") {
                const Blocks = await BlockModelDB.find({}).lean();
                if (Blocks === null) {
                    res.redirect('/');
                } else {
                    await BlockModelDB.remove({})
                    res.redirect('/blocks');
                }
            }
        } else {
            const { title, name, id } = req.body;

            let seeblock = await BlockModelDB.findOne({ title, name, id });
            if (seeblock == null) {
                res.redirect('/blocks');
            } else {
                const newReg = await BlockModelDB.findOneAndDelete({ title, name, id });
                res.redirect('/blocks');
            }
        }
    }



}

export const blocksController = new BlocksController();