const books = [
    {Book: 'A Space Odyssey', Author: 'Clarke', Year: '2006'},
    {Book: 'Odyssey Two', Author: 'Charles C. Mann', Year: '2012'},
    {Book: 'The Year of the Six Presidents', Author: 'Charles Emmerson', Year: '2008'},
    {Book: 'The Year of the Conquest', Author: 'Peter Rex', Year: '2012'},
    {Book: 'Countdown to War', Author: 'Richard Overy', Year: '2004'}
];

// Selecting book that publish before 2010
const FilterBooks = books.filter((book) => book.Year <= 2010);

// Making author name in capital of select book 
let capitalName = FilterBooks.map(book => ({...book, Author: book.Author.toUpperCase(),}));
console.log(capitalName);





  