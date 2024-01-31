import React, { useRef } from "react"
import videoSrc from './video.mp4'

function App() {

  const video = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    console.log(video.current);
    
  }, [])

  return (
    <div>
      <div className="flex">
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()} >Pause</button>
      </div>
      <video ref={video} src={videoSrc}></video>
    </div>
  )
}

export default App