import "./Card.css"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Carousel from 'react-bootstrap/Carousel';

import PhotographersAPI from './PhotographersAPI';

import {useParams, Link} from "react-router-dom";

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
      <img alt="" src={require(`./data/${photographer.fileName}/portrait.jpg`)} />
      <h1>{photographer.name} (#{photographer.number})</h1>
      <h2>{phtData.birthDate} - {phtData.deathDate}</h2>
      <>
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
      </>

      <>
      <Carousel variant="dark">
      {
        phtData.gallery.map(p => (
          <Carousel.Item className="carouselImg">
            <img
              src={require(`./data/${photographer.fileName}/${p}`)}
              alt=""
            />
          </Carousel.Item>
        ))
        
      }    
      </Carousel>
      </>

      <Link to='/List'>Вернуться к списку</Link>

    </div>

    );
}

export default Card;