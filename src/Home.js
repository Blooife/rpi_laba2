import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import PhotographersAPI from './PhotographersAPI';
import { Button } from "react-bootstrap";


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function Home(){
    const {t,i18n } = useTranslation();
    let dayPh = getRandomInt(1,6);
    const photographer = PhotographersAPI.photographers.find(p=>p.number === dayPh);
    return (
      <div>
      <h1>{t("ph_of_Bel")}</h1>
      <p> {t("home_text")}</p>
     
      <h2>{t("ph_of_day")}: </h2>
      <div>
        <h1>{photographer.name} (#{photographer.number})</h1>
        <img  alt="" src={require(`./data/${photographer.fileName}/portrait.jpg`)} />
        <Button variant="outline-dark" as={Link} to={`/list/${photographer.number}`}>{t("l_more")}</Button>
      </div>
    </div>
    );
  }
  export default Home;