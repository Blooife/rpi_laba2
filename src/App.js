import './App.css';
//import Home from "./pages/Home";
import {BrowserRouter, useParams, Route, Routes,Link} from "react-router-dom";
//import NavigationBar from "./components/Navigation/NavigationBar";
//import Architects from "./pages/Architects";
//import Architect from "./pages/Architect";

const PhotographersAPI = {
  photographers: [
    { number: 1, name: "Антон Мотолько", fileName: "anton_motolko"},
    { number: 2, name: "Бенедикт Генрик Тышкевич", fileName: "benedikt_genrik_tyshkevich"},
    { number: 3, name: "Лев Дашкевич", fileName: "lev_dashkevich"},
    { number: 4, name: "Сергей Колтович", fileName: "sergei_koltovich"},
    { number: 5, name: "Ян Булгак", fileName: "yan_bulgak"}
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
            <Route path="*" element={<Home />}>
            </Route>
    </Routes>
  </main>
)

const Header = () => (
  <header>
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/list'>List</Link></li>
    </ul>
  </nav>
</header>
)

function App() {
  return (
      <>
        <BrowserRouter>
          <div>
          <Header />
          <Main />
          </div>
        </BrowserRouter>
      </>

//pray for vika
  );
}

export default App;
