import React from "react";

const Carousel = ({ text, name, image }) => {
  return (
      <div class="carousel">
        <img src={process.env.PUBLIC_URL + image} alt="maria" />
        <blockquote class="testimonial">
          <p class="testimonial-text">{text}</p>
          <p class="testimonial-author">{name}</p>
        </blockquote>

        <button class="btn btn--right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="btn-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#087f5b"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button class="btn btn--left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="btn-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div class="dots">
          <button class="dot dot--fill">&nbsp;</button>
          <button class="dot">&nbsp;</button>
          <button class="dot">&nbsp;</button>
          <button class="dot">&nbsp;</button>
        </div>
      </div>
  
  );
};

export default Carousel;
