import * as express from 'express';
 
import DBcards from '../db/queries/DBcards';
import DBusers from '../db/queries/DBusers';



const router = express.Router();
 
   router.get('/api/cards', async (req, res)=>{
      let cards = await DBcards.all()
      res.json(cards)
   }),
 router.get('/api/users', async (req, res)=>{
      let users = await DBusers.all()
      res.json(users)
   })

export default router;
