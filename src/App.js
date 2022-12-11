import './App.css';
//import Home from "./pages/Home";
import {BrowserRouter, useParams, Route, Routes,Link} from "react-router-dom";
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
      "1914 - 1932",
      "1932 - 1936",
      "1936 - 1940",
      "1940 - 1944",
      "1944 - 1950",
      "1950 - 1990"],
    gallery : ["1.png","2.png","3.png"],
    videoLink: "7CsnFSbpUqE"},

    {number: 2, birthYear: "1852",deathYear: "1935",birthDate: "11.12.1852",deathDate: "1935",
    events: [
      "1852 - 1874",
      "1874 - 1876",
      "1876 - 1894",
      "1894 - 1899",
      "1899 - 1935",
      "1935 - 1999",
      "1999 - 2009"],
      gallery : ["1.jpg","2.jpg","3.jpg","4.jpg"],
    videoLink: "7CsnFSbpUqE"},

    {number: 3, birthYear: "1914",deathYear: "1990",birthDate: "13.01.1914",deathDate: "23.01.1990",
    events: [
      "1914 - 1932",
      "1932 - 1936",
      "1936 - 1940",
      "1940 - 1944",
      "1944 - 1950",
      "1950 - 1990"],
    gallery : ["1.jpg","2.jpg","3.jpg","4.jpg"],
    videoLink: "7CsnFSbpUqE"},

    {number: 4, birthYear: "1914",deathYear: "1990",birthDate: "13.01.1914",deathDate: "23.01.1990",
    events: [
      "1914 - 1932",
      "1932 - 1936",
      "1936 - 1940",
      "1940 - 1944",
      "1944 - 1950",
      "1950 - 1990"],
    gallery : ["1.png","2.png","3.png"],
    videoLink: "7CsnFSbpUqE"},

    {number: 5, birthYear: "1914",deathYear: "1990",birthDate: "13.01.1914",deathDate: "23.01.1990",
    events: [
      "1914 - 1932",
      "1932 - 1936",
      "1936 - 1940",
      "1940 - 1944",
      "1944 - 1950",
      "1950 - 1990"],
    gallery : ["1.png","2.png","3.png"],
    videoLink: "7CsnFSbpUqE"},
  ],
  all: function() { return this.photographers},
}

function Card(){
    const params = useParams();
    const id = params.number;

    const photographer = PhotographersAPI.photographers.find(p=>p.number == id);
    if(photographer===undefined){
    return <div>Sorry, but the photographer was not found</div>
    }
    return (
    <div>
      <img src={require(`./data/${photographer.fileName}/portrait.jpg`)} />
      <h1>{photographer.name} (#{photographer.number})</h1>
      <Link to='/List'>Вернуться к списку</Link>
      <Timeline lineColor={'#ddd'}>

  <TimelineItem
    key="001"
    dateText="11/2010 – Present"  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="04/2009 – 11/2010">
    <h3 >Title, Company</h3>
    <h4 >Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="08/2008 – 11/2008">
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
</Timeline>

    </div>

    );
}
const List = () => (
  <div>
    <ul>
      {
        PhotographersAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/list/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)
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
  <header >
  <nav>
    <ul className='Nav'>
      <li><Link to='/'>Главная страница</Link></li>
      <li><Link to='/list'>Фотографы</Link></li>
    </ul>
  </nav>
</header>
)

const Footer = () =>(
  <footer>
    <nav>
      <ul>
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
