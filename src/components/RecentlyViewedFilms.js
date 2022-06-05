const RecentlyViewedFilms = ({filmList, handleFilmUpdate}) => {

    const handleChange = (event) => {
        console.log(event.target.value);
        handleFilmUpdate(event.target.value)
       
      }

   const filmObject = filmList.map((film) => {
       console.log(film.id)
     return(
        <ul>
           
           <input onClick={handleChange} 
           className="recently-viewed-image" 
           key={film.id} value={film.title} 
           type="image" src={film.image}
           alt="" />
           
            {/* <button onClick={handleChange} key={film.id} value={film.title} >{film.title}</button> */}
        </ul>
           
     )
   })


  return(
      <>
      <h2>Recently Viewed Films</h2>
      <div>
          
        <ul className="recently-viewed-ul">
                  {filmObject}

        </ul>
                 
            
      </div>
      </>

  )
}

export default RecentlyViewedFilms;