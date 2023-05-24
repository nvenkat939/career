import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props){
    return(
        <>
        <li className="cards__items">
         <Link 
         className='cards__items__link' to={props.path}>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img src={props.src} alt="image1.jpg"
                className="cards__items__img"/>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>
                {props.text}
                </h5>
            </div>
            </Link>   
        </li>
            </>
    );
}
export default CardItem;
