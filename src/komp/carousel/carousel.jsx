import React, { useState } from 'react';
/*import { TransitionGroup, CSSTransition } from '';*/
import './carousel.css';
import {TransitionGroup} from "react-transition-group";

const images = [
    'image1.jpg',
    'image2.jpg',
];

function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div classname="carousel">
            <button onClick={prevSlide}>Předchozí</button>
            <TransitionGroup classname="carousel-slide">
                <csstransition key="{index}" timeout="{500}" classnames="slide">
                    <img src={images[index]} alt={`Slide ${index + 1}   `}/>
                </csstransition>
            </TransitionGroup>
            <button onClick={nextSlide}>Další</button>
        </div>
    );
}

export default Carousel;