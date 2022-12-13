import "./Footer.css"
import {useTranslation} from "react-i18next";


function Footer(){
  const {t,i18n } = useTranslation();
  return(
    <footer>
      <nav>
      <h2>{t("devs")}</h2>
        <ul >
          <li>
            <h6>{t("vika")}</h6>
            <img src={require(`./data/git_img/vi.png`)} alt=""/>
            <a href="https://github.com/Ejevika10">Ejevika10</a>
          </li>        
          <li>
            <h6>{t("ksu")}</h6>
            <img src={require(`./data/git_img/ksu.png`)} alt=""/>
            <a href="https://github.com/KseniaHlebanova">KseniaHlebanova</a>
          </li>
          <li>
            <h6>{t("sasha")}</h6>
            <img src={require(`./data/git_img/alex.png`)} alt=""/>
            <a href='https://github.com/Blooife'>Blooife</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default Footer;  