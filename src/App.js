import './App.css';
//import Home from "./pages/Home";
import {BrowserRouter, useParams, Route, Routes,Link} from "react-router-dom";
import {useState} from 'react'
//import NavigationBar from "./components/Navigation/NavigationBar";
//import Architects from "./pages/Architects";
//import Architect from "./pages/Architect";

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const PhotographersAPI = {
  photographers: [
    { number: 1, name: "Антон Мотолько", fileName: "anton_motolko"},
    { number: 2, name: "Бенедикт Генрик Тышкевич", fileName: "benedikt_genrik_tyshkevich"},
    { number: 3, name: "Лев Дашкевич", fileName: "lev_dashkevich"},
    { number: 4, name: "Сергей Колтович", fileName: "sergei_koltovich"},
    { number: 5, name: "Ян Булгак", fileName: "yan_bulgak"}
  ],
  phData: [
    {number: 1, birthYear: "1914",deathYear: "1990",birthDate: "13.01.1914",deathDate: "23.01.1990",
    events: [
      {year:"1914 - 1932",description:""},
      {year:"1932 - 1936",description:""},
      {year:"1936 - 1940",description:""},
      {year:"1940 - 1944",description:""},
      {year:"1944 - 1950",description:""},
      {year:"1950 - 1990",description:""}],
    gallery : ["1.png","2.png","3.png"], videoLink: "7CsnFSbpUqE"},

    {number: 2, birthYear: "1852",deathYear: "1935",birthDate: "11.12.1852",deathDate: "1935",
    events: [
      {year:"1852 - 1874",description:"Представитель польского дворянского рода Тышкевичей герба «Лелива». Сын графа Михала Тышкевича (1824—1854) и Марии Ванды Тышкевич (1833—1860). После преждевременной смерти родителей (оба умерли от туберкулеза), с 8 лет его воспитанием занимался Бенедикт Тышкевич (1801—1866), дед по материнской линии, меценат и коллекционер, владелец Красного Двора, маршал Ковенской губернии."},
      {year:"1874 - 1876",description:"В первые годы своей жизни спортивные интересы графа Тышкевича выражались в путешествии по Сене на корабле, принадлежащем его деду Бенедикту, а также поездке в США, где в Бостоне он установил контакты с семьей богатых владельцев морских судов Пибоди. Бенедикт Тышкевич в 1874 году в Бостоне женился на американке Кларе Елизавете Банкрофт (1853 — июль 1883), дочери Эдварда Банкрофта (1823—1865) и Клары Елизаветы Пибоди (1826—1882)."},
      {year:"1876 - 1894",description:"Тышкевич дебютировал в 1876 году на выставке в Филадельфии, где представил репортаж из поездки в Алжир."},
      {year:"1894 - 1899",description:"В Польше его работы были представлены в 1894 году. Его наследие составляют фотографии из зарубежных поездок, а также произведения, созданные в ателье, в основном портреты."},
      {year:"1899 - 1935",description:"Его творчество пользовалась международным признанием, в 1899 году он получил золотую медаль на выставке в Берлине."},
      {year:"1935 - 1999",description:"Последние годы жизни Бенедикт Тышкевич провел на Лазурном берегу Франции, где и умер в 1935 году в возрасте 82 лет."},
      {year:"1999 - 2009",description:"Уцелевшие фотографии находятся в распоряжении музея Nicéphore Niepce в Шалон-сюр-Соне во Франции и были выставлены в Литве в 1999 году. В 2009 году в Национальном музее истории и культуры в Минске состоялась выставка фотографий Бенедикта Тышкевича."}],

    gallery : ["1.jpg","2.jpg","3.jpg","4.jpg"], videoLink: "7CsnFSbpUqE"},

    {number: 3, birthYear: "1914",deathYear: "1990",birthDate: "13.01.1914",deathDate: "23.01.1990",
    events: [
      {year:"1914 - 1932",description:""},
      {year:"1932 - 1936",description:""},
      {year:"1936 - 1940",description:""},
      {year:"1940 - 1944",description:""},
      {year:"1944 - 1950",description:""},
      {year:"1950 - 1990",description:""}],
    gallery : ["1.jpg","2.jpg","3.jpg","4.jpg"],
    videoLink: "7CsnFSbpUqE"},

    {number: 4, birthYear: "1914",deathYear: "1990",birthDate: "13.01.1914",deathDate: "23.01.1990",
    events: [
      {year:"1914 - 1932",description:""},
      {year:"1932 - 1936",description:""},
      {year:"1936 - 1940",description:""},
      {year:"1940 - 1944",description:""},
      {year:"1944 - 1950",description:""},
      {year:"1950 - 1990",description:""}],
    gallery : ["1.png","2.png","3.png"],
    videoLink: "7CsnFSbpUqE"},

    {number: 5, birthYear: "1914",deathYear: "1990",birthDate: "13.01.1914",deathDate: "23.01.1990",
    events: [
      {year:"1914 - 1932",description:""},
      {year:"1932 - 1936",description:""},
      {year:"1936 - 1940",description:""},
      {year:"1940 - 1944",description:""},
      {year:"1944 - 1950",description:""},
      {year:"1950 - 1990",description:""}],
    gallery : ["1.png","2.png","3.png"],
    videoLink: "7CsnFSbpUqE"},
  ],
  all: function() { return this.photographers},
}

