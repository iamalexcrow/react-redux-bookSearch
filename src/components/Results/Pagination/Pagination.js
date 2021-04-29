import React from 'react'
import {reloadPage} from '../../../redux/reducer';
import {connect} from 'react-redux';
import s from './Pagination.module.css';

const Pagination = ({isLoaded, reloadPage, books, page})=> {

    return (
        <div className={s.container}>
            {isLoaded && <button className={s.btn} onClick={()=>reloadPage('dec')}>Prev</button>}
        {isLoaded && <div>
            {
                books.map((_,index)=> {
                    return <button className={index === page ? `${s.btn} ${s.active}`:`${s.btn} ${s.num} `} key={index} onClick={()=>reloadPage(index)}>{index+1}</button>
                })
            }
            </div>}
        {isLoaded && <button className={s.btn} onClick={()=>reloadPage('inc')}>Next</button>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    books: state.books,
    isLoaded: state.isLoaded,
    page: state.page
})

export default connect(mapStateToProps, {reloadPage})(Pagination);