import { useEffect, useRef, useState } from 'react'
import { ReviewCard } from '@/components/ReviewCard/ReviewCard'
import { REVIEWS, getReviewsForLayout } from '@/data/reviews'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import mintDecorTablet from '@/assets/icons/figma-vector-tablet.svg'
import styles from './Reviews.module.css'

const SWIPE_THRESHOLD = 50
const DEFAULT_CARD_INDEX = Math.max(
  0,
  REVIEWS.findIndex((review) => review.id === 'maksym'),
)

export function Reviews() {
  const isDesktop = useMediaQuery('(min-width: 1440px)')
  const isTablet = useMediaQuery('(min-width: 768px)')
  const reviews = isDesktop ? REVIEWS : getReviewsForLayout(isTablet)
  const slidesPerView = isTablet ? 2 : 1
  const cardWidth = isTablet ? 304 : 330
  const cardGap = isTablet ? 24 : 16
  const slideStep = cardWidth + cardGap
  const pageCount = Math.ceil(reviews.length / slidesPerView)

  const [leadIndex, setLeadIndex] = useState(isTablet ? 0 : DEFAULT_CARD_INDEX)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const draggingRef = useRef(false)
  const startXRef = useRef(0)

  useEffect(() => {
    setLeadIndex(isTablet ? 0 : DEFAULT_CARD_INDEX)
    setDragOffset(0)
    setIsDragging(false)
    draggingRef.current = false
  }, [isTablet, isDesktop])

  const pageIndex = Math.floor(leadIndex / slidesPerView)

  const goToPage = (page: number) => {
    const nextPage = Math.max(0, Math.min(pageCount - 1, page))
    setLeadIndex(nextPage * slidesPerView)
  }

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true
    startXRef.current = event.clientX
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) {
      return
    }

    setDragOffset(event.clientX - startXRef.current)
  }

  const onPointerUp = () => {
    if (!draggingRef.current) {
      return
    }

    if (dragOffset < -SWIPE_THRESHOLD) {
      goToPage(pageIndex + 1)
    } else if (dragOffset > SWIPE_THRESHOLD) {
      goToPage(pageIndex - 1)
    }

    draggingRef.current = false
    setDragOffset(0)
    setIsDragging(false)
  }

  const translateX = -leadIndex * slideStep + dragOffset
  const cards = reviews.map((review) => (
    <ReviewCard key={review.id} review={review} />
  ))

  return (
    <section className={styles.section} id="reviews">
      <img
        alt=""
        aria-hidden
        className={styles.decor}
        src={mintDecorTablet}
      />
      <h2 className={styles.title}>Відгуки</h2>
      {isDesktop ? (
        <div className={styles.list}>{cards}</div>
      ) : (
        <>
          <div
            className={styles.viewport}
            onPointerCancel={onPointerUp}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            <div
              className={
                isDragging ? `${styles.track} ${styles.trackDragging}` : styles.track
              }
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {cards}
            </div>
          </div>
          <div className={styles.dots}>
            {Array.from({ length: pageCount }, (_, page) => (
              <button
                aria-current={page === pageIndex}
                aria-label={`Слайд ${page + 1}`}
                className={
                  page === pageIndex ? `${styles.dot} ${styles.dotActive}` : styles.dot
                }
                key={page}
                onClick={() => goToPage(page)}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
