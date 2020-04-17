import * as express from "express";

import DBcards from "../db/queries/DBcards";
import DBusers from "../db/queries/DBusers";

const router = express.Router();

router.get("/api/cards", async (req, res) => {
  let cards = await DBcards.all();
  res.json(cards);
}),
  //select begginer cards front end
  router.get("/api/begginerFE", async (req, res) => {
    let cards1 = await DBcards.BFElevel();
    res.json(cards1);
  });

//selct begginer cards back end
router.get("/api/begginerBE", async (req, res) => {
  let cards1 = await DBcards.BBElevel();
  res.json(cards1);
});

//select begginer database  cards
router.get("/api/begginerDB", async (req, res) => {
  let cards1 = await DBcards.BDBlevel();
  res.json(cards1);
});

//select Intermediate database
router.get("/api/InterDB", async (req, res) => {
  let cards1 = await DBcards.IDBlevel();
  res.json(cards1);
});

//select Intermediate front end
router.get("/api/InterFE", async (req, res) => {
  let cards1 = await DBcards.IFElevel();
  res.json(cards1);
});

//select Intermediate back end
router.get("/api/InterBE", async (req, res) => {
  let cards1 = await DBcards.IBElevel();
  res.json(cards1);
});

//select advanced back end
router.get("/api/AdvanceBE", async (req, res) => {
  let cards1 = await DBcards.ABElevel();
  res.json(cards1);
});

//select advanced front end
router.get("/api/AdvanceFE", async (req, res) => {
  let cards1 = await DBcards.AFElevel();
  res.json(cards1);
});

//select  adavnced database
router.get("/api/AdvanceDB", async (req, res) => {
  let cards1 = await DBcards.ADBlevel();
  res.json(cards1);
});


//front end beginner quiz
router.get("/api/QuizFEB", async (req,res) => {
   let quiz = await DBcards.QuizFEB()
   res.json(quiz)
})


// back end beginner quiz
router.get("/api/QuizBEB", async (req,res) => {
  let quiz = await DBcards.QuizBEB()
  res.json(quiz)
})


//database beginner quiz
router.get("/api/QuizDBB", async (req,res) => {
  let quiz = await DBcards.QuizDBB()
  res.json(quiz)
})

//begginer quiz with all catergories
router.get("/api/QuizAllb", async (req,res) => {
  let quiz = await DBcards.QuizAllb()
  res.json(quiz)
})


router.get("/api/quizAnswers/:id", async (req,res) => {
  let quiz = await DBcards.quizAnswers(req.params.id)
  res.json(quiz)
})
 
 

//select all users
router.get("/api/users", async (req, res) => {
  let users = await DBusers.all();
  res.json(users);
});

//select single user
router.get("/api/users/:id", async (req, res) => {
  let users = await DBusers.one(req.params.id);
  res.json(users);
});

//create user
// format
// //{
//    "userId": 1,
//    "fullName": "Maddie Conaway",
//    "email": "mc@ib.com",
//    "userName": "maddie",
//    "password": "robots1!",
//    "skillLevel": "Beginner"
// }
router.post("/api/users", async (req, res) => {
  try {
    let users = await DBusers.post(
      Number(req.body.userId),
      req.body.fullName,
      req.body.email,
      req.body.userName,
      req.body.password,
      req.body.skillLevel
    );
    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

export default router;
