import {Link} from "react-router-dom";
import {useState} from 'react'
import PhotographersAPI from './PhotographersAPI';

function List() {
    const[value, setValue] = useState("");
    const filteredPhotogr = PhotographersAPI.photographers.filter(photographer=>{
      return photographer.name.toLowerCase().includes(value.toLowerCase());
    })
    console.log('Hi');
    return(
      
    <div>
      <form className="formSearch">
        <input
        type="text"
        placeholder='Search for photographer'
        onChange={(event)=> setValue(event.target.value)}
        >
        </input>
      </form>
      <ul>
        {
            filteredPhotogr.map(p=>(
            <li key={p.number}>
              <Link to={`/list/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
    )
  }
  export default List;