import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Carousel from 'react-bootstrap/Carousel';

import PhotographersAPI from './PhotographersAPI';

import {useParams, Link} from "react-router-dom";

function Card(){
    const params = useParams();
    const id = params.number;

    const photographer = PhotographersAPI.photographers.find(p=>p.number === id);
    const phtData = PhotographersAPI.phData.find(p=>p.number === id);

    if(photographer===undefined){
    return <div>Sorry, but the photographer was not found</div>
    }
    return (
    <div>
      <img alt="" src={require(`./data/${photographer.fileName}/portrait.jpg`)} />
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

      <Carousel>
      {
        phtData.gallery.map(p => (
          <Carousel.Item>
            <img
              /*className="d-block w-100"*/
              src={require(`./data/${photographer.fileName}/${p}`)}
              alt=""
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
        
      }    
      </Carousel>

      <Link to='/List'>Вернуться к списку</Link>

    </div>

    );
}

export default Card;