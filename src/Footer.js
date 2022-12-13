import {useTranslation} from "react-i18next";


function Footer(){
  const {t,i18n } = useTranslation();
  return(
    <footer>
      <nav>
        <h2>{t("devs")}</h2>
        <ul >
          <li>
             <img src={require(`./data/git_img/vi.png`)} alt=""/>
              <a href="https://github.com/Ejevika10">{t("vika")}</a>
              <h6>Ejevika10</h6>
          </li>        
          <li>
              <img src={require(`./data/git_img/ksu.png`)} alt=""/>
              <a href="https://github.com/KseniaHlebanova">{t("ksu")}</a>
              <h6>KseniaHlebanova</h6>
          </li>
          <li>
              <img src={require(`./data/git_img/alex.png`)} alt=""/>
              <a href='https://github.com/Blooife'>{t("sasha")}</a>
              <h6>Blooife</h6>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default Footer;  