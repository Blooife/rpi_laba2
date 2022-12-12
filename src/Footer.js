const Footer = () =>(
    <footer>
      <nav>
        <ul >
          <li>
             <img src={require(`./data/git_img/vi.png`)} alt=""/>
              <a href="https://github.com/Ejevika10">Виктория Лозюк</a>
              <h6>Ejevika10</h6>
          </li>        
          <li>
              <img src={require(`./data/git_img/ksu.png`)} alt=""/>
              <a href="https://github.com/KseniaHlebanova">Ксения Хлебанова</a>
              <h6>KseniaHlebanova</h6>
          </li>
          <li>
              <img src={require(`./data/git_img/alex.png`)} alt=""/>
              <a href='https://github.com/Blooife'>Саша Милковская</a>
              <h6>Blooife</h6>
          </li>
        </ul>
      </nav>
    </footer>
)
export default Footer;  