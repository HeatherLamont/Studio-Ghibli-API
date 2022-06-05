const FilmDetails = ({selectedFilm}) => {
 


    

    const sectionStyle = {
        Opacity: 0.5,
        backgroundImage: `url(${selectedFilm.movie_banner})`
        
    }

  return(
      <div style={sectionStyle}>
          <h2>FILM DETAILS</h2>
          <h2>{selectedFilm.title} ({selectedFilm.release_date}) </h2>
          <p>Directed by: {selectedFilm.director} </p>
         
          <text>Description: {selectedFilm.description}</text>
          <p>Rating:{selectedFilm.rt_score}/100</p>
          <img alt="" src={selectedFilm.image}/>

      </div>
      
      
  )
}

export default FilmDetails;