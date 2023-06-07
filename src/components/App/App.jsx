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
      <h2>{} tasks remaining</h2>
      <ul role="list" className="todo-list heading" aria-labelledby="heading-list">
        <li className="">
          <div className="cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat 
            </label>
          </div>
        </li>
      </ul>
    </div>
  );

}

export default App
