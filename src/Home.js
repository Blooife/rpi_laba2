import {Link} from "react-router-dom";

import PhotographersAPI from './PhotographersAPI';


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function Home(){
    let dayPh = getRandomInt(1,6);
    const photographer = PhotographersAPI.photographers.find(p=>p.number === dayPh);
    return (
      <div>
      <h1>Фотографы Беларуси</h1>
      <p> Современный мир невозможно себе представить без самого, пожалуй, распространённого на сегодняшний день вида искусств – фотографии. Однако не стоит отождествлять истинное творчество в этом жанре с бесчисленным количеством личных снимков. Настоящее искусство фотографирования – это нечто гораздо большее, чем пресловутые селфи. Предлагаем познакомиться с белорусской фотографией от истоков до современности.</p>
     
      <h2>Фотограф дня: </h2>
      <div>
        <h1>{photographer.name} (#{photographer.number})</h1>
        <img  alt="" src={require(`./data/${photographer.fileName}/portrait.jpg`)} />
        <Link to={`/list/${photographer.number}`}>Узнать больше</Link>
      </div>
    </div>
    );
  }
  export default Home;