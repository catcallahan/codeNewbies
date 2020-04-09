import * as React from 'react';

const ResourceBox: React.FC<ResourceBoxProps> = () => {
    return (
        <div className= "col-10 resource-box border border-dark shadow-sm"
        style={{
            textAlign: "center",
            paddingTop: "18px",
            borderRadius: "1%",
            backgroundColor: "ace5ee"
        }}>
            <ul> {/* The contents of this is dummy data until we can pull in actual data */}
                <li>
                    <a href="https://www.w3schools.com/html/default.asp" target="_blank">HTML</a>
                </li>
                <li>
                    <a href="https://www.w3schools.com/css/default.asp" target="_blank">CSS</a>
                </li>
                <li>
                    <a href="https://www.w3schools.com/js/default.asp" target="_blank">JavaScript</a>
                </li>
                <li>
                    <a href="https://www.w3schools.com/sql/default.asp" target="_blank">SQL</a>
                </li>
                <li>
                    <a href="https://www.w3schools.com/jquery/default.asp" target="_blank">jQuery</a>
                </li>
                <li>
                    <a href="https://www.w3schools.com/react/default.asp" target="_blank">React</a>
                </li>
            </ul>
        </div>
    )
}

interface ResourceBoxProps { };

export default ResourceBox;