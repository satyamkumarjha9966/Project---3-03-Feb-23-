async function fetchData() {
    const response = await
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => data.json())
    console.log(response);
}

fetchData();    // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }