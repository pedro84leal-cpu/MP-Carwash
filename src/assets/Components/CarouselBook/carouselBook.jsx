import { useState} from 'react';
import { imagens } from '../../Pages/Galeria/data';
import styles from '../CarouselBook/carouselBool.module.css'

const CarouselBook = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.grid}>
        <h1 className={styles.ti}>
            Cuidamos do seu carro por dentro e por fora!
        </h1>
      <div className={styles.slideContainer}>
        <button className={styles.arrow} onClick={prevSlide}>
          ❮
        </button>

        <div className={styles.slideImageWrapper}>
          <img
            src={imagens[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className={styles.slideImage}
          />
          <div className={styles.counter}>
            {currentIndex + 1} / {imagens.length}
          </div>
        </div>

        <button className={styles.arrow} onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className={styles.dots}>
        {imagens.map((_, index) => (
          <span
            key={index}
            className={`styles.dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <p className={styles.pi}>
        - Desde a lavagem exterior que devolve o brilho original, 
        até à limpeza interior detalhada que garante conforto e higiene, 
        tratamos cada detalhe com rigor.
      </p>
      <p className={styles.pi}>
        - Utilizamos produtos de qualidade e técnicas especializadas para deixar o seu veículo impecável, como novo!
      </p>
    </div>
  );
};
  

export default CarouselBook;