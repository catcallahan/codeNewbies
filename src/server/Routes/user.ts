import * as express from 'express';
import db from '../server/../db'
 
 



const router = express.Router();
 
   
router.get('/', async (req, res) => {
    try {
        const users = await db.users.all()
      res.json(users)
    } catch (error) {
        console.log(error);
        res.status(600).json('wowwyy');
    }
})

export default router