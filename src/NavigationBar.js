import './NavigationBar.css';
import {Link,Outlet} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap"
import {useTranslation} from "react-i18next";
import './i18n.js';


function NavigaitonBar() {
  const {t,i18n } = useTranslation();
  return(
    <>
   
    <Navbar  as="header" expand="md" className="nav">
      <Container className='nav-into'>
      
      <img src={require(`./data/imgs/new-logo.png`)}></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className='collapse'>
        <Nav >          
          <div className='header-links'>
            <ul className='navbar-nav ml-auto' >
              <li><Link to='/' className='Nav-link'>{t('home_page')}</Link></li>
              <li><Link to='/list' className='Nav-link'>{t("list_of_ph")}</Link></li>
            </ul>
          </div>
        </Nav>
          <div className="nav-languages">
            <Nav.Link className="lang" onClick={() => i18n.changeLanguage('ru')}>
                 <span>{t("russian_lang")}</span>
            </Nav.Link>
            <Nav.Link className="lang" onClick={() => i18n.changeLanguage('en')}>                                
             <span>{t("english_lang")}</span>
             </Nav.Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
);
}
export default NavigaitonBar;