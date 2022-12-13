import {Link} from "react-router-dom";
import {useState} from 'react'
import {useTranslation} from "react-i18next";
import PhotographersAPI from './PhotographersAPI';

function List() {
    const {t,i18n } = useTranslation();
    const[value, setValue] = useState("");
    const filteredPhotogr = PhotographersAPI.photographers.filter(photographer=>{
      let f = t('name'+photographer.number)
      if(f.toLowerCase().includes(value.toLowerCase())){
        return photographer.name;
      }      
    })
    return(
      
    <div>
      <form className="formSearch">
        <h3>{t("list_ph")}</h3>
        <input
        type="text"
        placeholder={t('searchCaption')}
        onChange={(event)=> setValue(event.target.value)}
        >
        </input>
      </form>
      <ul>
        {
            filteredPhotogr.map(p=>(
            <li key={p.number}>
              <Link to={`/list/${p.number}`}>{t("name"+ p.number)}</Link>
            </li>
          ))
        }
      </ul>
    </div>
    )
  }
  export default List;