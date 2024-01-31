import React, { useRef } from "react"
import videoSrc from './video.mp4'

function App() {

  const video = React.useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = React.useState(false)

  function forwards() {
    if(!video.current) return;
     video.current.currentTime += 2
  }

  function changePlayBackRate(speed: number) {
    if(!video.current) return;
    video.current.playbackRate = speed
  }

  function mute() {
    if(!video.current) return;
    video.current.muted = !video.current.muted
  }

  async function PictureInPicture() {
    if(!video.current) return;
    if(document.pictureInPictureElement) {
      await document.exitPictureInPicture()
    } else {
      await video.current.requestPictureInPicture()
    }
  }

  return (
    <div>
      <div className="flex">
        {playing ? <button onClick={() => video.current?.pause()}>Pause</button> : <button onClick={() => video.current?.play()}>Play</button>}
      <button onClick={forwards}> + 2</button>
      <button onClick={() => changePlayBackRate(1)}> 1X</button>
      <button onClick={() => changePlayBackRate(2)}> 2X</button>
      <button onClick={PictureInPicture}> PiP</button>
      <button onClick={mute}> M</button>
      </div>
      <video controls ref={video} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} src={videoSrc}></video>
    </div>
  )
}

export default App
