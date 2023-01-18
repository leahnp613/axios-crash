// GET REQUEST
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




// POST REQUEST
function addTodo() {
  function getTodos() {
      axios({
        method: 'get'
        url:'zillow-com1.p.rapidapi.com'//this is where you put the url for the api, this returns a promise//
        data: {
          title:'New Todo',
          completed:false
        }
      
      })
      .then (res => showOutput(res));         //res is response, for error handling with promises you can add catch//
        .catch (err => console.error(err));
    }//res.data is always going to be the data that is returned//

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
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
