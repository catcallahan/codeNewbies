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


// //Front End Quiz Begginer
//   const QuizFEB = async () => Query('SELECT c.skillLevel, c.categoryLevel, c.cardText, q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizanswers as q on q.questionId = c.cardId where c.categoryLevel="Front End" and c.skillLevel="Beginner";')

// //Back End Quiz Begginer
//  const QuizBEB = async () => Query('SELECT c.skillLevel, c.categoryLevel, c.cardText, q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizanswers as q on q.questionId = c.cardId where c.categoryLevel="Back End" and c.skillLevel="Beginner";')

// //DataBase Quiz Begginer
//  const QuizDBB = async () => Query('SELECT c.skillLevel, c.categoryLevel, c.cardText, q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizanswers as q on q.questionId = c.cardId where c.categoryLevel="Database" and c.skillLevel="Beginner";')

//  //begginer quiz with all catergories
//  const QuizAllb = async () => Query('SELECT c.skillLevel, c.categoryLevel, c.cardText, q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizanswers as q on q.questionId = c.cardId where c.skillLevel="Beginner";')

//begginer quiz all
const QuizAllb = async () => Query('select c.cardId, c.categoryLevel, c.cardTitle, c.cardText , q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizAnswers as q on q.cardId = c.cardId where c.skillLevel="Beginner";')
 
//select all questions and answers for skill level = beginner and category = front end
 const QuizFEB = async () => Query('select c.cardId, c.categoryLevel, c.cardTitle, c.cardText , q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizAnswers as q on q.cardId = c.cardId where c.skillLevel="Beginner" and c.categoryLevel="Front End"; ')
 
 //select all questions and answers for skill level = beginner and category = back end
 const QuizBEB = async () => Query('select c.cardId, c.categoryLevel, c.cardTitle, c.cardText , q.answerText, q.correctAnswer from codenewbies.cards as c left join codenewbies.quizAnswers as q on q.cardId=c.cardId where c.skillLevel="Beginner" and c.categoryLevel="Back End";;')

 //select all questions and answers for skill level = beginner and category = database
 const QuizDBB = async () => Query('select c.cardId, c.cardTitle, c.cardText , q.answerText, q.correctAnswerfrom codenewbies.cards as c left join codenewbies.quizAnswers as q on q.cardId=c.cardIdwhere c.skillLevel="Beginner" and c.categoryLevel="Database";')

 //select all card questions by skill level and category level
 // const ??????? = async () => Query('select c.cardId, c.cardTitle, c.cardText from codenewbies.cards as c where c.skillLevel="Beginner" and c.categoryLevel="Front End"')

 //selecting answers by specific cardID (in this case, cardId = 5 (while loop))
 const quizAnswers = async (id:any) => Query('select q.cardId, q.answerText, q.correctAnswer from codenewbies.quizAnswers q where q.cardId = ?;', [id])


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
   QuizAllb,
   quizAnswers

}