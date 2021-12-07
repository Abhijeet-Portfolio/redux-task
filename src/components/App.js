import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detail, remove, edit } from '../actions';
import '../assets/css/App.css';

function App() {
  const [fname, setfname] = useState('');
  const [dept, setdept] = useState('');
  const [editMode, seteditMode] = useState(false);
  const [id, setid] = useState(null);
  const emp = useSelector(state => state.arr);
  const dispatch = useDispatch();

  const getData = e => {
    e.preventDefault();
    if (editMode) {
      dispatch(edit({fname,dept},id));
      seteditMode(false);
    }
    else { dispatch(detail({ fname, dept })); }  
    setfname('');
    setdept('');
  }

  const editData = (data,key) => {
    setid(key);
    setfname(data.fname);
    setdept(data.dept);
    seteditMode(true);
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
                  <div>
                    <button onClick={() => editData(value,key)}>Edit</button>
                    <button onClick={() => dispatch(remove(key))}>Remove</button>
                  </div>
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
