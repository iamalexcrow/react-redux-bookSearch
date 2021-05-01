const paginate = (books) => {
    const itemsPerPage = 12;
    const pages = Math.ceil(books.length / itemsPerPage);
    const newBooks = Array.from({length:pages}, (_,index)=> {
        const start = index * itemsPerPage
        return books.slice(start, start + itemsPerPage)
    })
    return newBooks;
}

export default paginate
