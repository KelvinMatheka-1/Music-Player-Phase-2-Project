import React, {useState, useEffect, useRef} from 'react'
import ArtistDetails from './ArtistDetails';
import MusicControls from './MusicControls';

const MusicPlayer = ({currentSongI, setCurrentSongI, songs, nextSongI}) => {
  const songElement = useRef(null)

  const[isPlaying, setIsplaying] = useState(false);

  useEffect(() => {
    if (isPlaying){
      songElement.current.play();
    }else{
      songElement.current.pause();
    }
  })
  const SkipSong = (forwards = true) => {
    if(forwards){
      setCurrentSongI(() => {
        let temp = currentSongI;
        temp++;

        if (temp > songs.length -1){
          temp = 0;
        }
        return temp;
      });
    }else{
      setCurrentSongI(() => {
        let temp = currentSongI;
        temp--

        if (temp < 0){
          temp = songs.length -1;
        }
        return temp;
      })
    }
  }
  return (
    <div className='musicplayer'>
        <audio src={songs[currentSongI].src} ref={songElement}></audio>
        <h4>Now Playing</h4>
        <ArtistDetails music={songs[currentSongI]}/>
        <MusicControls  isPlaying={isPlaying} setIsPlaying={setIsplaying} SkipSong={SkipSong}/>
        <p>Up next: {songs[nextSongI].title} by {songs[nextSongI].artist}</p>
    </div>
  )
}

export default MusicPlayer; 