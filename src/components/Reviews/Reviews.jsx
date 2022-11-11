import { getReviewsById } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    (async function getReviews() {
      try {
        const reviews = await getReviewsById(movieId);
        setReview(reviews);
      } catch (error) {}
    })();
  }, [movieId]);

  if (!reviews) {
    return null;
  }
  return reviews.length > 0 ? (
    <div>
      <ul className={css.reviewList}>
        {reviews.map(({ id, author, content }) => (
          <li className={css.reviewItem} key={id}>
            <h5>Author: {author}</h5>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};

export default Reviews;
