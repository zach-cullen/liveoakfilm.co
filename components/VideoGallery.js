import { useState } from 'react'
import FeaturedVideo from './FeaturedVideo'
import VideoFullScreen from './VideoFullScreen'

const VideoGallery = ({ filmCollections }) => {
  const [showVideoFullScreen, setShowVideoFullScreen] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null)
  const toggleShowVideoFullScreen = (videoUrl) => setShowVideoFullScreen(prevState => !prevState)

  return (
    <>
      <VideoFullScreen
        show={showVideoFullScreen}
        closeVideoFullScreen={toggleShowVideoFullScreen}
        videoUrl={selectedVideoUrl}
      />
      {filmCollections.map((filmCollection, i) => (
        <FeaturedVideo
          key={filmCollection.id}
          filmCollection={filmCollection}
          flipDirection={(i + 1) % 2 === 0}
          showVideoFullScreen={toggleShowVideoFullScreen}
          setSelectedVideoUrl={setSelectedVideoUrl}
        />
      ))}
    </>
  )
}

export default VideoGallery
