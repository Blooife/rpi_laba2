import "./Card.css"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Carousel from 'react-bootstrap/Carousel';
import {useTranslation} from "react-i18next";

import PhotographersAPI from './PhotographersAPI';

import {useParams, Link} from "react-router-dom";
import { t } from 'i18next';

function Card(){
    const params = useParams();
    const id = params.number;

    const photographer = PhotographersAPI.photographers.find(p=>p.number == id);
    const phtData = PhotographersAPI.phData.find(p=>p.number == id);

    const {t,i18n } = useTranslation();

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
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
            <p>
              {p.description}
            </p>
            
          </TimelineItem>
        ))
      }
      </Timeline>
      </>

      <>
      <Carousel variant="dark" interval={1000}>
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

      <div className="video-wrapper">
                <iframe className="person-video" src={phtData.videoLink} frameborder="0"
                width="700" height="450"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
                </iframe>
      </div>
      <div>
      <iframe src={phtData.maplink}
      width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
       ></iframe>
       </div>


      <Link to='/List'>{t("back_to_list")}</Link>

    </div>

    );
}

export default Card;