fetch('https://jsonplaceholder.typicode.com/posts')

.then(response =>{
    if(!response.ok){
        throw new Error('Network is not Responding')
    }
    return response.json();

})
.then (data => data.forEach(element =>{console.log(element)}


))

.catch(error => console.error(error));