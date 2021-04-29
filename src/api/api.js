import * as axios from 'axios';

const baseSearchUrl = `http://openlibrary.org`
const findBookQuery = `/search.json?title=`;

export const findBooks = async(searchItem) => {
    let bookName = searchItem.replace(/\s/g, '+');
    // console.log(bookName)
    return await axios.get(`${baseSearchUrl}${findBookQuery}${bookName}`)
    // console.log(response);
    
}

const getInfo = () => {

}

export const getCover = async(key, value, size) => {
    return await axios.get(`http://covers.openlibrary.org/b/${key}/${value}-${size}.jpg`)
}


// export const getRecipes = async () => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
//     const data = await response.json();
//     setRecipes(data.hits);
//     console.log(data.hits);
//     console.log(recipes);
//   }



// export let search = (searchItem) => (
//     axios.get(`https://api.edamam.com/search?q=${searchItem}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(response=>response.data) )