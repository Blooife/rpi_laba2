import './NavigationBar.css';
import {Link,Outlet} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap"
import {useTranslation} from "react-i18next";
import './i18n.js';


function NavigaitonBar() {
  const {t,i18n } = useTranslation();
  return(
    <>

    <Navbar   as="header" expand="md" className="nav navbar-dark " >
      <Container >
      <Navbar.Brand>
      <img src={require(`./data/imgs/new-logo2.png`)} alt='logo'
      className = 'align-top'
      
      ></img>
      </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className='collapse' >
        <Nav class="navbar navbar-dark" >          
          <div className='header-links'>
            <ul className='navbar-nav ml-auto' >
              <li className='link'><Link to='/' className='Nav-link'>{t('home_page')}</Link></li>
              <li className='link'><Link to='/list' className='Nav-link'>{t("list_of_ph")}</Link></li>
            </ul>
          </div>
        
          <div className="nav-languages">
            <Nav.Link className="lang" onClick={() => i18n.changeLanguage('ru')}>
                <img src={require(`./data/imgs/ru_flag.png`)}></img>
                 <span>{t("russian_lang")}</span>
            </Nav.Link>
            <Nav.Link className="lang" onClick={() => i18n.changeLanguage('en')}>                                
              <img src={require(`./data/imgs/en_flag.png`)}></img>
              <span>{t("english_lang")}</span>
             </Nav.Link>
            </div>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
);
}
export default NavigaitonBar;