import knex from '../database/connection';
import {Request, Response} from 'express';

class ItemsController{
  async index(req: Request, res: Response){
    try{
      const items = await knex('items').select('*');
  
      const serializedItems = items.map( item => {
        return {
          id: item.id,
          title: item.title,
          image_url: `http://locahost:3333/uploads/${item.image}`
        }
      })
  
      return res.status(200).json(serializedItems);
    }catch(e){
      return res.status(500).json(e);
    } 
  }
}

export default ItemsController;