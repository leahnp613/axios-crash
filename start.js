// GET REQUEST-1st method is the long form, second method is shorthand
// function getTodos() {
//   axios({
//     method: 'get'
//     url:'zillow-com1.p.rapidapi.com'//this is where you put the url for the api, this returns a promise//
//     params: {
//       _limit:5
//     }
  
//   })
//   .then (res => showOutput(res));         //res is response, for error handling with promises you can add catch//
//     .catch (err => console.error(err));
// }//res.data is always going to be the data that is returned//
axios.get( 'zillow-com1.p.rapidapi.com?_limit=5')      //you can add a method to axios with a dot, you don't have to add.get for the get request but it is cleaner to do so//
    .then(res => showOutput(res))
    .catch(err => console.error(err));




// POST REQUEST- 1st method is the long form, second method is shorthand
// function addTodo() {
//   function getTodos() {
//       axios({
//         method: 'get'
//         url:'zillow-com1.p.rapidapi.com'//this is where you put the url for the api, this returns a promise//
//         data: {
//           title:'New Todo',
//           completed:false
//         }
//       })
//       .then (res => showOutput(res));         //res is response, for error handling with promises you can add catch//
//         .catch (err => console.error(err));
//     }//res.data is always going to be the data that is returned//

function addTodo(){
  axios('zillow-com1.p.rapidapi.com',{
    title:'New Todo',
    completed:false
    })
   .then(res => showOutput(res))
   .catch(err => console.error(err));
}



// PUT/PATCH REQUEST- PUT is meant to replace the entire resource, PATCH will update it incrementally
function updateTodo() {
  axios
  .put('zillow-com1.p.rapidapi.com',{ //if you use a PATCH request instead it will just change what is specified and not the whole resource//
    title:'Updated Todo',//here you'll put in the parameter that you want to add//
    completed:true
    })
   .then(res => showOutput(res))
   .catch(err => console.error(err));
}

// DELETE REQUEST-  
function removeTodo() {
  function updateTodo() {
    axios
    .delete('zillow-com1.p.rapidapi.com/todo/1',{ //if you use a PATCH request instead it will just change what is specified and not the whole resource//
     .then(res => showOutput(res))//don't need to pass any data in because we're just deleting it//
     .catch(err => console.error(err));
  }
}

// SIMULTANEOUS DATA- axios.all will take in an array of requests and when all of the promises are fulfilled we will get our response//
function getData(){ 
  axios.all([
    axios.get('zillow-com1.p.rapidapi.com/todos_limit=5'),
    axios.get('zillow-com1.p.rapidapi.com/posts_limit=5')
  ])
   .then(res => {
    console.log(res[0]);
    console.log(res[1]);
    showOutput(res[1]))
   .catch(err => console.error(err))
}

// CUSTOM HEADERS- have to do this with tokens, like json tokens
function customHeaders() {
  const config = {
    headers: {
      'Content-Type':'application/json'
      Authorization: 'sometoken'
    }
  }
  function addTodo(){
    axios('zillow-com1.p.rapidapi.com',{
      title:'New Todo',
      completed:false
      },
      config
      )
     .then(res => showOutput(res))
     .catch(err => console.error(err));
  }
}

// TRANSFORMING REQUESTS & RESPONSES- can transform your reponse or requests in certain ways

function transformResponse() {
  const options = {
   method:'post'
   url:'zillow-com1.p.rapidapi.com',
   data:{
    title:'Hello World'
   },
   transformResponse:axios.defaults.transformResponse.concat(data => {
    data.title = data.title.toUpperCase();
    return data;
   })
  }
   axios(options).then(res => showOutput(res))

}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config =>{
  console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date ().getTime()}`)

  return config
},  error => {
    return Promise.reject(error)
});
// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
