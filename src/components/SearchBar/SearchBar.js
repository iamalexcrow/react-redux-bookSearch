import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {updateSearch, getBooks} from '../../redux/reducer'
import s from './SearchBar.module.css';

const SearchBar = ({updateSearch, searchItem, getBooks, isLoading}) => {


    // useRef is used to avoid mistakes on the initial render
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false
            return
        }
        if (searchItem.trim() === '') {
            return 
        }
        const timeoutId = setTimeout(()=>getBooks(searchItem), 1000);
        return () => clearTimeout(timeoutId);
    }, [searchItem]);
    
    return (
        <form onSubmit={e=>e.preventDefault()}>
            <div className={s.searchForm}>
                <h1 className={s.title}>Bookworm</h1> 
                <div className={s.search}>
                    <input autoFocus={true} disabled={isLoading ? true : false} type="text" id="search" value={searchItem} onChange={(e)=>updateSearch(e.target.value)} className={s.formInput} placeholder="What is your favorite book?"/> 
                    <button type="submit" onClick={(e)=>getBooks(searchItem)} className={s.btn}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}

const mapStateToProps = (store) => {

    return {
        searchItem: store.searchItem,
        isLoading: store.isLoading
    }
}

export default connect(mapStateToProps, {updateSearch, getBooks})(SearchBar);