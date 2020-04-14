import { Query} from '../';
import { Connection } from '../index'
// import Category from '../../../client/views/Category';

export const all = async () => Query('SELECT * FROM cards');

//select begginer cards front end
export const BFElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Front End" and skillLevel="Beginner";')

//selct begginer cards back end
export const BBElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Back End" and skillLevel="Beginner";')

//select begginer database  cards
  const BDBlevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Database" and skillLevel="Beginner";')

//select Intermediate front end
  const IFElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Front End" and skillLevel="Intermediate";')

//select Intermediate back end
  const IBElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Back End" and skillLevel="Intermediate";')

//select Intermediate database
  const IDBlevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Database" and skillLevel="Intermediate";')

//select advanced front end
  const AFElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Front End" and skillLevel="Advanced";')

//select advanced back end
 const ABElevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Back End" and skillLevel="Advanced";')

//select  adavnced database
  const ADBlevel = async () => Query( 'SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= "Database" and skillLevel="Advanced";')


//Front End Quiz Begginer
  const QuizFEB = async () => Query('SELECT c.skillLevel, c.categoryLevel, c.cardText, q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizanswers as q on q.questionId = c.cardId where c.categoryLevel="Front End" and c.skillLevel="Beginner";')

//Back End Quiz Begginer
 const QuizBEB = async () => Query('SELECT c.skillLevel, c.categoryLevel, c.cardText, q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizanswers as q on q.questionId = c.cardId where c.categoryLevel="Back End" and c.skillLevel="Beginner";')

//DataBase Quiz Begginer
 const QuizDBB = async () => Query('SELECT c.skillLevel, c.categoryLevel, c.cardText, q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizanswers as q on q.questionId = c.cardId where c.categoryLevel="Database" and c.skillLevel="Beginner";')

 //begginer quiz with all catergories
 const QuizAllb = async () => Query('SELECT c.skillLevel, c.categoryLevel, c.cardText, q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizanswers as q on q.questionId = c.cardId where c.skillLevel="Beginner";')

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
   QuizFEB,
   QuizBEB,
   QuizDBB,
   QuizAllb 
}