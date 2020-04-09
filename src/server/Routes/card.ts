import * as express from 'express';
import db from '../server/../db'
 
 



const router = express.Router();
 
   
router.get('/', async (req, res) => {
    try {
        const cards = await db.cards.all()
      res.json(cards)
    } catch (error) {
        console.log(error);
        res.status(600).json('WOW :(');
    }
})

export default router