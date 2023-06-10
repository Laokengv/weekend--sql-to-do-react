
import { useState, useEffect } from 'react';


{/* start GET function */}
function getTask() {
  return fetch('/toDoApp')
  .then((response) => response.json())
  .catch((error) => {
    console.log(error);
  });
} {/* end GET function */}

{/* start POST function */}
function addTask(task) {
  return fetch('/toDoApp', {
    method: 'POST',
    body: JSON.stringify(task),
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
} {/* end POST function */}

{/* start DELETE function */}
function deleteTask(id) {
  return fetch(`/todo/${id}`, {
    method: 'DELETE'
  }) .then((response) => {
    console.log(response);
    getTask().then(tasks => {
      console.log(tasks)
      setTaskList(tasks)
    });
  }) .catch((error) => {
    console.log(error);
  })
} {/* end DELETE function */}


function App() {

  const [taskList, setTaskList] = useState([]);
  const [taskTask, setTaskTask] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);
  const [taskDetails, setTaskDetails] = useState("");

  {/* start useEffect() */}
  useEffect(() => {
    // on load call getTask function
    console.log('Fetching task')
    getTask().then((tasks) => {
      setToDoAppTask(tasks);
      setTaskList(tasks);
    });
  }, []); {/* end useEffect() */}

  const toDoSubmit = (event) => {
    event.preventDefault();
    setTaskTask('');
    setTaskStatus('');
    setTaskDetails('');

    addTask({ taskTask: taskTask, taskStatus: taskStatus, taskDetails: taskDetails }).then(() => {
      getTask().then(setTaskList)
    });
  };

  const updateTask = (event) => {
    setTaskTask(event.target.value);
  };

  const updateTaskStatus = (event) => {
    setTaskStatus(event.target.value);
  };

  const updateTaskDetails = (event) => {
    setTaskDetails(event.target.value);
  };

  return (
    <div>
      <div>
        <h1>TO DO APP</h1>
      </div>
      <section className="new-task-section">
        <form onSubmit={toDoSubmit}></form>
        <input type="text" placeholder="task" value={taskTask} onChange={updateTask} />
        <label htmlFor="status-label">Status</label>
        <input type="text" placeholder="status" value={taskStatus} onChange={updateTaskStatus} />
        <label htmlFor="details-label">Details</label>
        <input type="text" placeholder="details" value={taskDetails} onChange={updateTaskDetails} />
        <button type="submit">Add New Task</button>
      </section>
      
    </div>
  );

}

export default App
