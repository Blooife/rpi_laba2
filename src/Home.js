import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import PhotographersAPI from './PhotographersAPI';
import { Button } from "react-bootstrap";
import "./Home.css"


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function Home(){
    const {t,i18n } = useTranslation();
    let dayPh = getRandomInt(1,6);
    const photographer = PhotographersAPI.photographers.find(p=>p.number === dayPh);
    const phtData = PhotographersAPI.phData.find(p=>p.number === dayPh);

    return (
      <div>
        <div className="home">
          <h1>{t("ph_of_Bel")}</h1>
          <p> {t("home_text")}</p>
        </div>
        
        <div className="homeInfo">
          <h2>{t("ph_of_day")} </h2>
          <div className="cardH">
            <img alt="" src={require(`./data/${photographer.fileName}/portrait.jpg`)} height="400" width=""/>
            <div className="cardText">
              <h1>{photographer.name}</h1>
              <h2>{phtData.birthDate} - {phtData.deathDate}</h2>
              <div>
                <p>{phtData.shortInfo}</p>
              </div>
                <Button variant="outline-dark" as={Link} to={`/list/${photographer.number}`}>{t("l_more")}</Button>
             </div>
          </div>
        </div>

      </div>
    
    );
  }
  export default Home;