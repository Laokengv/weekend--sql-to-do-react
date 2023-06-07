
import { useState } from 'react';


{/* start GET request */}
function getToDo() {
  return fetch('/toDoApp')
  .then((response) => response.json())
  .catch((error) => {
    console.log(error);
  });
} {/* end GET request */}

{/* start POST request */}
function addTask(toDoApp) {
  return fetch('/toDoApp', {
    method: 'POST',
    body: JSON.stringify(toDoApp),
    headers: { "Content-Type": "application/json" }
  })
  .then((response) => {
    if(response.status !== 201) {
      throw new Error('Bad Status!');
    }
  })
  .catch((error) => {
    console.log(error);
  });
} {/* end POST request */}


function App() {

  return (
    <div className="todo">
      <main>
        <form onSubmit={todoSubmit}>
          <input type="text" placeholder="task" value={} onChange={}/>
        </form>
      </main>
    </div>
  );

}

export default App
