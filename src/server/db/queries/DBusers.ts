import { Query } from "../";


interface UserPost {
  userId: number;
  fullName: string;
  email: string;
  userName: string;
  password: string;
  skillLevel: string;
}

 const all = async () => Query("SELECT * FROM users");

 const one = (id: any) =>
  Query(`SELECT * FROM users WHERE userId = ${id}`);

 const post = (
  userId: number,
  fullName: string,
  email: string,
  userName: string,
  password: string,
  skillLevel: string
) => {
  Query(`INSERT INTO users (userId, fullName, email, userName, password, skillLevel) VALUE(?,?,?,?,?,?)`,
    [userId, fullName, email, userName, password, skillLevel]
  );
};

export default {
  all,
  one,
  post,
};
