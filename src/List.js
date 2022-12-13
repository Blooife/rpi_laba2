import {Link} from "react-router-dom";
import {useState} from 'react'
import {useTranslation} from "react-i18next";
import PhotographersAPI from './PhotographersAPI';

function List() {
    const {t,i18n } = useTranslation();
    const[value, setValue] = useState("");
    const filteredPhotogr = PhotographersAPI.photographers.filter(photographer=>{
      return photographer.name.toLowerCase().includes(value.toLowerCase());
    })
    console.log('Hi');
    return(
      
    <div>
      <form className="formSearch">
        <h3>{t("searchCaption")}</h3>
        <input
        type="text"
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