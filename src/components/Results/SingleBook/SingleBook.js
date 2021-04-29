import React from 'react';
import ImageSub from './ImageSub/ImageSub';
import s from './SingleBook.module.css';
import Author from '../../../utils/author';

const SingleBook = ({
    cover_i: cover,
    author_name:author, 
    title,
    id, 
    booksOnPage, 
    getMoreInfo}) => {
    return (
        <div className={s.gridSnippet} onClick={()=> getMoreInfo(id,booksOnPage)}>
            <div className={s.imgContainer}>
            {cover 
                ? <img className={s.imgSnippet} src={`http://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt={title}/> 
                : <ImageSub title={title} author={author}/>
                }
            </div>
            <div className={s.info}>
                <h4>{
                    title.length > 33 
                    ? `${title.slice(0,33)}...`
                    : title
                }</h4> 
                <div className={s.marginLeft15}>
                    <Author author={author}/>
                </div>
            </div>
        </div>
    )

}

export default SingleBook;