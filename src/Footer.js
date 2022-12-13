import "./Footer.css"
const Footer = () =>(
    <footer>
      <nav >
        <ul >
          <li >
            <h6>Виктория Лозюк</h6>
            <img src={require(`./data/git_img/vi.png`)} width="120" height="120" alt=""/>
            <a href="https://github.com/Ejevika10">Ejevika10</a>
          </li>        
          <li >
            <h6>Ксения Хлебанова</h6>
            <img src={require(`./data/git_img/ksu.png`)} width="120" height="120" alt=""/>
            <a href="https://github.com/KseniaHlebanova">KseniaHlebanova</a>
          </li>
          <li >
            <h6>Саша Милковская</h6>
            <img src={require(`./data/git_img/alex.png`)} width="120" height="120" alt=""/>
            <a href='https://github.com/Blooife'>Blooife</a>
          </li>
        </ul>
      </nav>
    </footer>
)
export default Footer;  