import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detail, remove } from '../actions';
import '../assets/css/App.css';

function App() {
  const [fname, setfname] = useState(null);
  const [dept, setdept] = useState(null);
  const emp = useSelector(state => state.arr);
  const dispatch = useDispatch();

  const getData = e => {
    e.preventDefault();
    dispatch(detail({ fname, dept }));
  }

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Employee Details</h1>
        </div>
      </header>
      <section>
        <div className="wrapper">
          <form>
            <div className="form-group">
              <label htmlFor="fname">Enter the Employee Name : </label>
              <input type="text" id="fname" value={fname} onChange={e => setfname(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="dpt">Enter Department Name : </label>
              <input type="text" id="dpt" value={dept} onChange={e => setdept(e.target.value)} />
            </div>
            <div className="form-control">
              <button onClick={getData}>Submit</button>
            </div>
          </form>
          <ul>
            {emp.map((value, key) => {
              return (
                <li key={key}>
                  <div>
                    <h3>Name: {value.fname}</h3>
                    <h4>Department: {value.dept}</h4>
                  </div>
                  <button onClick={() => dispatch(remove(key))}>Remove</button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

// const display = props => {
//   if(props.length !== 0){
//     return ( 
//       <Todolist data={props}/>
//     )
//   }
// }

export default App;
