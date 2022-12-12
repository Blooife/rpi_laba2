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
    {number: 1, birthYear: "1988",deathYear: "",birthDate: "04.06.1988",deathDate: "",
    events: [
      {year:"1988 - 2011",description:"Закончил в 2004 году гимназию №29 г.Минска. Учился в Белорусской академии связи, после в Институте предпринимательской деятельности. Работал фотографом. Сотрудничал с интернет-порталом TUT.BY"},
      {year:"2011 - 2015",description:"В июле 2011 года был задержан во время молчаливой акции протеста в Минске."},
      {year:"2015 - 2018",description:"В 2015 году получил премию «Чемпионы гражданского подполья' в номинации «Журналист года»."},
      {year:"2018 - 2020",description:"Вместе с основателем магазина национальных товаров «Symbal.by» Павлом Белоусом и блоггером Эдуардом Пальчисом организовал праздничный концерт к столетию провозглашения БНР. Для проведения концерта организаторы собрали более 36 тысяч рублей на платформе «talaka.org»."},
      {year:"2020 - 2021",description:"Переехал в Польшу. Создал &quot; телеграмм-канал «МотолькоПомоги», который находится на 11 месте по числу подписчиков среди всех белорусских каналов. Канал создавался для освещения бытовых проблем в городах Беларуси, политических событий."},
      {year:"2021 - 2022",description:"Телеграмм-канал Антона Матолько был признан экстремистским по решению суда от 23 марта 2021 года. За создание такого формирования и членства в нем предусмотрена криминальная ответственность."}],
    gallery : ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"], videoLink: "7CsnFSbpUqE"},

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

    {number: 3, birthYear: "1882",deathYear: "1957",birthDate: "12.02.1882",deathDate: "04.12.1957",
    events: [
      {year:"1882 - 1904",description:"Происходил из шляхетского рода герба «Лелива». В 1882-1896 гг. учился в Минской мужской гимназии и Вильнюсском общежитии-конквите. С 1903 г. учился на медицинском факультете Варшавского университета. В 1904 г. за участие в студенческой забастовке арестован и исключен из Университета без права поступления в вузы Российской империи."},
      {year:"1906 - 1911",description:"Учился во Франции-на факультете филологии (La faculté de lettres) университета Бургундии (Дижон). Параллельно в 1908-1909 гг. занимался на фотографическом отделении Высшей школы графических искусств в Париже. С 1911 г. начал печататься в научных изданиях (La Nature. Paris)."},
      {year:"1911 - 1920",description:"Жил в Закавказье, работал преподавателем французского языка, физики, естествознания и других предметов в гимназиях Эривани (Ереван), Елизаветполя (ныне Гянджа, Азербайджан), Тифлиса (Тбилиси). Ездил по региону в качестве фотографа комиссии по описанию местностей и племен Кавказа. В 1918 году он служил государственным фотографом правительства Азербайджанской Республики."},
      {year:"1920 - 1924",description:"В конце мая 1920 г. вернулся в Минск.  С октября 1920 г. читал курсы лекций по мировой литературе и фотографии в минском Институте народного образования, с декабря 1920 г. преподавал французский язык в Белорусском политехническом институте.  В 1921 г. работал в научно-терминологической комиссии Наркомпроса БССР (естественнонаучная секция). В мае—июне 1923 г. участвовал в этнографической экспедиции в Игуменском и Борисовском уездах. В 1923-1924 научный фотограф на медицинском факультете БГУ."},
      {year:"1930 - 1941",description:"Арестован ГПУ БССР 21 июля 1930 г. по делу «Союза освобождения Беларуси». Освобожден в сентябре 1930 года. Работал в минском Доме техники, на географическом факультете БГУ, 1-й клинике Минского мединститута, Институте теоретической и клинической медицины АН БССР."},
      {year:"1941 - 1957",description:"В 1941-1944 жил в эвакуации в г. Фрунзе (ныне Бишкек, Кыргызстан), работал в медицинских учреждениях. В сентябре 1944 г. вернулся в Минск.  Работал в Институте теоретической медицины и Институте физиологии."},
      {year:"1957 - 2002",description:"Похоронен на Кальварийском кладбище в Минске. В сентябре-декабре 2002 г. в Национальном музее истории и культуры Беларуси состоялась выставка произведений Дашкевича «Очарованный Беларусью»."}],
    gallery : ["1.jpg","2.jpg","3.jpg","4.jpg"],
    videoLink: "7CsnFSbpUqE"},

{number: 4, birthYear: "1961",deathYear: "2022",birthDate: "29.09.1961",deathDate: "09.08.2022",
    events: [
      {year:"1961-1980",description:"Родился в семье рабочих. Отец - Владимир Николаевич Колтович(1937 - 1979). Мать - Инна Николаевна Колтович. В 1968 - 1977 годах учился в СШ №6 Минска. В 1980 году закончил Минское художественное училище по специальности «хоровое дирижирование»."},
      {year:"1980 - 1982",description:"Служил в рядах Советской армии"},
      {year:"1984 - 1987",description:"Работал фотографом в БелНИИП градостроительства"},
      {year:"1987 - 1990",description:"Получил бронзовую медаль ВДНХ в Москве. Был начальником фотолаборатории в агенстве «Прапанова»"},
      {year:"1990 - 1993",description:"Работал фотографом в музее П. Бровки"},
      {year:"1997 - 2022",description:"Работал фотографом на Минском художественном комбинате"}],
    gallery : ["1.jpg","2.jpg","3.jpg","4.jpg"],
    videoLink: "7CsnFSbpUqE"},

{number: 5, birthYear: "1876",deathYear: "1950",birthDate: "06.10.1876",deathDate: "04.02.1950",
    events: [
      {year:"1876 - 1899",description:"Окончил классическую гимназию в Вильне. В 1897—1899 годах изучал философию в Ягеллонском университете в Кракове (не закончил). Вернувшись из Кракова, жил в имении Пересека под Минском, откуда посылал корреспонденции в виленские газеты."},
      {year:"1899 - 1912",description:"Случайно заинтересовался фотографией. Изучал фотодело в Дрездене. В 1912 году открыл фотоателье в Вильне на улице Портовой 12 (сгорело в 1944; погибло около 30 тысяч негативов, часть уцелела)."},
      {year:"1912 - 1919",description:"По заказу магистрата в 1912—1915 годах фотографировал памятники архитектуры города. С 1919 года преподавал художественную фотографию на отделении изящных искусств Университета Стефана Батория; доцент (1939). В 1919 году стал одним из основателей и председателем Виленского фотоклуба. Руководил им до начала Второй мировой войны."},
      {year:"1935 - 1939",description:"Был одним из редакторов журналов „Przegląd Fotograficzny“, „Fotograf Polski“. В 1935 году издал книгу про свое путешествие из Вильно на озеро Нарочь с 38 фотоснимками. Написал ряд книг по технике и искусству фотографии, воспоминания о Фердинанде Рущице (1939), а также стихотворения и новеллы."},
      {year:"1945 - 1950",description:"В 1945 году переехал в Варшаву. Выполнил около тысячи фотографий разрушенной и восстанавливавшейся Варшавы, около 2 тысяч фотографий западных земель, присоединённых к Польше. В 1947 году стал учредителем Союза фотохудожников Польши и руководил им до своей смерти."}],
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
