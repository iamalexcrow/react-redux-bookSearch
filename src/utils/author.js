import React from 'react'

const Author = ({author, isBigPage='false'}) => {
    if (!author) {
        return (
            <span>Author unknown</span>
        )
    } else if (author.length === 1) {
        return (
            <span>{author}</span> 
        )
    } else if (isBigPage === 'true') {
        let authors = author.toString().replace(/,/g,', ');
        return (
            <span>{authors}</span>
        )
    } else {
        return author.slice(0,1).map((a, index)=> {
            return (
                <span key={index}>{a} and others</span>
                )
            })
    }
}

export default Author;
