import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faForward, faBackward} from '@fortawesome//free-solid-svg-icons'

const MusicControls = ({SkipSong, setIsPlaying, isPlaying}) => {
  
  return (
    <div className="musicControls">
      <button className="prevbtn"onClick={() => SkipSong(false)} ><FontAwesomeIcon icon={faBackward}/></button>
      <button className="playbtn"onClick={() =>setIsPlaying(!isPlaying)}>
         <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}/></button>
      <button className="nextbtn"onClick={() => SkipSong()} ><FontAwesomeIcon icon={faForward}/></button>
    </div>
  )
}

export default MusicControls;