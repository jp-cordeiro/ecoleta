import express from 'express';

import PointsController from './controllers/points.controller';
import ItemsController from "./controllers/items.controller"

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/', (req,res) => {
  return res.json('teste');
});

routes.get('/items', itemsController.index)

routes.get('/points', pointsController.index);

routes.post('/points', pointsController.create);

export default routes;