import { useState } from 'react'
import FeaturedVideo from './FeaturedVideo'
import VideoFullScreen from './VideoFullScreen'

const VideoGallery = ({ filmCollections }) => {
  const [showVideoFullScreen, setShowVideoFullScreen] = useState(false)
  const toggleShowVideoFullScreen = () => setShowVideoFullScreen(prevState => !prevState)

  return (
    <>
      <VideoFullScreen show={showVideoFullScreen} closeClickHandler={toggleShowVideoFullScreen} />
      {filmCollections.map((filmCollection, i) => (
        <FeaturedVideo
          key={filmCollection.id}
          filmCollection={filmCollection}
          flipDirection={(i + 1) % 2 === 0}
          playClickHandler={toggleShowVideoFullScreen}
        />
      ))}
    </>
  )
}

export default VideoGallery
