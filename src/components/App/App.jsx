
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);
  const [details, setDetails] = useState("");

  {/* start useEffect() */}
  useEffect(() => {
    // on load call getTask function
    console.log('Fetching task')
    getTask().then((tasks) => {
      setTaskTask(tasks);
      setTaskList(tasks);
    });
  }, []); {/* end useEffect() */}

  const toDoSubmit = (event) => {
    event.preventDefault();
    setTaskTask('');
    setTaskStatus('');
    setTaskDetails('');

    addTask({ task: task, status: status, details: details }).then(() => {
      getTask().then(setTaskList)
    });
  };

  /* start GET function */
  const getTask = () => {
    return fetch('/todo')
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
  } /* end GET function */

/* start POST function */
const addTask = (task) => {
  return fetch('/todo', {
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
} /* end POST function */

/* start DELETE function */
const deleteTask = (id) => {
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
} /* end DELETE function */

  const updateTask = (event) => {
    setTask(event.target.value);
  };

  const updateStatus = (event) => {
    setStatus(event.target.value);
  };

  const updateDetails = (event) => {
    setDetails(event.target.value);
  };

  return (
    <div>
      <div>
        <h1>TO DO APP</h1>
      </div>
      <section className="new-task-section">
        <form onSubmit={toDoSubmit}></form>
        <input type="text" placeholder="Task" value={task} onChange={updateTask} />
        <label htmlFor="status-label">Status</label>
        <input type="text" placeholder="status" value={taskStatus} onChange={updateStatus} />
        <label htmlFor="details-label">Details</label>
        <input type="text" placeholder="Details" value={taskDetails} onChange={updateDetails} />
        <button type="submit">Add New Task</button>
      </section>
      <ul>
        {taskList.map((task, i) => {
          return (
          
            <li className={task.status ? "complete" : "incomplete"} key={task.id}>
              {i+1}
            {task.status ? <span className="taskComplete">COMPLETE</span> : <span className="taskIncomplete">INCOMPLETE</span>} {' '}
            {task.id} {task.task} {task.status} {task.details} 
            <button type="button" onClick={() => modifyTask(task.id)}>Edit</button>
            <button type="button" onClick={() => deleteTask(task.id)}>Delete</button>
            <button>Complete Task</button> 
            </li>
          )
        })}
      </ul>
      
    </div>
  );

}

export default App;
