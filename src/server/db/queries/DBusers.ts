import { Query} from '../';
import { Connection } from '../index'

export const all = async () => Query('SELECT * FROM users');

// export const one = id => (
//     Query(`SELECT * FROM users ,WHERE user.id = ${id}`));


// export const post = async (userId: number, fullName: string, email:string, userName:string, password:string, skillLevel:string) => {
//     Query (`INSERT INTO users ( fullName, email, userName, password, skillLevel) VALUE(?,?,?,?,?,?)`, [Number(userId),fullName,email, userName, password,skillLevel])
// }




export default{
   all,
   // one,
   // post
}