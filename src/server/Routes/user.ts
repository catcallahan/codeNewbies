// import * as express from "express";
// import db from "../server/../db";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// const router = express.Router();
// const { id } = useParams();

// // const [user, setUsers] = useState([]);

// router.get("/", async (req, res) => {
//   try {
//     const users = await db.users.all();
//     res.json(users);
//   } catch (error) {
//     console.log(error);
//     res.status(600).json("wowwyy");
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const users = await db.users.one(`${id}`);
//     res.json(users);
//   } catch (error) {
//     console.log(error);
//     res.status(600).json("error");
//   }
// });

/*
router.post("/", async (req, res) => {
  let userId = parseInt(req.body.userId);
  let fullName = req.body.fullName;
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  let skillLevel = req.body.skillLevel;
  try {
    let users = await db.users.post(
      userId,
      fullName,
      email,
      username,
      password,
      skillLevel
    );
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(600).json("error");
  }
});
*/

export default router;

// router.get("/:id", async (req, res) => {
//     try{
//         const users = await db.users.one(req.body.id);
//         res.json(users);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('error');
//     }
// })
