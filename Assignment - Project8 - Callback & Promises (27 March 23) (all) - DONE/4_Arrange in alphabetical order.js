let books = [
    {title: 'Rising Of India', author: 'Satyam', year: '2023'},
    {title: 'Aising Sun', author: 'Ajit', year: '2020'},
    {title: 'Lising Of UP', author: 'Rao', year: '2018'},
    {title: 'Pising Day', author: 'Namita', year: '2014'},
]

function orderArrange(books, callback) {    
    let newOrderArrange = books.map((ele) => ele.title)

    return callback(newOrderArrange);
};

function callback(newOrderArrange) {
    console.log(newOrderArrange.sort());
}

orderArrange(books, callback)    // [ 'Aising Sun', 'Lising Of UP', 'Pising Day', 'Rising Of India' ]