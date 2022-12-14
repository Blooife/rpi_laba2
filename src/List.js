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
        <h2>{t("list_ph")}</h2>
        <input
        type="text"
        placeholder={t('searchCaption')}
        onChange={(event)=> setValue(event.target.value)}
        className = "searchInp"
        >
        </input>
      </form>
        <div className="list_ph">
        <ul >
          {
              filteredPhotogr.map(p=>(
              <li key={p.number}>
                <Button className="but" variant="outline-dark" as={Link} to={`/list/${p.number}`}>
                  <img alt="" src={require(`./data/${p.fileName}/portrait.jpg`)}/>
                  {t("name"+ p.number)}
                </Button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    )
  }
  export default List;