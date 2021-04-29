import React from 'react';
import SingleBook from './SingleBook/SingleBook';
import Loader from '../Loader/Loader';
import {connect} from 'react-redux';
import {getMoreInfo} from '../../redux/reducer';
import s from './Results.module.css';
import Pagination from './Pagination/Pagination';

const Results = ({isLoading,booksOnPage, getMoreInfo, isLoaded}) => {

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
            <div className={s.snippetContainer} >
                {isLoaded && booksOnPage.map((book)=> {
                    const {key} = book;
                    return <SingleBook 
                                key={key} 
                                booksOnPage={booksOnPage} 
                                id={key} 
                                getMoreInfo={getMoreInfo}
                                {...book}
                            />
                })}
            </div>
            <div>
                <div className={s.spacer60}></div>
            <Pagination/>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => (
    {
        isLoading: store.isLoading,
        booksOnPage: store.booksOnPage,
        isLoaded: store.isLoaded,    
    }
)

export default connect(mapStateToProps,{getMoreInfo})(Results);