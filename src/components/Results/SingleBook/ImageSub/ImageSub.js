import React from 'react';
import s from './ImageSub.module.css';
import Author from '../../../../utils/author';

const ImageSub = ({author, title}) => {
    return (
        <div className={s.subContainer}>
            <div className={s.flex}>
                <div className={s.title}>{title}</div>
                <div className={s.author}>
                    <Author author={author}/>
                    </div>
            </div>
        </div>
    )
}

export default ImageSub;