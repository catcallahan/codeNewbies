import * as React from "react";
import NavBarHome from "./Components/navbarHome";


const Home: React.FC<HomeProps> = () => {
    let techWord = '{ techQuestions }';
    let studyWord = '{ studyCards }';
    let quizWord = '{ quizMe }';
    let resourcesWord = '{ moreResources }';
    let clickPhrase = '{ "Choose a Category to Study" }'



return(
    <React.Fragment>
        <NavBarHome />
        <div>
            <h1 className = 'mainlogo ml-3 mt-2 mb-3' style = {{fontSize: '100px', color: '#D86410'}}>codeNewbie</h1>
            <div className = "d-flex flex-row justify-content-around my-3 pt-2">
                <button className="btn btn-navbarcolor" style = {{width: '225px'}}>{techWord}</button>
                <button className="btn btn-navbarcolor"style = {{width: '225px'}}>{studyWord}</button>
                <button className="btn btn-navbarcolor"style = {{width: '225px'}}>{quizWord}</button>
                <button className="btn btn-navbarcolor"style = {{width: '225px'}}>{resourcesWord}</button>
            </div>
            <div className = 'topbar bg-navbarcolor' style ={{height: '11px', width: 'auto'}}></div>
        </div>
        <div className = 'mt-5 text-center'>
            <h2>{clickPhrase}</h2>
        </div>
        <div className = "d-flex flex-row justify-content-around my-3 pt-2">
            <div className=" d-flex circle bg-navbarcolor justify-content-center align-items-center" style = {{height: '200px', width: '200px', borderRadius: '50%'}}>front
            <a className=" d-flex justify-content-center align-items-center">End</a></div>
            
        </div>
    </React.Fragment>
)

}




    interface HomeProps{}
    export default Home 

    