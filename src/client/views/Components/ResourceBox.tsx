import * as React from 'react';



const ResourceBox: React.FC<ResourceBoxProps> = props => {

    return (
        <div className ='container resource-box'>
            <div className="row justify-content-center" >
                <div className="d-flex flex-column col-8 border border-white shadow-sm text-wrap justify-content-center pt-1 bg-darkBlue"
                style={{
                    paddingTop: "20px",
                    paddingRight: "10px",
                    borderRadius: "2%",
                }}>
                    <h2 className ='pl-2 mb-0 text-brightRoseColor'>Category: <a className='text-white'>{props.card.categoryLevel}</a> </h2>
                    <h4 className ='pl-2 text-brightRoseColor'>Level: <a className='text-white'>{props.card.skillLevel}</a> </h4>
                </div>
            </div>

            {/* <div className="col-md-auto"> */}
                {/* <ul> 
                    <li>
                        <a href="https://www.w3schools.com/html/default.asp" target="_blank" style={{ color: "white", textDecoration: "underline" }}>What happens if these get long?</a>
                    </li>
                    <li>
                        <a href="https://www.w3schools.com/css/default.asp" target="_blank" style={{ color: "white", textDecoration: "underline" }}>CSS</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-auto">
                <ul>

                    <li>
                        <a href="https://www.w3schools.com/js/default.asp" target="_blank" style={{ color: "white", textDecoration: "underline" }}>What if this is long too?</a>
                    </li>
                    <li>
                        <a href="https://www.w3schools.com/sql/default.asp" target="_blank" style={{ color: "white", textDecoration: "underline" }}>SQL</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-auto">
                <ul>
                    <li>
                        <a href="https://www.w3schools.com/jquery/default.asp" target="_blank" style={{ color: "white", textDecoration: "underline" }}>jQuery</a>
                    </li>
                    <li>
                        <a href="https://www.w3schools.com/react/default.asp" target="_blank" style={{ color: "white", textDecoration: "underline" }}>React</a>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

interface ResourceBoxProps { 
    card: {
        categoryLevel: string,
        skillLevel: string,
        cardTitle: string,
        cardText: string
      }
};

export default ResourceBox;