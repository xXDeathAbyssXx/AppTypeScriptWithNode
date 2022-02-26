import { Router } from 'express';
import { blocksController } from '../controllers/BlocksController';

class BlocksRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', blocksController.index);
        this.router.get('/add', blocksController.renderFormBlock);
        this.router.post('/add', blocksController.saveBlock);
    }

}

const blocksRoutes = new BlocksRoutes();
export default blocksRoutes.router;