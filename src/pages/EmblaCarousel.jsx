import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import shoe1 from "../assets/posters/hero1.jpg";
import shoe2 from "../assets/posters/hero2.jpg";
import shoe3 from "../assets/posters/hero3.jpg";
import shoe4 from "../assets/posters/hero4.jpg";

const slides = [
  {
    image: shoe1,
    eyebrow: "NEW SEASON • 2026",
    title: "Move Different.",
    description: "Engineered for movement. Designed for everyday style.",
    button: "SHOP NOW ",
  },
  {
    image: shoe2,
    eyebrow: "SIGNATURE SERIES",
    title: "Built To Stand Out.",
    description: "Premium comfort with a silhouette made to be noticed.",
    button: "EXPLORE NOW",
  },
  {
    image: shoe3,
    eyebrow: "PERFORMANCE / STYLE",
    title: "Run Your Way.",
    description: "Lightweight performance that never compromises on style.",
    button: "SHOP SHOES",
  },
  {
    image: shoe4,
    eyebrow: "LIMITED DROP",
    title: "Own The Moment.",
    description: "A fresh statement for those who don't follow the crowd.",
    button: "DISCOVER",
  },
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 55,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  const prevSlide = () => {
    emblaApi?.scrollPrev();
  };

  const nextSlide = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="hero">

      <div className="hero__viewport" ref={emblaRef}>

        <div className="hero__container">

          {slides.map((slide, index) => (
            <div className="hero__slide" key={index}>

              <img
                className="hero__image"
                src={slide.image}
                alt={slide.title}
              />

              {/* Dark gradient */}
              <div className="hero__overlay"></div>

              {/* Content */}
              <div className="hero__content">

                <span className="hero__eyebrow">
                  {slide.eyebrow}
                </span>

                <h1>
                  {slide.title}
                </h1>

                <p>
                  {slide.description}
                </p>

                <button className="hero__button">
                  {slide.button}
                  <span>↗</span>
                </button>

              </div>

              {/* Slide number */}
              <div className="hero__number">
                <span>
                  0{index + 1}
                </span>
                <div></div>
                <span>
                  0{slides.length}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Navigation */}
      <div className="hero__navigation">

        <button onClick={prevSlide}>
          ←
        </button>

        <button onClick={nextSlide}>
          →
        </button>

      </div>

    </section>
  );
};

export default EmblaCarousel;