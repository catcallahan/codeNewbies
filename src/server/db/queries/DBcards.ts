import { Query} from '../';
import { Connection } from '../index'

export const all = async () => Query('SELECT * FROM cards');




export default {
   all
}