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
        this.router.get('/delete', blocksController.renderFormBlockDelete);
        this.router.post('/delete', blocksController.removeBlock);
    }

}

const blocksRoutes = new BlocksRoutes();
export default blocksRoutes.router;