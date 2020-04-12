import * as express from 'express';
 
import DBcards from '../db/queries/DBcards';
import DBusers from '../db/queries/DBusers';

 



const router = express.Router();
 
   router.get('/api/cards', async (req, res)=>{
      let cards = await DBcards.all()
      res.json(cards)
   }),

   //select begginer cards front end
   router.get('/api/begginerFE', async (req, res)=>{
      let cards1 = await DBcards.BFElevel()
      res.json(cards1)
   })

   //selct begginer cards back end
   router.get('/api/begginerBE', async (req, res)=>{
      let cards1 = await DBcards.BBElevel()
      res.json(cards1)
   })

   //select begginer database  cards
   router.get('/api/begginerDB', async (req, res)=>{
      let cards1 = await DBcards.BDBlevel()
      res.json(cards1)
   })

   //select Intermediate database
   router.get('/api/InterDB', async (req, res)=>{
      let cards1 = await DBcards.IDBlevel()
      res.json(cards1)
   })

   //select Intermediate front end
   router.get('/api/IneterFE', async (req, res)=>{
      let cards1 = await DBcards.IFElevel()
      res.json(cards1)
   })

   //select Intermediate back end
   router.get('/api/InterBE', async (req, res)=>{
      let cards1 = await DBcards.IBElevel()
      res.json(cards1)
   })

//select advanced back end
   router.get('/api/AdvanceBE', async (req, res)=>{
      let cards1 = await DBcards.ABElevel()
      res.json(cards1)
   })

//select advanced front end
   router.get('/api/AdvanceFE', async (req, res)=>{
      let cards1 = await DBcards.AFElevel()
      res.json(cards1)
   })

   //select  adavnced database
   router.get('/api/AdvanceDB', async (req, res)=>{
      let cards1 = await DBcards.ADBlevel()
      res.json(cards1)
   })

   router.get('/api/users', async (req, res)=>{
      let users = await DBusers.all()
      res.json(users)
   })
   
   
   
  

export default router;
