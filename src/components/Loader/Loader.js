import React from 'react';
import spinner from '../../images/spinner.svg'
import s from './Loader.module.css';

const Loader = ()=> {
return (
    <div className={s.container}>
        <div className={s.spinner}>
            <img  src={spinner} alt="looking for your favorite book..."/>
        </div>
    </div>
)
}

export default Loader;