import styled from 'styled-components'

const ReviewGalleryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-row-gap: 60px;
  }
`

const ReviewImg = styled.div`
  width: 100%;
  height: 80px;
  background-image: url('http://localhost:1337${props => props.reviewImageUrl}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const ReviewText = styled.div`
  width: 100%;
  margin-top: 10px;
`

const Review = styled.div`
  text-align: center;

  p {
    padding-top: 10px;
  }
`

const ReviewGallery = ({ reviews }) => (
  <ReviewGalleryContainer>
    {reviews.map(review => (
      <Review key={review.id}>
        <div>
          <ReviewImg reviewImageUrl={review.image[0].url} />
          <p>{review.name}</p>
        </div>
        <ReviewText>
          <h4>"{review.review}"</h4>
        </ReviewText>
      </Review>
    ))}
  </ReviewGalleryContainer>
)

export default ReviewGallery
