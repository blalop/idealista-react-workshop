import React from 'react';

const Ad = ({ title = '', desc = '' } = {}) => {
    return (
        <div>
            <h1 style={{color:"#E1f56E"}}>{title}</h1>
            <p style={{color:"#B62682"}}>{desc}</p>
        </div>
    )
};


export default Ad;