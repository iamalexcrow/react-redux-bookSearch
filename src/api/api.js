import * as axios from 'axios';

const baseSearchUrl = `https://openlibrary.org`
const findBookQuery = `/search.json?title=`;

export const findBooks = async(searchItem) => {
    let bookName = searchItem.replace(/\s/g, '+');
    return await axios.get(`${baseSearchUrl}${findBookQuery}${bookName}`)
    
}

// export const getCover = async(key, value, size) => {
//     return await axios.get(`http://covers.openlibrary.org/b/${key}/${value}-${size}.jpg`)
// }
