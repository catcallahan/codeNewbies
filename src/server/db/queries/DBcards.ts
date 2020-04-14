import { Query} from '../';
import { Connection } from '../index'
// import Category from '../../../client/views/Category';

export const all = async () => Query('SELECT * FROM cards');

//select begginer cards front end
export const BFElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Front End" and skillLevel="Beginner";')

//selct begginer cards back end
export const BBElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Back End" and skillLevel="Beginner";')

//select begginer database  cards
export const BDBlevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Database" and skillLevel="Beginner";')

//select Intermediate front end
export const IFElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Front End" and skillLevel="Intermediate";')

//select Intermediate back end
export const IBElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Back End" and skillLevel="Intermediate";')

//select Intermediate database
export const IDBlevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Database" and skillLevel="Intermediate";')

//select advanced front end
export const AFElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Front End" and skillLevel="Advanced";')

//select advanced back end
export const ABElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Back End" and skillLevel="Advanced";')

//select  adavnced database
export const ADBlevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Database" and skillLevel="Advanced";')


//Front End Quiz Begginer
//export const QuizFEB = async () => Query('select c.skillLevel, c.categoryLevel, c.cardText , q.answerText , q.correctAnswerfrom cards as c left join quizanswers as q on q.questionId = cardIdwhere c.categoryLevel="Front End" and c.skillLevel="Begginer";')



export default {
   all,
   BFElevel,
   BBElevel,
   BDBlevel,
   IFElevel,
   IBElevel,
   IDBlevel,
   AFElevel,
   ABElevel,
   ADBlevel,
   // QuizFEB 
}