import React from 'react'

const ArtistDetails = ({music}) => {
  return (
   <div className="playerdetails">
    <div className="artist-image">
      <img src={music.img_src} alt='album img'/>
    </div>
    <h3 className="titledetails">
    {music.title}
    </h3>
    <h4 className="artistdetails">
    {music.artist}
    </h4>
   </div>
  )
}

export default ArtistDetails