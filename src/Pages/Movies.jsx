import React from 'react'
import Slider from '../Components/Ui/Slider/Slider'


const Movies = () => {
  return (
    <div className='Movies'>
      <Slider uniqueId={1} title={"Popular Top 10 In Genres"} description={""} url={`trending/movie/day`}/>
      <Slider uniqueId={2} title={"Trending Now"} description={""} url={`movie/now_playing`}/>
      <Slider uniqueId={3} title={"New Releases"} description={""} url={`movie/top_rated`}/>
      <Slider uniqueId={4} title={"Must - Watch Movies"} description={""} url={`movie/upcoming`}/>
    </div>
  )
}

export default Movies
