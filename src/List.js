import {Link} from "react-router-dom";
import {useState} from 'react'
import {useTranslation} from "react-i18next";
import { Button } from "react-bootstrap";
import PhotographersAPI from './PhotographersAPI';
import "./List.css"

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
      
    <div className="list">
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
              <Button variant="outline-dark" as={Link} to={`/list/${p.number}`}>
                <img alt="" src={require(`./data/${p.fileName}/portrait.jpg`)}/>
                {t("name"+ p.number)}
              </Button>
            </li>
          ))
        }
      </ul>
    </div>
    )
  }
  export default List;