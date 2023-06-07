import { useState } from 'react';

function App() {

  return (
    <div className="to-do-list">
      <h1>TO DO APP</h1>
      <form>
        <h2 className="label-tag">
          <label htmlFor="new-todo-input" className="label_one">
            Task of the Day
          </label>
        </h2>
        <input type="text" id="new-todo-input" className="input-bar" name="text" />
        <button type="submit" className="add-task-btn">
          Add
        </button>
      </form>
      <div className="">
        <button type="button" className=""></button>
      </div>
    </div>
  );

}

export default App
