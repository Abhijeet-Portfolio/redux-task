import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Add, completeAll, Delete, deleteCompleteTask, Status } from '../actions';
import '../assets/css/App.css'

function App() {

  const [task, settask] = useState('');
  const getLists = useSelector(state => state.array);
  const dispatch = useDispatch();

  const insertData = e => {
    e.preventDefault();
    dispatch(Add({
      complete: false,
      task: task
    }))
    settask('');
  }

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>TODOS</h1>
        </div>
      </header>
      <section>
        <div className="wrapper">
          <form>
            <div className="form-group">
              <input type="text" value={task} onChange={e => settask(e.target.value)} placeholder="Enter the task" />
            </div>
            <div className="form-control">
              <button onClick={insertData}>Enter</button>
            </div>
          </form>
          <h2>Todo List</h2>
          <ul>
            {getLists.map((list, key) => {
              return (
                <li key={key}>
                  <input type="checkbox" checked={list.complete} onChange={() => dispatch(Status(key))} />
                  <h3>{list.task}</h3>
                  <button onClick={() => dispatch(Delete(key))}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <footer>
        <div className="wrapper">
          <div className="task-controls">
            <button onClick={() => dispatch(completeAll())}>Mark All Task Completed</button>
            <button onClick={() => dispatch(deleteCompleteTask())}>Delete Completed Task</button>
          </div>
          <div className="task-count">
            <h3>Completed Task</h3>
            <h4>Count: {getLists.filter(list => list.complete).length}</h4>
            <h3>Pending Task</h3>
            <h4>Count: {getLists.filter(list => !list.complete).length}</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
