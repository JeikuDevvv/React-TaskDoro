import "./styles/app.css"

export default function App() {
  return <>
    <div className="main">
      <div className="mainContainer">
        <div className="formContainer">
          <form className="newItemForm">
            <div className="formContent">
              <label htmlFor="item">New Task</label>
              <input type="text" name="newItem" id="item" />
              <button type="submit">Add Task</button>
            </div>
          </form>
        </div>
        <div className="listContainer">
        <h2>Task List</h2>
        <ul className="taskList">
          <li>
            <label htmlFor="">
              <input type="checkbox" />
              Item 1
            </label>
          </li>
        </ul>
      </div>
      </div>   
    </div>
  </>
}