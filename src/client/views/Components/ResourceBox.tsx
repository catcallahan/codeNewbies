import * as React from 'react';

const ResourceBox: React.FC<ResourceBoxProps> = () => {
    return (
        <div className="row resource-box border border-white shadow-sm text-wrap"
            style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingRight: "10px",
                borderRadius: "2%",
                backgroundColor: "#8a3d40",
            }}>
            <div className="col-md-auto">
                <ul> {/* The contents of this is dummy data until we can pull in actual data */}
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
            </div>
        </div>
    )
}

interface ResourceBoxProps { };

export default ResourceBox;