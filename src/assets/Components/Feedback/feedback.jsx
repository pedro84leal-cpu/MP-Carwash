import { useState } from 'react';
import styles from '../Feedback/feedback.module.css';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { feedbacks } from '../../Data/feedbaks/feed';



const Feedback = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.feedbackBanner}>
      <h2 className={styles.feedbackTitle}>
        O que os nossos clientes dizem 
      </h2>
      
      <div className={styles.feedbackCarousel}>
        <button className={styles.navButton} onClick={prevSlide}>
          <MdKeyboardArrowLeft />
        </button>
        
        <div className={styles.feedbackCard}>
          <div className={styles.stars}>
            {"★".repeat(feedbacks[currentIndex].estrelas)}
            {"☆".repeat(5 - feedbacks[currentIndex].estrelas)}
          </div>
          <p className={styles.feedbackText}>"{feedbacks[currentIndex].texto}"</p>
          <p className={styles.clientName}>- {feedbacks[currentIndex].nome} -</p>
        </div>
        
        <button className={styles.navButton} onClick={nextSlide}>
          <MdKeyboardArrowRight />
        </button>
      </div>
      
      <div className={styles.indicators}>
        {feedbacks.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;