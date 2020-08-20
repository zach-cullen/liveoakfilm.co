import FeaturedVideo from './FeaturedVideo'

const VideoGallery = ({ filmCollections }) => {
  return (
    <>
      {filmCollections.map((filmCollection, i) => (
        <FeaturedVideo key={filmCollection.id} filmCollection={filmCollection} flipDirection={(i + 1) % 2 === 0} />
      ))}
    </>
  )
}

export default VideoGallery
