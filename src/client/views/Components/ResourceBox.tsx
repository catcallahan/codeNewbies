import * as React from 'react';

const ResourceBox: React.FC<ResourceBoxProps> = () => {
    return (
        <div className= "resource-box border border-dark shadow-sm"
        style={{
            height: '100px',
            textAlign: 'center',
            marginTop: '30px',
            paddingTop: '38px',
            paddingBottom: '38px',
            borderRadius: '5%'
        }}>
            <p>Resource Box</p>
        </div>
    )
}

interface ResourceBoxProps { };

export default ResourceBox;