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
        <div className = 'container-fluid'>
            <div className="row">
                <h1 className = 'mainlogo ml-3 mt-2 mb-3 col-lg-12 col-md-4 col-sm-2' style = {{fontSize: '100px', color: '#FFFFFF'}}>codeNewbie</h1>
            </div>
            <div className = "d-flex flex-row justify-content-around my-3 pt-2 row">
                <button className="btn btn-darkBlue shadow-sm" style = {{fontSize : '20px', color: '#FFFFFF', width: '225px', textShadow: '1px 1px #D86410'}}>{techWord}</button>
                <button className="btn btn-darkBlue shadow-sm"style = {{fontSize : '20px', color: '#FFFFFF', width: '225px', textShadow: '1px 1px #D86410'}}>{studyWord}</button>
                <button className="btn btn-darkBlue shadow-sm"style = {{fontSize : '20px', color: '#FFFFFF', width: '225px', textShadow: '1px 1px #D86410'}}>{quizWord}</button>
                <button className="btn btn-darkBlue shadow-sm"style = {{fontSize : '20px', color: '#FFFFFF',width: '225px', textShadow: '1px 1px #D86410'}}>{resourcesWord}</button>
            </div>
            <div className = 'topbar bg-darkBlue' style ={{height: '11px', width: 'auto'}}></div>
        </div>
        <div className = 'mt-5 text-center  container' style = {{fontSize: '80px', color: '#FFFFFF'}}>
            <div className="row">

            <h2 className = 'col-lg-12 col-md-6 col-sm-'>{clickPhrase}</h2>
            </div>
        </div>
        <div className = "d-flex flex-row justify-content-center my-3 pt-2 container">
            <div className="row">
                <div className=" d-flex flex-column m-3 circle bg-darkBlue justify-content-center align-items-center shadow-lg" style = {{height: '200px', width: '200px', borderRadius: '50%', cursor: 'pointer'}}>
                    <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>front</div>
                    <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>End</div>
                </div>
                <div className=" d-flex flex-column m-3 circle bg-darkBlue justify-content-center align-items-center shadow-lg" style = {{height: '200px', width: '200px', borderRadius: '50%', cursor: 'pointer'}}>
                    <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>back</div>
                    <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>End</div>
                </div>
                <div className=" d-flex flex-column m-3 circle bg-darkBlue justify-content-center align-items-center shadow-lg" style = {{height: '200px', width: '200px', borderRadius: '50%', cursor: 'pointer'}}>
                    <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>data</div>
                    <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>Base</div>
                </div>
                <div className=" d-flex flex-column m-3 circle bg-darkBlue justify-content-center align-items-center shadow-lg" style = {{height: '200px', width: '200px', borderRadius: '50%', cursor: 'pointer'}}>
                    <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>all</div>
                    <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>Terms</div>
            </div>
            
            </div>
        </div>
    </React.Fragment>
)

}




    interface HomeProps{}
    export default Home 

    