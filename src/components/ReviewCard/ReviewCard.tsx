import type { Review } from "@/data/reviews";
import styles from "./ReviewCard.module.css";
import starIcon from "@/assets/icons/review-star.svg";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <p className={styles.text}>{review.text}</p>
        <div className={styles.author}>
          <img
            alt=""
            className={styles.avatar}
            height={66}
            src={review.avatar}
            width={66}
          />
          <div className={styles.meta}>
            <p className={styles.name}>
              {review.name}, {review.age} років
            </p>
            <div className={styles.stars} aria-label={`${review.rating} з 5`}>
              {Array.from({ length: review.rating }, (_, index) => (
                <img
                  alt=""
                  aria-hidden
                  className={styles.star}
                  height={24}
                  key={index}
                  src={starIcon}
                  width={24}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