function Card(){
    const params = useParams();
    const id = params.number;

    const photographer = PhotographersAPI.photographers.find(p=>p.number == id);
    const phtData = PhotographersAPI.phData.find(p=>p.number == id);

    if(photographer===undefined){
    return <div>Sorry, but the photographer was not found</div>
    }
    return (
    <div>
      <img src={require(`./data/${photographer.fileName}/portrait.jpg`)} />
      <h1>{photographer.name} (#{photographer.number})</h1>
      <h2>{phtData.birthDate} - {phtData.deathDate}</h2>
      <Timeline lineColor={'#ddd'}>

      {
        phtData.events.map(p => (
          <TimelineItem
            dateText= {p.year} >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              {p.description}
            </p>
          </TimelineItem>
        ))
      }

      </Timeline>
      <Link to='/List'>Вернуться к списку</Link>

    </div>

    );
}

function List() {
  const[value, setValue] = useState("");
  const filteredPhotogr = PhotographersAPI.photographers.filter(photographer=>{
    return photographer.name.toLowerCase().includes(value.toLowerCase());
  })
  console.log('Hi');
  return(
  <div>
    <form className="formSearch">
      <input
      type="text"
      placeholder='Search for photographer'
      onChange={(event)=> setValue(event.target.value)}
      >
      </input>
    </form>
    <ul>
      {
          filteredPhotogr.map(p=>(
          <li key={p.number}>
            <Link to={`/list/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
  )
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Home(){
  let dayPh = getRandomInt(1,6);
  const photographer = PhotographersAPI.photographers.find(p=>p.number == dayPh);
  return (
    <div>
    <h1>Фотографы Беларуси</h1>
    <h2>Фотограф дня: </h2>
    
    <div>
      <h1>{photographer.name} (#{photographer.number})</h1>
      <img src={require(`./data/${photographer.fileName}/portrait.jpg`)} />
    </div>
  </div>
  );
}

const Main = () => (
  <main>
    <Routes>
            <Route path="/list" element={<List />} />
            <Route path="/list/:number" element={<Card />} />
            <Route path="*" element={<Home />}/>
    </Routes>
  </main>
)

const Header = () => (
  <header className='header'>
    <nav >
      <img src={require(`./data/imgs/logo.png`)}></img>
      <div className='header-links'>
        <ul>
          <li><Link to='/' className='Nav-link'>Главная страница</Link></li>
          <li><Link to='/list' className='Nav-link'>Фотографы</Link></li>
        </ul>
      </div>
      <div className='language'>
        <h3>EN</h3>
        <h3>RU</h3>
      </div>
  </nav>
  
</header>
)

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

function App() {
  return (
      <>
        <BrowserRouter>
          <div>
          <Header />
          <Main />
          <Footer />
          </div>
        </BrowserRouter>
      </>

//pray for vika
  );
}

export default App;
