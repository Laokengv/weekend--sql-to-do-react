import { useState } from "react";

const TaskInput = ({ getTask }) => {
    const [task, setTask] = useState("");
    const [details, setDetails] = useState("");


const toDoSubmit = (event) => {
    event.preventDefault();
    fetch('/tasks', {
        method: 'POST',
        body: JSON.stringify({ task, details }),
        headers: { "Content-Type": "application/json" }
    })
    .then(() => {
        setTask("");
        setDetails("");
        getTask();
    }) 
    .catch((error) => {
        console.log(error);
    });
  };
  return (
    <div className="task-input">
        <form onSubmit={toDoSubmit}>
            <input type="text" 
            placeholder="title" 
            onChange={(event) => setTask(event.target.value)} 
            value={task} />
            <input placeholder="details"
            onChange={(event) => setDetails(event.target.value)}
            value={details} />
            <input type="submit" />
        </form>
    </div>
  );
};