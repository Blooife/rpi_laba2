import "./Card.css"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Carousel from 'react-bootstrap/Carousel';
import {useTranslation} from "react-i18next";

import PhotographersAPI from './PhotographersAPI';

import {useParams, Link} from "react-router-dom";

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
      <div className="cardInfo">
        <img alt="" src={require(`./data/${photographer.fileName}/portrait.jpg`)} height="400" width=""/>
        <div className="cardText">
          <h1>{photographer.name}</h1>
          <h2>{phtData.birthDate} - {phtData.deathDate}</h2>
          <div className="shortInfoWrap">
            <p >{phtData.shortInfo}</p>
          </div>  
        </div>
      </div>
      <>
      <Timeline lineColor={'#ddd'}>
      {
        phtData.events.map(p => (
          <TimelineItem
            style={{ color: '#000' }}
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
            dateText= {p.year} >
            <p>
              {p.description}
            </p>
            
          </TimelineItem>
        ))
      }
    </Timeline>
    </>

    <div className="cardQuote">
      <div>
        <p> „{phtData.quote}“ </p>
        <h6> -{phtData.quoteAuthor}</h6>
      </div>
    </div>



    <>
      <h2 className="title2">{t("gallery")}</h2>
      <Carousel  variant="dark" interval={000}>
      {
        phtData.gallery.map(p => (
          <Carousel.Item className="carousel-image">
            <img
              src={require(`./data/${photographer.fileName}/${p}`)}
              alt=""
            />
          </Carousel.Item>
        ))
        
      }    
      </Carousel>
    </>
    <div className="dopInfo">
          <div className="video-wrapper">
              <iframe className="person-video" src={phtData.videoLink} frameborder="0"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
              </iframe>
          </div>
      

      <iframe src={phtData.maplink} className="map_info"
           allowfullscreen="" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    
    </div>

    );
}

export default Card;