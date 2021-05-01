import React from 'react';
import {findBooks} from '../api/api';
import paginate from '../utils/paginator';

const UPDATE_SEARCH = 'UPDATE_SEARCH'
const SET_LOADING = 'SET_LOADING'
const FIND_BOOK_SUCCESS = 'FIND_BOOK_SUCCESS'
const SET_BOOKS_ON_PAGE = 'SET_BOOKS_ON_PAGE'
const UPDATE_PAGE = 'UPDATE_PAGE'
const REPORT_MISTAKE = 'REPORT_MISTAKE'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const SET_LOADED = 'SET_LOADED'
const SAVE_BOOK = 'SAVE_BOOK'
const RESET_MISTAKE = 'RESET_MISTAKE'

let initialState = {
    searchItem: '',
    books: [],
    booksOnPage: [],
    page: 0,

    isLoaded: false,
    isLoading: false,

    isError: false,
    errorMessage:'',
    
    isModalOpen: false,
    book:'',
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_SEARCH:
            return {
                ...state,
                searchItem: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case FIND_BOOK_SUCCESS: 
        return {
            ...state,
            books: action.payload
        }
        case SET_BOOKS_ON_PAGE: 
        return {
            ...state,
            booksOnPage:state.books[state.page]
        }
        case REPORT_MISTAKE:
            console.log(action.payload);
            return {
                ...state,
                errorMessage: action.payload,
                isError: true,
            }
        case RESET_MISTAKE:
            return {
                ...state,
                isError: false,
                errorMessage: ''
            }
        case OPEN_MODAL: 
        return {
            ...state,
            isModalOpen: true
        }
        case CLOSE_MODAL: 
        return {
            ...state,
            isModalOpen: false
        }
        case SAVE_BOOK: 
        return {
            ...state,
            book: action.payload
        }
        case UPDATE_PAGE: {
            if (action.payload === 'dec') {
                if (state.page === 0) {
                    return {
                        ...state,
                        page: state.books.length-1
                    }
                } else {
                    return {
                        ...state,
                        page: state.page - 1
                    }
                }
            }
            if (action.payload === 'inc') {
                if (state.page === state.books.length-1) {
                    return {
                        ...state,
                        page: 0
                    }
                } else {
                    return {
                        ...state,
                        page: state.page + 1
                    }
                }
            }
            return {
                ...state,
                page: action.payload
            }
        }
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
            default: return state;
    }
}

// fetch and save books
export const updateSearch = (payload) => ({type:UPDATE_SEARCH, payload});
export const setLoading = (payload) => ({type:SET_LOADING, payload});
export const saveSearchResult = (payload) => ({type:FIND_BOOK_SUCCESS, payload});
export const getBooksOnPage = () => ({type:SET_BOOKS_ON_PAGE});
export const setLoaded = (payload) => ({type:SET_LOADED, payload});
export const saveBook = (payload) => ({type:SAVE_BOOK,payload})
export const updatePage = (payload) => ({type:UPDATE_PAGE, payload})

// error functionality
export const reportMistake= (payload) => ({type:REPORT_MISTAKE, payload})
export const resetMistake = () => ({type:RESET_MISTAKE});

// modal window
export const openModalWindow = () => ({type:OPEN_MODAL});
export const closeModalWindow = () => ({type:CLOSE_MODAL});

export const getBooks = (searchItem) => {
    return async (dispatch)=> {
        try {
            if(!searchItem) {
                dispatch(reportMistake('Try typing something first'));
                    setTimeout(()=>{dispatch(resetMistake())},5000);
                    return;
            }
            dispatch(setLoading(true));
            let data = await findBooks(searchItem)
            let books = await data.data.docs;
            console.log(books);
            console.log(books.length === 0)
            if (books.length === 0) {
                    dispatch(setLoading(false));
                    dispatch(setLoaded(false));
                    dispatch(reportMistake('Oops! Nothing was found! Try modifying the name or search for another book!'));
                    setTimeout(()=>{dispatch(resetMistake())},5000);
                    return;
            }
            dispatch(updatePage(0));
            await dispatch(saveSearchResult(paginate(books)))
            await dispatch(getBooksOnPage());
            dispatch(setLoaded(true));
            dispatch(setLoading(false));
            dispatch(updateSearch(''));
        } catch (error) {
            dispatch(reportMistake('Something went wrong, try looking for another book or come back later!'));
            dispatch(setLoading(false));
            setTimeout(()=>{dispatch(resetMistake())},5000);
        }
    }
}

export const getMoreInfo = (id, books) => {
    let book = books.find((b)=> (b.key === id));
    return (dispatch) => {
        dispatch(saveBook(book));
        dispatch(openModalWindow());
    }
}

export const reloadPage = (index) => {
    return (dispatch) => {
        dispatch(updatePage(index));
        dispatch(getBooksOnPage());
    }
}

export const closeModal = () => {
    return (dispatch) => {
        dispatch(closeModalWindow());
    }
};

export default reducer;