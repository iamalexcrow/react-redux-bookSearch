import React from 'react';

const Sort = ({type, value}) => {
    if(!type) {
        return (
            <span>Unknown</span>
        )
    } else if (type.length ===1) {
        return (
            <span>{type}</span>
        )
    } else {
        let a = type.slice(0,1);
        return (
            <span>{a} and {type.length-1} other {value === 'pub' ? 'Publishers' : 'ISBN codes'}</span>
        )
    }
}

export default Sort;