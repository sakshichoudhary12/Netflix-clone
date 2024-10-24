import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId,bool}) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie)
  useMovieById(movieId);
  if (!trailerMovie || !trailerMovie.key) {
    return <div>Loading trailer...</div>;  // You can add a loader or a fallback UI here
  }
  return (
    <div className='ww-[vw] overflow-hidden'>
      <iframe 
      className={`${bool ? "w-[100%]" :"w-screen aspect-video"}`}
      src={`https://www.youtube.com/embed/${trailerMovie.key}?si=blpUn42XcaLjePOi&autoplay=1&mute=1`}
      title="YouTube video player" 
      frameBorder="0"
      allowfullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground
