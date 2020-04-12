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

// router.get("/:id", async (req, res) => {
//     try{
       
//         const users = await db.users.one(Number)
//         res.json(users);
//     } catch (error) {
//         console.log(error);
//         res.status(600).json('error');        
//     }
// }); 




export default router




// router.get("/:id", async (req, res) => {
//     try{
//         const users = await db.users.one(req.body.id);
//         res.json(users);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('error');        
//     }
// })