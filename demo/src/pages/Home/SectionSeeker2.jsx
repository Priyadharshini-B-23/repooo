import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Pizza from '../../assets/about/pizza.png';
import Salad from "../../assets/about/salad.png";
import Delivery from '../../assets/about/delivery-bike.png'
import "../../styles/HomeStyle.css";



//Moke Data Cards

const mockData =[
    {
        image:Pizza,
        title:"Original",
        paragraph:"Lorem ipsum porta semper cursus feugiat ultrica ris auctor dolor sit amet consectetur adipisicing elit. Harum, quae at."
    },

    {
        image:Salad,
        title:"Quality Foods",
        paragraph:"Lorem ipsum porta semper cursus feugiat ultrica ris auctor dolor sit amet consectetur adipisicing elit. Harum, quae at."
    },

    {
        image:Delivery,
        title:"Fast Delivery",
        paragraph:"Lorem ipsum porta semper cursus feugiat ultrica ris auctor dolor sit amet consectetur adipisicing elit. Harum, quae at."
    },
    
];

function SectionSeeker2 () {
  return (
    <>
    <section className='about_section' >
      <Container>
        <Row>
            <Col lg={{span:8,offset:2}} className='text-center' >  
            <h2>The burger tastes better when you eat it with your family</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a ea eveniet quos dolor nobis quo sed sapiente, dicta eius.</p>
           <Link to="/" className='byn order_now btn_red' >Explore Full Menu</Link>
            </Col>
        </Row>
      </Container>
    </section>

    <section className='about_wrapper' >
        <Container>
            <Row className='justify-content-md-center' >
             {mockData.map((cardData,index)=>(
                <Col md={6} lg={4} className='mb-4 mb-md-0' key={index} >
                 <div className='about_box text-center' >
                  <div className='about_icon' >
                   <img
                   src={cardData.image}
                   className='img-fluid'
                   alt="icon"
                   />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                 </div>
                 </Col>
             ))}
            </Row>
        </Container>
    </section>
    </>
  )
}

export default SectionSeeker2