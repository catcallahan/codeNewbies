import * as React from 'react';

const ResourceBox: React.FC<ResourceBoxProps> = () => {
    return (
        <div className= "col-10 resource-box border border-dark shadow-sm"
        style={{
            height: '100px',
            textAlign: 'center',
            paddingTop: '38px',
            paddingBottom: '38px',
            borderRadius: '1%'
        }}>
            <p>Resource Box</p>
        </div>
    )
}

interface ResourceBoxProps { };

export default ResourceBox;