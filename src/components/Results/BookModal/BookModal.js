import React from 'react';
import s from './BookModal.module.css';
import Author from '../../../utils/author';
import Sort from '../../../utils/Sort';
import NoPicture from '../../../images/no-book-color.jpg'

const BookModal = ({
    cover_i:cover,
    author_name: author,
    first_publish_year,
    title,
    publisher,
    isbn,
    closeModal
}) => {
    return (
        <div className ={s.modalOverlay}>
            <div className={s.modalContainer}>
                <div className={s.bigImg}>
                    {cover 
                    ?<img src={`http://covers.openlibrary.org/b/id/${cover}-L.jpg`}alt={title}/>
                    : <img src={NoPicture} alt=""/>}
                </div>
                    <div className={s.info}>
                        <h3><span className={s.key}><strong>Title:</strong></span></h3> 
                            <span>{title}</span>
                        <h3><span className={s.key}><strong>Author:</strong></span></h3>
                            <span><Author className={s.inline} author={author} isBigPage='true'/></span>
                        <h3><span className={s.key}><strong>First published in :</strong></span></h3> 
                            <span>{first_publish_year ? first_publish_year : 'Unknown'}</span>
                        <h3><span className={s.key}><strong>Publisher:</strong></span></h3> 
                            <Sort type={publisher} value='pub'/>
                        <h3><span className={s.key}><strong>ISBN:</strong></span></h3> 
                            <Sort type={isbn}/>
                        <i onClick={closeModal}className="fas fa-times"></i>
                    </div>
            </div>
        </div>
    )
}

export default BookModal;
