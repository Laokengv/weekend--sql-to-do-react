import { useState } from "react";

/* start POST function */
const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");


  const handleSubmit = (event) => {
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
  }
  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="title"
          onChange={(event) => setTask(event.target.value)}
          value={title} />
        <input placeholder="details"
          onChange={(event) => setDetails(event.target.value)}
          value={note} />
        <input type="submit" />
      </form>
    </div>
  );
}; /* end POST function */

export default AddTask;